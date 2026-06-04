const signals = [
  {
    label: "Infrastructure Health",
    value: "Stable",
    detail: "Core systems normal",
    color: "emerald",
  },
  {
    label: "AI Analysis",
    value: "Active",
    detail: "Inference layer online",
    color: "cyan",
  },
  {
    label: "Cost Intelligence",
    value: "Monitoring",
    detail: "Spend signals tracked",
    color: "amber",
  },
  {
    label: "Security Posture",
    value: "Protected",
    detail: "Controls enforced",
    color: "purple",
  },
  {
    label: "Deployment Signals",
    value: "Healthy",
    detail: "Release path clear",
    color: "blue",
  },
];

const colorMap: Record<string, string> = {
  emerald:
    "border-emerald-400/20 bg-emerald-400/10 text-emerald-300 shadow-emerald-950/20",
  cyan:
    "border-cyan-400/20 bg-cyan-400/10 text-cyan-300 shadow-cyan-950/20",
  amber:
    "border-amber-400/20 bg-amber-400/10 text-amber-300 shadow-amber-950/20",
  purple:
    "border-purple-400/20 bg-purple-400/10 text-purple-300 shadow-purple-950/20",
  blue:
    "border-blue-400/20 bg-blue-400/10 text-blue-300 shadow-blue-950/20",
};

export default function ExecutiveSignalStrip() {
  return (
    <section className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 shadow-2xl shadow-slate-950/30 backdrop-blur">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-sm font-semibold text-white">
            Executive Signal Stream
          </h3>

          <p className="mt-1 text-xs text-slate-500">
            Active infrastructure, AI, cost, security, and deployment telemetry.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
          </span>
          Live Monitoring
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
        {signals.map((signal) => (
          <div
            key={signal.label}
            className={`group rounded-xl border p-3 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-white/[0.04] ${colorMap[signal.color]}`}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-40" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-current" />
                </span>

                <p className="text-xs font-bold uppercase tracking-[0.18em]">
                  {signal.value}
                </p>
              </div>

              <span className="h-1.5 w-1.5 rounded-full bg-current opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            <p className="mt-3 text-xs font-semibold text-slate-200">
              {signal.label}
            </p>

            <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
              {signal.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}