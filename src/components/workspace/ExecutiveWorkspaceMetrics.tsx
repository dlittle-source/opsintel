type Props = {
  score: number;
  confidence: number;
  riskPosture: string;
  recommendationCount: number;
};

export default function ExecutiveWorkspaceMetrics({
  score,
  confidence,
  riskPosture,
  recommendationCount,
}: Props) {
  const riskColor =
    riskPosture === "high"
      ? "text-red-300"
      : riskPosture === "elevated"
        ? "text-amber-300"
        : riskPosture === "moderate"
          ? "text-cyan-300"
          : "text-emerald-300";

  const readiness =
    score >= 90
      ? "High"
      : score >= 75
        ? "Good"
        : score >= 60
          ? "Moderate"
          : "Attention Required";

  const readinessColor =
    score >= 90
      ? "text-emerald-300"
      : score >= 75
        ? "text-cyan-300"
        : score >= 60
          ? "text-amber-300"
          : "text-red-300";

  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-cyan-400/10 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-5 shadow-2xl">
        <div className="space-y-5">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
              Executive Readiness
            </p>

            <h2 className={`mt-2 text-2xl font-bold ${readinessColor}`}>
              {readiness}
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Infrastructure operating within recommended enterprise thresholds.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <StatusChip label="Operationally Healthy" />
            <StatusChip label="AI Optimized" />
            <StatusChip label="Governance Aligned" />
            <StatusChip label="Executive Ready" />
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          label="Operational Score"
          value={`${score}`}
          delta="+4%"
          description="Workspace health"
        />

        <MetricCard
          label="AI Confidence"
          value={`${confidence}%`}
          delta="+7%"
          description="Decision quality"
        />

        <MetricCard
          label="Risk Posture"
          value={riskPosture}
          delta="Stable"
          description="Infrastructure exposure"
          valueClass={riskColor}
        />

        <MetricCard
          label="Recommendations"
          value={`${recommendationCount}`}
          delta="+2"
          description="AI actions available"
        />
      </div>
    </section>
  );
}

type MetricCardProps = {
  label: string;
  value: string;
  description: string;
  delta: string;
  valueClass?: string;
};

function MetricCard({
  label,
  value,
  description,
  delta,
  valueClass = "text-white",
}: MetricCardProps) {
  const icon =
    label === "Operational Score"
      ? "◈"
      : label === "AI Confidence"
        ? "◉"
        : label === "Risk Posture"
          ? "◆"
          : "◎";

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-xl transition-all duration-300 hover:border-cyan-400/20 hover:bg-slate-900/80 hover:shadow-cyan-950/20">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-cyan-400 transition-transform duration-300 group-hover:scale-110">
            {icon}
          </span>

          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            {label}
          </p>
        </div>

        <span className="shrink-0 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2 py-1 text-xs text-cyan-300">
          {delta}
        </span>
      </div>

      <p
        className={`mt-6 text-4xl font-bold capitalize tracking-tight ${valueClass}`}
      >
        {value}
      </p>

      <p className="mt-2 text-sm text-slate-400">{description}</p>

      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-cyan-400/0 via-cyan-400/40 to-cyan-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}

function StatusChip({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-300 shadow-sm shadow-cyan-950/30">
      {label}
    </span>
  );
}