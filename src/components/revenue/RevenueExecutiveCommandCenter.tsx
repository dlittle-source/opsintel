import {
  Brain,
  TrendingUp,
  ShieldAlert,
  Target,
  Activity,
  ArrowRight,
} from "lucide-react";

import { getRevenueOperationsSummary } from "@/lib/revenueOperationsEngine";

export default function RevenueExecutiveCommandCenter() {
  const revenue = getRevenueOperationsSummary();

  return (
    <section className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-6">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <div className="mb-2 flex items-center gap-2 text-cyan-300">
            <Brain className="h-4 w-4" />
            <span className="text-sm font-medium">
              Revenue Executive Command Center
            </span>
          </div>

          <h2 className="text-3xl font-bold text-white">
            Unified Revenue Intelligence
          </h2>

          <p className="mt-2 max-w-3xl text-sm text-slate-400">
            Consolidated executive view of revenue performance, forecast
            confidence, growth opportunities, revenue risk, and strategic
            recommendations.
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-5 py-4">
          <div className="text-xs text-slate-400">
            Revenue Health Score
          </div>

          <div className="text-2xl font-bold text-emerald-300">
            {revenue.revenueHealthScore}
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <SummaryCard
          icon={<TrendingUp className="h-5 w-5 text-cyan-300" />}
          title="Growth Momentum"
          value="Strong"
        />

        <SummaryCard
          icon={<Target className="h-5 w-5 text-cyan-300" />}
          title="Forecast Confidence"
          value="89%"
        />

        <SummaryCard
          icon={<ShieldAlert className="h-5 w-5 text-cyan-300" />}
          title="Revenue Risk"
          value="Moderate"
        />

        <SummaryCard
          icon={<Activity className="h-5 w-5 text-cyan-300" />}
          title="Pipeline Coverage"
          value={`${revenue.pipelineCoverage}x`}
        />
      </div>

      <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-sm font-medium text-cyan-300">
              Executive Revenue Directive
            </div>

            <div className="mt-2 text-sm leading-6 text-slate-300">
              Continue protecting renewal revenue while accelerating expansion
              opportunities across high-health enterprise customers. Maintain
              forecast discipline through pipeline validation and churn
              monitoring.
            </div>
          </div>

          <ArrowRight className="h-5 w-5 shrink-0 text-cyan-300" />
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