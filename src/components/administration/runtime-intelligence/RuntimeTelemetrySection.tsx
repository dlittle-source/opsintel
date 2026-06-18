import { Activity } from "lucide-react";

import { getRuntimeTelemetrySnapshot } from "@/lib/runtimeTelemetryEngine";

export default function RuntimeTelemetrySection() {
  const telemetry = getRuntimeTelemetrySnapshot();

  return (
    <section className="rounded-xl border bg-card p-6">
      <div className="flex items-center gap-2">
        <Activity className="h-5 w-5 text-primary" />

        <h2 className="text-xl font-semibold tracking-tight">
          Runtime Telemetry
        </h2>
      </div>

      <p className="mt-2 text-sm text-muted-foreground">
        Live runtime telemetry signals summarizing tenant activity, policy
        evaluations, feature resolution, provisioning, and telemetry freshness.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <MetricCard
          label="Telemetry Status"
          value={telemetry.telemetryStatus}
        />

        <MetricCard
          label="Active Signals"
          value={String(telemetry.activeSignals)}
        />

        <MetricCard
          label="Data Freshness"
          value={telemetry.dataFreshness}
        />
      </div>

      <div className="mt-6 space-y-3">
        {telemetry.signals.map((signal) => (
          <div
            key={signal.label}
            className="rounded-lg border bg-card p-4"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="font-medium">
                {signal.label}
              </p>

              <p className="text-sm text-muted-foreground">
                {signal.status}
              </p>
            </div>

            <p className="mt-2 text-2xl font-bold">
              {signal.value}
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              {signal.description}
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