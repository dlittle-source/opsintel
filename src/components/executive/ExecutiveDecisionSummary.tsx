import {
  Brain,
  Target,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export default function ExecutiveDecisionSummary() {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <div className="mb-2 flex items-center gap-2 text-cyan-300">
            <Brain className="h-4 w-4" />
            <span className="text-sm font-medium">
              Executive Decision Summary
            </span>
          </div>

          <h2 className="text-2xl font-bold text-white">
            Leadership Action Brief
          </h2>

          <p className="mt-2 max-w-3xl text-sm text-slate-400">
            Consolidated executive guidance summarizing organizational posture,
            growth readiness, customer outcomes, and recommended actions.
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-3">
          <div className="text-xs text-slate-400">
            Decision Confidence
          </div>

          <div className="text-lg font-semibold text-cyan-300">
            95%
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <DecisionCard
          title="Executive Posture"
          value="Strong"
          description="Platform, customer, and revenue indicators remain healthy."
        />

        <DecisionCard
          title="Business Impact"
          value="Positive"
          description="Expansion growth and operational maturity continue improving."
        />

        <DecisionCard
          title="Recommended Focus"
          value="Retention + Expansion"
          description="Protect renewals while accelerating strategic account growth."
        />
      </div>

      <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-300">
              <Target className="h-4 w-4" />
              <span className="text-sm font-medium">
                Next Best Action
              </span>
            </div>

            <div className="mt-2 text-sm leading-6 text-slate-300">
              Continue prioritizing executive customer retention programs,
              revenue expansion initiatives, and strategic SaaS readiness
              execution while maintaining operational excellence.
            </div>
          </div>

          <ArrowRight className="h-5 w-5 shrink-0 text-emerald-300" />
        </div>
      </div>
    </section>
  );
}

function DecisionCard({
  title,
  value,
  description,
}: {
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
      <div className="text-xs uppercase tracking-wide text-slate-500">
        {title}
      </div>

      <div className="mt-2 text-xl font-bold text-white">
        {value}
      </div>

      <div className="mt-3 text-sm leading-6 text-slate-400">
        {description}
      </div>
    </div>
  );
}