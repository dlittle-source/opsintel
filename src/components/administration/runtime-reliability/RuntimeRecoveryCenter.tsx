import {
  DatabaseBackup,
  RotateCcw,
  ShieldCheck,
  TimerReset,
} from "lucide-react";

export default function RuntimeRecoveryCenter() {
  const recoveryMetrics = [
    {
      label: "Recovery Readiness",
      value: "Prepared",
      icon: RotateCcw,
    },
    {
      label: "Backup Integrity",
      value: "Verified",
      icon: DatabaseBackup,
    },
    {
      label: "Recovery Time Objective",
      value: "< 15 min",
      icon: TimerReset,
    },
    {
      label: "Protection Status",
      value: "Healthy",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="rounded-2xl border bg-card p-6 shadow-sm">
      <div>
        <h3 className="text-xl font-semibold">
          Runtime Recovery Center
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Recovery intelligence monitors backup readiness, restoration posture,
          and recovery objectives to maintain operational continuity across
          enterprise runtime environments.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {recoveryMetrics.map((metric) => {
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