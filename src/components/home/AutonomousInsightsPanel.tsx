import { BrainCircuit, Cpu, Eye, Sparkles } from "lucide-react";

const insights = [
  {
    title: "Operational Readiness Trending Up",
    detail:
      "Readiness scoring, validation signals, and executive oversight indicators show stronger platform resilience.",
    icon: Cpu,
    accent: "text-cyan-300",
  },
  {
    title: "Governance Visibility Improved",
    detail:
      "Policy posture, control alignment, and enterprise oversight signals remain within healthy operating thresholds.",
    icon: Eye,
    accent: "text-emerald-300",
  },
  {
    title: "AI Decision Confidence Elevated",
    detail:
      "OpsIntel intelligence models report high confidence across current executive recommendations and readiness signals.",
    icon: BrainCircuit,
    accent: "text-violet-300",
  },
];

export default function AutonomousInsightsPanel() {
  return (
    <section className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-[0_0_50px_rgba(15,23,42,0.55)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.12),transparent_35%)]" />

      <div className="relative z-10">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs font-medium text-violet-200">
          <Sparkles className="h-3.5 w-3.5" />
          Autonomous Executive Insights
        </div>

        <h2 className="text-xl font-semibold tracking-tight text-white">
          AI-generated executive intelligence.
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Autonomous analysis continuously evaluates operational readiness,
          governance visibility, enterprise platform health, commercialization
          signals, and AI-powered decision support.
        </p>

        <div className="mt-6 space-y-4">
          {insights.map((insight) => {
            const Icon = insight.icon;

            return (
              <div
                key={insight.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/[0.04]">
                    <Icon className={`h-5 w-5 ${insight.accent}`} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {insight.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {insight.detail}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}