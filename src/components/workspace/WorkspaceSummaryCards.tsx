type WorkspaceSummaryCardsProps = Record<string, unknown>;

const healthStyles: Record<string, string> = {
  excellent:
    "from-emerald-400 to-cyan-400 text-emerald-300 border-emerald-400/30",
  healthy: "from-cyan-400 to-blue-400 text-cyan-300 border-cyan-400/30",
  warning: "from-amber-400 to-orange-400 text-amber-300 border-amber-400/30",
  critical: "from-red-400 to-rose-500 text-red-300 border-red-400/30",
};

const riskStyles: Record<string, string> = {
  low: "text-emerald-300 bg-emerald-400/10 border-emerald-400/20",
  moderate: "text-cyan-300 bg-cyan-400/10 border-cyan-400/20",
  elevated: "text-amber-300 bg-amber-400/10 border-amber-400/20",
  high: "text-red-300 bg-red-400/10 border-red-400/20",
};

function toText(value: unknown, fallback: string) {
  return typeof value === "string" ? value : fallback;
}

function toNumber(value: unknown, fallback: number) {
  return typeof value === "number" && Number.isFinite(value)
    ? value
    : fallback;
}

function toStringArray(value: unknown) {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];
}

export default function WorkspaceSummaryCards(props: WorkspaceSummaryCardsProps) {
  const title = toText(props.title, "Workspace");
  const score = toNumber(props.score, 0);
  const health = toText(props.health, "healthy");
  const trend = toText(props.trend, "stable");
  const confidence = toNumber(props.confidence, 92);
  const riskPosture = toText(props.riskPosture, "low");

  const aiSignals = toStringArray(props.aiSignals);
  const priorityActions = toStringArray(props.priorityActions);
  const insights = toStringArray(props.insights);

  const normalizedScore = Math.max(0, Math.min(score, 100));
  const normalizedConfidence = Math.max(0, Math.min(confidence, 100));

  const healthKey = healthStyles[health] ? health : "healthy";
  const riskKey = riskStyles[riskPosture] ? riskPosture : "low";

  const trendLabel =
    trend === "up" ? "Improving" : trend === "down" ? "Declining" : "Stable";

  const trendStyle =
    trend === "up"
      ? "text-emerald-300"
      : trend === "down"
        ? "text-red-300"
        : "text-cyan-300";

  return (
    <section className="grid gap-4 xl:grid-cols-4">
      <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-2xl xl:col-span-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Executive Health
            </p>
            <h2 className="mt-2 text-lg font-semibold text-white">{title}</h2>
          </div>

          <span
            className={`rounded-full border px-3 py-1 text-xs font-semibold capitalize ${healthStyles[healthKey]}`}
          >
            {health}
          </span>
        </div>

        <div className="mt-6 flex items-end justify-between">
          <div>
            <p className="text-5xl font-bold text-white">{normalizedScore}</p>
            <p className="mt-1 text-sm text-slate-400">Workspace score</p>
          </div>

          <div className="text-right">
            <p className={`text-sm font-semibold ${trendStyle}`}>
              {trendLabel}
            </p>
            <p className="text-xs text-slate-500">Operational trend</p>
          </div>
        </div>

        <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-800">
          <div
            className={`h-full rounded-full bg-gradient-to-r ${healthStyles[healthKey]}`}
            style={{ width: `${normalizedScore}%` }}
          />
        </div>

        {insights.length > 0 && (
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {insights.slice(0, 2).map((insight, index) => (
              <div
                key={`${insight}-${index}`}
                className="rounded-xl border border-slate-800 bg-slate-900/70 p-3"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Insight {index + 1}
                </p>
                <p className="mt-2 text-sm text-slate-300">{insight}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-2xl">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
          AI Confidence
        </p>

        <div className="mt-5 flex items-center gap-5">
          <div className="relative grid h-24 w-24 place-items-center rounded-full bg-slate-900">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `conic-gradient(rgb(34 211 238) ${normalizedConfidence}%, rgb(30 41 59) 0)`,
              }}
            />
            <div className="relative grid h-20 w-20 place-items-center rounded-full bg-slate-950">
              <span className="text-xl font-bold text-white">
                {normalizedConfidence}%
              </span>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">
              Executive-grade signal quality
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Intelligence confidence across operating indicators.
            </p>
          </div>
        </div>

        {priorityActions.length > 0 && (
          <div className="mt-5 space-y-2">
            {priorityActions.slice(0, 2).map((action, index) => (
              <div
                key={`${action}-${index}`}
                className="rounded-lg border border-cyan-400/10 bg-cyan-400/5 px-3 py-2"
              >
                <p className="text-xs text-cyan-200">{action}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-2xl">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            Risk Posture
          </p>

          <span
            className={`rounded-full border px-3 py-1 text-xs font-semibold capitalize ${riskStyles[riskKey]}`}
          >
            {riskPosture}
          </span>
        </div>

        <div className="mt-5 space-y-3">
          {aiSignals.slice(0, 4).map((signal, index) => (
            <div
              key={`${signal}-${index}`}
              className="rounded-xl border border-slate-800 bg-slate-900/70 p-3"
            >
              <p className="text-sm text-slate-300">{signal}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}