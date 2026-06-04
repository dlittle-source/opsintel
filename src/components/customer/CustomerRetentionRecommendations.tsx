import {
  Brain,
  ShieldAlert,
  TrendingUp,
  RefreshCcw,
  ArrowRight,
} from "lucide-react";

const recommendations = [
  {
    title: "Churn Mitigation Initiative",
    description:
      "Launch executive outreach for accounts exhibiting declining health and elevated churn probability.",
    icon: ShieldAlert,
  },
  {
    title: "Renewal Acceleration Program",
    description:
      "Prioritize renewal planning sessions 90 days before contract expiration to improve retention outcomes.",
    icon: RefreshCcw,
  },
  {
    title: "Expansion Revenue Opportunity",
    description:
      "Target high-health accounts with governance, compliance, and AI intelligence expansion packages.",
    icon: TrendingUp,
  },
];

export default function CustomerRetentionRecommendations() {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <div className="mb-2 flex items-center gap-2 text-cyan-300">
            <Brain className="h-4 w-4" />
            <span className="text-sm font-medium">
              AI Retention Recommendations
            </span>
          </div>

          <h2 className="text-2xl font-bold text-white">
            Executive Retention Advisory Layer
          </h2>

          <p className="mt-2 max-w-3xl text-sm text-slate-400">
            AI-generated recommendations designed to improve retention,
            reduce churn risk, accelerate renewals, and maximize lifetime
            customer value.
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-3">
          <div className="text-xs text-slate-400">
            Advisory Confidence
          </div>

          <div className="text-lg font-semibold text-cyan-300">
            94%
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {recommendations.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
            >
              <Icon className="mb-4 h-5 w-5 text-cyan-300" />

              <h3 className="font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-emerald-300">
              Executive Recommendation
            </div>

            <div className="mt-2 text-white">
              Focus retention resources on elevated-risk enterprise accounts
              while accelerating expansion conversations with high-health
              customers.
            </div>
          </div>

          <ArrowRight className="h-5 w-5 text-emerald-300" />
        </div>
      </div>
    </section>
  );
}