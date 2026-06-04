import {
  BarChart3,
  LineChart,
  TrendingUp,
  AlertTriangle,
  Target,
} from "lucide-react";

import { getRevenueOperationsSummary } from "@/lib/revenueOperationsEngine";

export default function RevenueForecastIntelligence() {
  const revenue = getRevenueOperationsSummary();

  const forecast = [
    {
      label: "Forecast Confidence",
      value: "89%",
      detail: "Based on NRR, pipeline coverage, retention, and expansion trend.",
      icon: Target,
    },
    {
      label: "Growth Outlook",
      value: "Positive",
      detail: "Expansion revenue and retention strength support continued growth.",
      icon: TrendingUp,
    },
    {
      label: "Churn Drag",
      value: `$${revenue.churnedRevenue.toLocaleString()}`,
      detail: "Churned revenue remains visible but controlled.",
      icon: AlertTriangle,
    },
  ];

  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Revenue Forecast Intelligence
          </p>

          <h2 className="text-2xl font-bold text-white">
            Executive Forecast Outlook
          </h2>

          <p className="mt-2 max-w-3xl text-sm text-slate-400">
            Forecasts future revenue performance using retention strength,
            expansion momentum, churn pressure, and pipeline coverage.
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3">
          <div className="text-xs text-slate-400">Pipeline Coverage</div>

          <div className="text-lg font-semibold text-emerald-300">
            {revenue.pipelineCoverage}x
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {forecast.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
            >
              <Icon className="mb-4 h-5 w-5 text-cyan-300" />

              <div className="text-2xl font-bold text-white">
                {item.value}
              </div>

              <div className="mt-1 text-sm font-medium text-slate-300">
                {item.label}
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {item.detail}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">
        <div className="flex items-start gap-3">
          <LineChart className="mt-1 h-5 w-5 text-cyan-300" />

          <div>
            <h3 className="font-semibold text-white">
              Executive Forecast Recommendation
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Maintain current growth posture while increasing scrutiny on
              churned and contracted revenue. Expansion-ready customers should
              be prioritized for strategic account planning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}