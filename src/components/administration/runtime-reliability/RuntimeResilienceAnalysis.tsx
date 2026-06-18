import {
  Activity,
  Shield,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export default function RuntimeResilienceAnalysis() {
  const resilienceMetrics = [
    {
      label: "Resilience Score",
      value: "97%",
      icon: Shield,
    },
    {
      label: "Protection Coverage",
      value: "Complete",
      icon: ShieldCheck,
    },
    {
      label: "Adaptive Capacity",
      value: "High",
      icon: TrendingUp,
    },
    {
      label: "Operational Stability",
      value: "Healthy",
      icon: Activity,
    },
  ];

  return (
    <section className="rounded-2xl border bg-card p-6 shadow-sm">
      <div>
        <h3 className="text-xl font-semibold">
          Runtime Resilience Analysis
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Resilience intelligence evaluates the runtime platform's ability
          to withstand failures, adapt to disruptions, and maintain
          continuous operations across enterprise tenant environments.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {resilienceMetrics.map((metric) => {
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