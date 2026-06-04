import { ArrowDownRight, ArrowRight, ArrowUpRight, TrendingUp } from "lucide-react";

import { getExecutiveTrendSignals } from "@/lib/executiveTrendEngine";

function getTrendIcon(direction: string) {
  if (direction === "up") return ArrowUpRight;
  if (direction === "down") return ArrowDownRight;
  return ArrowRight;
}

function getTrendColor(status: string) {
  if (status === "positive") return "text-emerald-300";
  if (status === "negative") return "text-red-300";
  return "text-slate-300";
}

export default function ExecutiveTrendPanel() {
  const trends = getExecutiveTrendSignals();

  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-[0_0_60px_rgba(0,0,0,0.35)]">
      <div className="flex items-start gap-4">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-4">
          <TrendingUp className="h-6 w-6 text-cyan-300" />
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-cyan-300/70">
            Executive Trend Intelligence
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
            Executive Health Trends
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400">
            Simulated platform movement across readiness, cost posture,
            deployment confidence, governance maturity, and risk signals.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-5">
        {trends.map((trend) => {
          const Icon = getTrendIcon(trend.direction);

          return (
            <div
              key={trend.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
            >
              <div className="text-sm text-slate-400">{trend.label}</div>

              <div className="mt-4 text-3xl font-semibold text-white">
                {trend.value}
                {trend.label !== "Risk Signals" ? "%" : ""}
              </div>

              <div
                className={`mt-5 flex items-center gap-2 text-sm ${getTrendColor(
                  trend.status,
                )}`}
              >
                <Icon className="h-4 w-4" />
                {trend.change > 0 ? "+" : ""}
                {trend.change}%
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}