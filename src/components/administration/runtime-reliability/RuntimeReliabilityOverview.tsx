import {
  Activity,
  DatabaseBackup,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";

export default function RuntimeReliabilityOverview() {
  const metrics = [
    {
      label: "Availability",
      value: "99.98%",
      icon: Activity,
    },
    {
      label: "Recovery Readiness",
      value: "Operational",
      icon: RefreshCcw,
    },
    {
      label: "Backup Integrity",
      value: "Verified",
      icon: DatabaseBackup,
    },
    {
      label: "Resilience Status",
      value: "Healthy",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="rounded-2xl border bg-card p-6 shadow-sm">
      <div>
        <h3 className="text-xl font-semibold">
          Runtime Reliability Overview
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          High-level reliability metrics provide operational visibility into
          runtime availability, recovery preparedness, redundancy posture, and
          resilience health.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <div
              key={metric.label}
              className="rounded-xl border bg-background p-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg border bg-card p-2">
                  <Icon className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    {metric.label}
                  </p>

                  <p className="text-lg font-semibold">
                    {metric.value}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}