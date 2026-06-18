import {
  ArrowLeftRight,
  Network,
  Server,
  ShieldCheck,
} from "lucide-react";

export default function RuntimeFailoverIntelligence() {
  const failoverMetrics = [
    {
      label: "Automatic Failover",
      value: "Enabled",
      icon: ArrowLeftRight,
    },
    {
      label: "Secondary Nodes",
      value: "Available",
      icon: Server,
    },
    {
      label: "Network Redundancy",
      value: "Protected",
      icon: Network,
    },
    {
      label: "Failover Status",
      value: "Healthy",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="rounded-2xl border bg-card p-6 shadow-sm">
      <div>
        <h3 className="text-xl font-semibold">
          Runtime Failover Intelligence
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Failover intelligence provides visibility into redundancy pathways,
          secondary resources, and automated recovery capabilities that
          maintain operational continuity during service disruptions.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {failoverMetrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <div
              key={metric.label}
              className="rounded-xl border bg-background p-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg border bg-card p-2">
                  <Icon className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    {metric.label}
                  </p>

                  <p className="text-lg font-semibold">
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