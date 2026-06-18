import {
  Activity,
  HeartPulse,
  MonitorSmartphone,
  Server,
} from "lucide-react";

export default function RuntimeMonitoringOperations() {
  const operations = [
    {
      label: "Service Health",
      value: "Healthy",
      icon: HeartPulse,
    },
    {
      label: "Infrastructure Monitoring",
      value: "Operational",
      icon: Server,
    },
    {
      label: "Endpoint Visibility",
      value: "Active",
      icon: MonitorSmartphone,
    },
    {
      label: "Monitoring Coverage",
      value: "99%",
      icon: Activity,
    },
  ];

  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="mb-5">
        <h3 className="text-lg font-semibold">
          Runtime Monitoring Operations
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Operational monitoring intelligence providing visibility into
          service health, infrastructure status, endpoint monitoring,
          and enterprise runtime coverage.
        </p>
      </div>

      <div className="space-y-4">
        {operations.map((operation) => {
          const Icon = operation.icon;

          return (
            <div
              key={operation.label}
              className="flex items-center justify-between rounded-xl border bg-background/50 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg border p-2">
                  <Icon className="h-4 w-4 text-primary" />
                </div>

                <span className="text-sm font-medium">
                  {operation.label}
                </span>
              </div>

              <span className="text-sm text-muted-foreground">
                {operation.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}