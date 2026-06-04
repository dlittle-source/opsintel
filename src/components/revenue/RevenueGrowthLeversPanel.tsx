import {
  Rocket,
  RefreshCcw,
  TrendingUp,
  Layers3,
  ArrowRight,
} from "lucide-react";

const growthLevers = [
  {
    title: "Expansion Motion",
    description:
      "Increase upsell targeting for high-health enterprise customers showing strong adoption and expansion readiness.",
    icon: TrendingUp,
  },
  {
    title: "Retention Motion",
    description:
      "Prioritize renewal intervention for accounts with churn pressure, declining usage, or reduced executive engagement.",
    icon: RefreshCcw,
  },
  {
    title: "Pipeline Motion",
    description:
      "Improve pipeline quality by focusing on opportunities aligned to enterprise AI, governance, and DevOps modernization.",
    icon: Rocket,
  },
  {
    title: "Packaging Motion",
    description:
      "Position premium workspace bundles around executive intelligence, customer success, and revenue operations.",
    icon: Layers3,
  },
];

export default function RevenueGrowthLeversPanel() {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
      <div className="mb-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Revenue Growth Levers
        </p>

        <h2 className="text-2xl font-bold text-white">
          Executive Growth Motion Intelligence
        </h2>

        <p className="mt-2 max-w-3xl text-sm text-slate-400">
          Identifies the highest-impact revenue motions across expansion,
          retention, pipeline quality, and product packaging.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {growthLevers.map((lever) => {
          const Icon = lever.icon;

          return (
            <div
              key={lever.title}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
            >
              <Icon className="mb-4 h-5 w-5 text-cyan-300" />

              <h3 className="font-semibold text-white">{lever.title}</h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {lever.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-sm font-medium text-emerald-300">
              Executive Growth Recommendation
            </div>

            <div className="mt-2 text-sm leading-6 text-slate-300">
              Focus near-term growth around expansion-ready customers while
              tightening retention workflows for elevated-risk accounts.
              Premium packaging should be aligned to executive intelligence,
              governance, and revenue operations outcomes.
            </div>
          </div>

          <ArrowRight className="h-5 w-5 shrink-0 text-emerald-300" />
        </div>
      </div>
    </section>
  );
}