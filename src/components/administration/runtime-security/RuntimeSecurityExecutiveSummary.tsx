import { LockKeyhole, ShieldAlert, ShieldCheck, Siren } from "lucide-react";

export default function RuntimeSecurityExecutiveSummary() {
  const metrics = [
    {
      label: "Security Posture",
      value: "Protected",
      icon: ShieldCheck,
    },
    {
      label: "Threat Exposure",
      value: "Low",
      icon: ShieldAlert,
    },
    {
      label: "Identity Risk",
      value: "Controlled",
      icon: LockKeyhole,
    },
    {
      label: "Incident Defense",
      value: "Active",
      icon: Siren,
    },
  ];

  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div>
        <p className="text-sm font-medium text-muted-foreground">
          Phase 18S — Enterprise Runtime Security Suite
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">
          Runtime Security Executive Summary
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
          Centralized runtime security intelligence for threat detection,
          vulnerability awareness, identity protection, policy enforcement, and
          active incident defense across the OpsIntel multi-tenant enterprise
          runtime.
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
                  <p className="text-sm font-semibold">{metric.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}