import {
  ArrowRight,
  Gauge,
  GitBranch,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const recommendations = [
  {
    title: "Accelerate commercialization readiness",
    description:
      "Finalize pricing strategy, packaging intelligence, and go-to-market readiness initiatives to support platform monetization.",
    impact: "Commercialization",
    icon: TrendingUp,
    accent: "text-emerald-300",
  },
  {
    title: "Enhance executive governance visibility",
    description:
      "Expand policy intelligence, access governance, and operational oversight reporting across enterprise environments.",
    impact: "Governance",
    icon: ShieldCheck,
    accent: "text-amber-300",
  },
  {
    title: "Advance operational intelligence maturity",
    description:
      "Standardize deployment controls, operational readiness scoring, and executive decision-support workflows.",
    impact: "Executive Intelligence",
    icon: GitBranch,
    accent: "text-cyan-300",
  },
];

export default function StrategicRecommendationsFeed() {
  return (
    <section className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-[0_0_50px_rgba(15,23,42,0.55)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_35%)]" />

      <div className="relative z-10 mb-5 flex items-start justify-between gap-4">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
            <Gauge className="h-3.5 w-3.5" />
            Strategic Intelligence Recommendations
          </div>

          <h2 className="text-xl font-semibold tracking-tight text-white">
            AI-prioritized executive actions.
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Executive recommendations generated from readiness scoring,
            governance intelligence, commercialization insights, operational
            maturity indicators, and AI-assisted decision support.
          </p>
        </div>
      </div>

      <div className="relative z-10 space-y-3">
        {recommendations.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.06]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/[0.04]">
                  <Icon className={`h-5 w-5 ${item.accent}`} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-sm font-semibold text-white">
                      {item.title}
                    </h3>

                    <span className={`text-xs font-medium ${item.accent}`}>
                      {item.impact}
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </div>

                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-500 transition group-hover:translate-x-1 group-hover:text-cyan-300" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}