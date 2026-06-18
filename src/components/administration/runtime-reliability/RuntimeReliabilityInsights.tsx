import {
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";

export default function RuntimeReliabilityInsights() {
  const insights = [
    {
      title: "Availability Objective Achieved",
      description:
        "Runtime availability remains within enterprise service objectives.",
      icon: CheckCircle2,
    },
    {
      title: "Recovery Posture Stable",
      description:
        "Recovery capabilities and backup integrity remain healthy.",
      icon: ShieldCheck,
    },
    {
      title: "Resilience Capacity Improving",
      description:
        "Adaptive resilience metrics continue to trend positively.",
      icon: TrendingUp,
    },
    {
      title: "Failover Readiness Verified",
      description:
        "Secondary systems and automated failover mechanisms remain operational.",
      icon: Zap,
    },
  ];

  return (
    <section className="rounded-2xl border bg-card p-6 shadow-sm">
      <div>
        <h3 className="text-xl font-semibold">
          Runtime Reliability Insights
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          AI-generated reliability intelligence highlights recovery posture,
          availability objectives, resilience trends, and failover readiness
          across enterprise runtime environments.
        </p>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {insights.map((insight) => {
          const Icon = insight.icon;

          return (
            <div
              key={insight.title}
              className="rounded-xl border bg-background p-5"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-lg border bg-card p-2">
                  <Icon className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <h4 className="font-semibold">
                    {insight.title}
                  </h4>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {insight.description}
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