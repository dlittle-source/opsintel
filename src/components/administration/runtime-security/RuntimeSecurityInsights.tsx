import {
  Brain,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export default function RuntimeSecurityInsights() {
  const insights = [
    {
      title: "Threat Posture",
      description:
        "Runtime threat indicators remain below baseline thresholds with no critical events detected.",
      icon: ShieldCheck,
    },
    {
      title: "Identity Intelligence",
      description:
        "Authentication and privileged access controls are operating within expected security boundaries.",
      icon: Brain,
    },
    {
      title: "Security Trends",
      description:
        "Vulnerability exposure continues to decrease due to automated patch and policy enforcement.",
      icon: TrendingUp,
    },
    {
      title: "AI Recommendations",
      description:
        "Continue automated security scans and maintain identity governance policies across tenants.",
      icon: Sparkles,
    },
  ];

  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="mb-5">
        <h3 className="text-lg font-semibold">
          Runtime Security Insights
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          AI-generated intelligence and strategic recommendations for
          enterprise runtime security posture and operational defense.
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