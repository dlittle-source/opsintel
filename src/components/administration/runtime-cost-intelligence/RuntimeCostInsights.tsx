import {
  Brain,
  PiggyBank,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export default function RuntimeCostInsights() {
  const insights = [
    {
      title: "Spending Intelligence",
      description:
        "Runtime spending remains within approved budget thresholds with stable month-over-month growth.",
      icon: PiggyBank,
    },
    {
      title: "Efficiency Analysis",
      description:
        "Resource utilization and optimization efforts continue improving operational efficiency.",
      icon: Brain,
    },
    {
      title: "Cost Trends",
      description:
        "Forecasted growth remains predictable with no significant cost anomalies detected.",
      icon: TrendingUp,
    },
    {
      title: "AI Recommendations",
      description:
        "Continue automated optimization policies and maintain proactive capacity planning.",
      icon: Sparkles,
    },
  ];

  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="mb-5">
        <h3 className="text-lg font-semibold">
          Runtime Cost Insights
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          AI-driven financial intelligence and recommendations for
          runtime efficiency, spending optimization, and cost planning.
        </p>
      </div>

      <div className="space-y-4">
        {insights.map((insight) => {
          const Icon = insight.icon;

          return (
            <div
              key={insight.title}
              className="rounded-xl border bg-background/50 p-4"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-lg border p-2">
                  <Icon className="h-4 w-4 text-primary" />
                </div>

                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">
                    {insight.title}
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    {insight.description}
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