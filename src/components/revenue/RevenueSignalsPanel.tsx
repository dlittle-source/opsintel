import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

import { getRevenueOperationsSignals } from "@/lib/revenueOperationsEngine";

export default function RevenueSignalsPanel() {
  const signals = getRevenueOperationsSignals();

  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
      <div className="mb-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Revenue Signals
        </p>

        <h2 className="text-2xl font-bold text-white">
          AI Revenue Intelligence Signals
        </h2>

        <p className="mt-2 max-w-3xl text-sm text-slate-400">
          Executive revenue insights highlighting retention strength, pipeline
          health, expansion performance, and churn exposure.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {signals.map((signal) => {
          const Icon =
            signal.impact === "Positive"
              ? TrendingUp
              : signal.impact === "Healthy"
                ? CheckCircle2
                : AlertTriangle;

          const color =
            signal.impact === "Positive"
              ? "text-emerald-300"
              : signal.impact === "Healthy"
                ? "text-cyan-300"
                : "text-amber-300";

          return (
            <div
              key={signal.title}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
            >
              <div className="mb-4 flex items-center justify-between">
                <Icon className={`h-5 w-5 ${color}`} />

                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                  {signal.impact}
                </span>
              </div>

              <h3 className="font-semibold text-white">{signal.title}</h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {signal.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">
        <div className="flex items-start gap-3">
          <Activity className="mt-1 h-5 w-5 text-cyan-300" />

          <div>
            <h3 className="font-semibold text-white">
              Executive Revenue Recommendation
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Maintain expansion momentum while increasing attention on churned
              and contracted revenue. Revenue operations should prioritize
              renewal planning, enterprise expansion paths, and pipeline
              quality validation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}