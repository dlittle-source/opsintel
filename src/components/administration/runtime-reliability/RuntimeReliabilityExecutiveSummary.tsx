import { CheckCircle2, ShieldCheck, Signal, Zap } from "lucide-react";

export default function RuntimeReliabilityExecutiveSummary() {
  const summaryItems = [
    {
      label: "Runtime Availability",
      value: "99.98%",
      description: "Active uptime posture across tenant runtime services.",
      icon: Signal,
    },
    {
      label: "Recovery Readiness",
      value: "Ready",
      description: "Recovery workflows are aligned with enterprise objectives.",
      icon: ShieldCheck,
    },
    {
      label: "Failover Coverage",
      value: "Protected",
      description: "Critical runtime domains have failover visibility.",
      icon: Zap,
    },
    {
      label: "Reliability Status",
      value: "Stable",
      description: "No reliability regressions detected in runtime operations.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="rounded-2xl border bg-card p-6 shadow-sm">
      <div>
        <p className="text-sm font-medium text-muted-foreground">
          Enterprise Runtime Reliability Suite
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">
          Runtime Reliability Executive Summary
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Executive-level reliability intelligence for availability, recovery,
          failover posture, redundancy coverage, and runtime resilience across
          tenant environments.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {summaryItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="rounded-xl border bg-background p-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg border bg-card p-2">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="text-lg font-semibold">{item.value}</p>
                </div>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}