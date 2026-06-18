import { ShieldCheck } from "lucide-react";

import { getRuntimeComplianceSnapshot } from "@/lib/runtimeComplianceEngine";

export default function RuntimeComplianceSection() {
  const compliance = getRuntimeComplianceSnapshot();

  return (
    <section className="rounded-xl border bg-card p-6">
      <div className="flex items-center gap-2">
        <ShieldCheck className="h-5 w-5 text-primary" />

        <h2 className="text-xl font-semibold tracking-tight">
          Runtime Compliance
        </h2>
      </div>

      <p className="mt-2 text-sm text-muted-foreground">
        Runtime compliance intelligence validating tenant isolation,
        policy enforcement, entitlement governance, and audit readiness.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <MetricCard
          label="Compliance Status"
          value={compliance.complianceStatus}
        />

        <MetricCard
          label="Compliance Score"
          value={compliance.complianceScore}
        />

        <MetricCard
          label="Active Controls"
          value={String(compliance.activeControls)}
        />
      </div>

      <div className="mt-6 space-y-3">
        {compliance.controls.map((control) => (
          <div
            key={control.label}
            className="rounded-lg border bg-card p-4"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="font-medium">
                {control.label}
              </p>

              <p className="text-sm text-muted-foreground">
                {control.status}
              </p>
            </div>

            <p className="mt-2 text-2xl font-bold">
              {control.score}
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              {control.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

type MetricCardProps = {
  label: string;
  value: string;
};

function MetricCard({
  label,
  value,
}: MetricCardProps) {
  return (
    <div className="rounded-lg border bg-card p-4">
      <p className="text-sm text-muted-foreground">
        {label}
      </p>

      <p className="mt-2 text-xl font-bold">
        {value}
      </p>
    </div>
  );
}