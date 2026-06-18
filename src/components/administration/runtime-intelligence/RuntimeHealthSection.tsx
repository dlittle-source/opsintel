import {
  Activity,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import { getRuntimeHealthSummary } from "@/lib/runtimeHealthEngine";

export default function RuntimeHealthSection() {
  const summary = getRuntimeHealthSummary();

  const healthMetrics = [
    {
      label: "Runtime Availability",
      value: summary.serviceAvailability,
      icon: CheckCircle2,
    },
    {
      label: "Service Health",
      value: summary.overallHealth,
      icon: Activity,
    },
    {
      label: "Active Incidents",
      value: summary.activeIncidents.toString(),
      icon: ShieldCheck,
    },
    {
      label: "Operational Readiness",
      value: summary.operationalReadiness,
      icon: TrendingUp,
    },
  ];

  return (
    <section className="rounded-xl border bg-card p-6">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">
          Runtime Health
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          High-level operational health indicators providing executive
          visibility into the enterprise runtime environment.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {healthMetrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <div
              key={metric.label}
              className="rounded-lg border border-border bg-card p-4"
            >
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-slate-300" />

                <div>
                  <p className="text-sm font-medium text-slate-200">
                    {metric.label}
                  </p>

                  <p className="mt-1 text-lg font-semibold text-white">
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