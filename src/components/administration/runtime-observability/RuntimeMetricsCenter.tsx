import {
  Activity,
  BarChart3,
  Gauge,
  TrendingUp,
} from "lucide-react";

export default function RuntimeMetricsCenter() {
  const metrics = [
    {
      label: "Performance Metrics",
      value: "Healthy",
      icon: Gauge,
    },
    {
      label: "Telemetry Signals",
      value: "Active",
      icon: Activity,
    },
    {
      label: "Trend Analysis",
      value: "Operational",
      icon: TrendingUp,
    },
    {
      label: "Metric Collection",
      value: "Continuous",
      icon: BarChart3,
    },
  ];

  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="mb-5">
        <h3 className="text-lg font-semibold">
          Runtime Metrics Center
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Continuous collection and analysis of runtime telemetry,
          KPIs, trends, and operational performance metrics.
        </p>
      </div>

      <div className="space-y-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <div
              key={metric.label}
              className="flex items-center justify-between rounded-xl border bg-background/50 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg border p-2">
                  <Icon className="h-4 w-4 text-primary" />
                </div>

                <span className="text-sm font-medium">
                  {metric.label}
                </span>
              </div>

              <span className="text-sm text-muted-foreground">
                {metric.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}