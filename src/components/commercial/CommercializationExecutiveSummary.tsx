import {
  Brain,
  Rocket,
  DollarSign,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export default function CommercializationExecutiveSummary() {
  return (
    <section className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-6">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <div className="mb-2 flex items-center gap-2 text-cyan-300">
            <Brain className="h-4 w-4" />
            <span className="text-sm font-medium">
              Commercialization Executive Summary
            </span>
          </div>

          <h2 className="text-3xl font-bold text-white">
            Commercial Readiness Overview
          </h2>

          <p className="mt-2 max-w-3xl text-sm text-slate-400">
            Consolidated commercialization guidance covering launch readiness,
            packaging strategy, go-to-market execution, and monetization
            confidence.
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-5 py-4">
          <div className="text-xs text-slate-400">
            Commercial Confidence
          </div>

          <div className="text-2xl font-bold text-emerald-300">
            91%
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <SummaryCard
          icon={<Rocket className="h-5 w-5 text-cyan-300" />}
          title="Launch Readiness"
          value="Strong"
        />

        <SummaryCard
          icon={<DollarSign className="h-5 w-5 text-cyan-300" />}
          title="Monetization Strategy"
          value="Defined"
        />

        <SummaryCard
          icon={<TrendingUp className="h-5 w-5 text-cyan-300" />}
          title="Go-To-Market"
          value="Ready"
        />
      </div>

      <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-sm font-medium text-emerald-300">
              Executive Commercialization Directive
            </div>

            <div className="mt-2 text-sm leading-6 text-slate-300">
              Continue refining onboarding, launch assets, and customer
              acquisition motions while positioning Executive Intelligence as
              the platform's primary premium differentiator.
            </div>
          </div>

          <ArrowRight className="h-5 w-5 shrink-0 text-emerald-300" />
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