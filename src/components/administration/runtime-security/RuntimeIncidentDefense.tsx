import {
  Shield,
  Siren,
  Target,
  Zap,
} from "lucide-react";

export default function RuntimeIncidentDefense() {
  const defenses = [
    {
      label: "Active Defenses",
      value: "Operational",
      icon: Shield,
    },
    {
      label: "Incident Readiness",
      value: "High",
      icon: Siren,
    },
    {
      label: "Containment Strategy",
      value: "Prepared",
      icon: Target,
    },
    {
      label: "Response Automation",
      value: "Enabled",
      icon: Zap,
    },
  ];

  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="mb-5">
        <h3 className="text-lg font-semibold">
          Runtime Incident Defense
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Defensive intelligence for incident response, attack containment,
          operational readiness, and automated remediation across the
          enterprise runtime.
        </p>
      </div>

      <div className="space-y-4">
        {defenses.map((defense) => {
          const Icon = defense.icon;

          return (
            <div
              key={defense.label}
              className="flex items-center justify-between rounded-xl border bg-background/50 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg border p-2">
                  <Icon className="h-4 w-4 text-primary" />
                </div>

                <span className="text-sm font-medium">
                  {defense.label}
                </span>
              </div>

              <span className="text-sm text-muted-foreground">
                {defense.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}