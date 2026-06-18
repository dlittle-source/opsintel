import {
  AlertTriangle,
  Eye,
  Radar,
  ShieldAlert,
} from "lucide-react";

export default function RuntimeThreatDetection() {
  const threats = [
    {
      label: "Suspicious Activity",
      value: "2 Events",
      icon: Eye,
    },
    {
      label: "Attack Surface",
      value: "Low",
      icon: ShieldAlert,
    },
    {
      label: "Anomaly Signals",
      value: "Normal",
      icon: Radar,
    },
    {
      label: "Critical Threats",
      value: "0 Detected",
      icon: AlertTriangle,
    },
  ];

  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="mb-5">
        <h3 className="text-lg font-semibold">
          Runtime Threat Detection
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Continuous analysis of runtime behaviors, anomalies,
          suspicious activities, and attack indicators.
        </p>
      </div>

      <div className="space-y-4">
        {threats.map((threat) => {
          const Icon = threat.icon;

          return (
            <div
              key={threat.label}
              className="flex items-center justify-between rounded-xl border bg-background/50 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg border p-2">
                  <Icon className="h-4 w-4 text-primary" />
                </div>

                <span className="text-sm font-medium">
                  {threat.label}
                </span>
              </div>

              <span className="text-sm text-muted-foreground">
                {threat.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}