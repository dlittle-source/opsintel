import {
  Activity,
  Bell,
  Eye,
  FileText,
} from "lucide-react";

export default function RuntimeObservabilityOverview() {
  const items = [
    {
      title: "Log Visibility",
      status: "Active",
      icon: FileText,
    },
    {
      title: "Metrics Collection",
      status: "Healthy",
      icon: Activity,
    },
    {
      title: "Alert Monitoring",
      status: "Enabled",
      icon: Bell,
    },
    {
      title: "Runtime Visibility",
      status: "Operational",
      icon: Eye,
    },
  ];

  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="mb-5">
        <h3 className="text-lg font-semibold">
          Runtime Observability Overview
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Centralized observability intelligence providing visibility into
          runtime metrics, logs, alerts, and monitoring coverage.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-xl border bg-background/50 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg border p-2">
                  <Icon className="h-4 w-4 text-primary" />
                </div>

                <div>
                  <p className="text-sm font-medium">
                    {item.title}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {item.status}
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