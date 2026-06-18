import {
  Bell,
  BellRing,
  Siren,
  TriangleAlert,
} from "lucide-react";

export default function RuntimeAlertingCenter() {
  const alerts = [
    {
      label: "Active Alerts",
      value: "3",
      icon: Bell,
    },
    {
      label: "Critical Notifications",
      value: "0",
      icon: TriangleAlert,
    },
    {
      label: "Escalation Policies",
      value: "Enabled",
      icon: Siren,
    },
    {
      label: "Notification Coverage",
      value: "Healthy",
      icon: BellRing,
    },
  ];

  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="mb-5">
        <h3 className="text-lg font-semibold">
          Runtime Alerting Center
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Centralized alert intelligence for notifications,
          escalations, event severity management, and operational
          awareness across the enterprise runtime.
        </p>
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => {
          const Icon = alert.icon;

          return (
            <div
              key={alert.label}
              className="flex items-center justify-between rounded-xl border bg-background/50 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg border p-2">
                  <Icon className="h-4 w-4 text-primary" />
                </div>

                <span className="text-sm font-medium">
                  {alert.label}
                </span>
              </div>

              <span className="text-sm text-muted-foreground">
                {alert.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}