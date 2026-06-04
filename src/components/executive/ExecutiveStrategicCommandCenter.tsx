import {
  Brain,
  TrendingUp,
  Users,
  Building2,
  DollarSign,
  ArrowRight,
} from "lucide-react";

export default function ExecutiveStrategicCommandCenter() {
  const priorities = [
    "Protect enterprise renewals with elevated churn exposure.",
    "Accelerate expansion motions across high-health customers.",
    "Maintain strong revenue forecast discipline.",
    "Continue multi-tenant SaaS readiness execution.",
  ];

  return (
    <section className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-6">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <div className="mb-2 flex items-center gap-2 text-cyan-300">
            <Brain className="h-4 w-4" />
            <span className="text-sm font-medium">
              Executive Strategic Command Center
            </span>
          </div>

          <h2 className="text-3xl font-bold text-white">
            Enterprise Strategic Overview
          </h2>

          <p className="mt-2 max-w-3xl text-sm text-slate-400">
            Consolidated executive intelligence summarizing platform health,
            customer outcomes, revenue performance, and strategic priorities.
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-4">
          <div className="text-xs text-slate-400">
            Strategic Confidence
          </div>

          <div className="text-2xl font-bold text-cyan-300">
            93%
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <SummaryCard
          icon={<Building2 className="h-5 w-5 text-cyan-300" />}
          title="Platform Health"
          value="Strong"
        />

        <SummaryCard
          icon={<Users className="h-5 w-5 text-cyan-300" />}
          title="Customer Health"
          value="Healthy"
        />

        <SummaryCard
          icon={<DollarSign className="h-5 w-5 text-cyan-300" />}
          title="Revenue Health"
          value="87"
        />

        <SummaryCard
          icon={<TrendingUp className="h-5 w-5 text-cyan-300" />}
          title="Growth Outlook"
          value="Positive"
        />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[2fr,1fr]">
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-emerald-300">
                Executive Strategic Recommendation
              </div>

              <div className="mt-3 text-sm leading-7 text-slate-300">
                Continue prioritizing customer retention, expansion revenue,
                and executive-level SaaS adoption initiatives. Current platform
                indicators suggest healthy operational maturity and favorable
                revenue growth conditions.
              </div>
            </div>

            <ArrowRight className="h-5 w-5 text-emerald-300" />
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
          <h3 className="font-semibold text-white">
            Strategic Priorities
          </h3>

          <ul className="mt-4 space-y-3">
            {priorities.map((priority) => (
              <li
                key={priority}
                className="text-sm leading-6 text-slate-400"
              >
                • {priority}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function SummaryCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
      <div className="mb-3">{icon}</div>

      <div className="text-xl font-bold text-white">
        {value}
      </div>

      <div className="mt-1 text-sm text-slate-400">
        {title}
      </div>
    </div>
  );
}