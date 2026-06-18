import {
  Activity,
  Bell,
  Eye,
  LineChart,
} from "lucide-react";

export default function RuntimeObservabilityExecutiveSummary() {
  const metrics = [
    {
      label: "Runtime Visibility",
      value: "Healthy",
      icon: Eye,
    },
    {
      label: "Metrics Collection",
      value: "Active",
      icon: LineChart,
    },
    {
      label: "Monitoring Status",
      value: "Operational",
      icon: Activity,
    },
    {
      label: "Alert Coverage",
      value: "Enabled",
      icon: Bell,
    },
  ];

  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div>
        <p className="text-sm font-medium text-muted-foreground">
          Phase 18T — Enterprise Runtime Observability Suite
        </p>

        <h2 className="mt-2 text-2xl font-semibold tracking-tight">
          Runtime Observability Executive Summary
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
          Unified observability intelligence delivering visibility into
          logs, metrics, traces, alerts, and operational monitoring
          across the enterprise runtime ecosystem.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <div
              key={metric.label}
              className="rounded-xl border bg-background/60 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg border bg-card p-2">
                  <Icon className="h-4 w-4 text-primary" />
                </div>

                <div>
                  <p className="text-xs text-muted-foreground">
                    {metric.label}
                  </p>

                  <p className="text-sm font-semibold">
                    {metric.value}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}