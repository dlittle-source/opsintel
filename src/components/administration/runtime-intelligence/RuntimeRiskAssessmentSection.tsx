import { AlertTriangle } from "lucide-react";

import { getRuntimeRiskAssessmentSnapshot } from "@/lib/runtimeRiskAssessmentEngine";

export default function RuntimeRiskAssessmentSection() {
  const assessment = getRuntimeRiskAssessmentSnapshot();

  return (
    <section className="rounded-xl border bg-card p-6">
      <div className="flex items-center gap-2">
        <AlertTriangle className="h-5 w-5 text-primary" />

        <h2 className="text-xl font-semibold tracking-tight">
          Runtime Risk Assessment
        </h2>
      </div>

      <p className="mt-2 text-sm text-muted-foreground">
        Executive visibility into runtime risks, policy drift,
        dependency concentration, audit readiness, and capacity exposure.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <MetricCard
          label="Overall Risk"
          value={assessment.overallRisk}
        />

        <MetricCard
          label="Active Risks"
          value={String(assessment.activeRisks)}
        />

        <MetricCard
          label="Risk Score"
          value={assessment.riskScore}
        />
      </div>

      <div className="mt-6 space-y-3">
        {assessment.risks.map((risk) => (
          <div
            key={risk.category}
            className="rounded-lg border bg-card p-4"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="font-medium">
                {risk.category}
              </p>

              <p className="text-sm text-muted-foreground">
                {risk.severity}
              </p>
            </div>

            <p className="mt-2 text-2xl font-bold">
              {risk.score}
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              {risk.description}
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