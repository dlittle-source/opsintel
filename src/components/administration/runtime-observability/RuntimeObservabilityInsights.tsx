import {
  Brain,
  Eye,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export default function RuntimeObservabilityInsights() {
  const insights = [
    {
      title: "Monitoring Posture",
      description:
        "Enterprise runtime monitoring coverage remains healthy with no major visibility gaps detected.",
      icon: Eye,
    },
    {
      title: "Telemetry Intelligence",
      description:
        "Metrics, traces, and logs continue to provide complete operational awareness across workloads.",
      icon: Brain,
    },
    {
      title: "Observability Trends",
      description:
        "Performance indicators and alert volumes remain within expected baselines.",
      icon: TrendingUp,
    },
    {
      title: "AI Recommendations",
      description:
        "Maintain current alert thresholds and continue proactive monitoring coverage expansion.",
      icon: Sparkles,
    },
  ];

  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="mb-5">
        <h3 className="text-lg font-semibold">
          Runtime Observability Insights
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          AI-driven operational intelligence and recommendations for
          enterprise observability and monitoring optimization.
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