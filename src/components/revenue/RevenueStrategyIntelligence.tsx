import {
  Brain,
  ShieldCheck,
  TrendingUp,
  PackageCheck,
  LineChart,
  ArrowRight,
} from "lucide-react";

const strategies = [
  {
    title: "Protect Revenue Base",
    description:
      "Prioritize renewal protection for enterprise accounts with churn exposure, contraction signals, or declining executive engagement.",
    icon: ShieldCheck,
  },
  {
    title: "Accelerate Expansion",
    description:
      "Target high-health customers with premium AI intelligence, governance, customer success, and revenue operations bundles.",
    icon: TrendingUp,
  },
  {
    title: "Strengthen Packaging",
    description:
      "Align enterprise pricing tiers around measurable executive outcomes, operational maturity, and SaaS readiness.",
    icon: PackageCheck,
  },
  {
    title: "Enforce Forecast Discipline",
    description:
      "Use pipeline coverage, retention strength, and churn drag to improve forecast accuracy and executive confidence.",
    icon: LineChart,
  },
];

export default function RevenueStrategyIntelligence() {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <div className="mb-2 flex items-center gap-2 text-cyan-300">
            <Brain className="h-4 w-4" />
            <span className="text-sm font-medium">
              Revenue Strategy Intelligence
            </span>
          </div>

          <h2 className="text-2xl font-bold text-white">
            Executive Revenue Strategy Layer
          </h2>

          <p className="mt-2 max-w-3xl text-sm text-slate-400">
            Strategic revenue guidance combining retention protection,
            expansion acceleration, enterprise packaging, and forecast
            discipline.
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-3">
          <div className="text-xs text-slate-400">Strategy Confidence</div>
          <div className="text-lg font-semibold text-cyan-300">92%</div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {strategies.map((strategy) => {
          const Icon = strategy.icon;

          return (
            <div
              key={strategy.title}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
            >
              <Icon className="mb-4 h-5 w-5 text-cyan-300" />

              <h3 className="font-semibold text-white">
                {strategy.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {strategy.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-sm font-medium text-emerald-300">
              Executive Revenue Strategy Recommendation
            </div>

            <div className="mt-2 text-sm leading-6 text-slate-300">
              Protect renewal revenue first, then accelerate expansion through
              premium enterprise packaging. Forecast confidence should be
              governed by retention health, pipeline quality, and churn drag.
            </div>
          </div>

          <ArrowRight className="h-5 w-5 shrink-0 text-emerald-300" />
        </div>
      </div>
    </section>
  );
}