type Props = {
  workspaceName: string;
  status?: "operational" | "monitoring" | "elevated" | "critical";
  activeSignals?: number;
  monitoringMode?: string;
};

export default function ExecutiveStatusBar({
  workspaceName,
  status = "operational",
  activeSignals = 8,
  monitoringMode = "Live Executive Monitoring",
}: Props) {
  const statusStyles = {
    operational: {
      label: "Operational",
      dot: "bg-emerald-300",
      text: "text-emerald-300",
      border: "border-emerald-400/20",
      bg: "bg-emerald-400/10",
    },
    monitoring: {
      label: "Monitoring",
      dot: "bg-cyan-300",
      text: "text-cyan-300",
      border: "border-cyan-400/20",
      bg: "bg-cyan-400/10",
    },
    elevated: {
      label: "Elevated Watch",
      dot: "bg-amber-300",
      text: "text-amber-300",
      border: "border-amber-400/20",
      bg: "bg-amber-400/10",
    },
    critical: {
      label: "Critical",
      dot: "bg-red-300",
      text: "text-red-300",
      border: "border-red-400/20",
      bg: "bg-red-400/10",
    },
  };

  const current = statusStyles[status];

  return (
    <section className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 shadow-2xl shadow-cyan-950/20 backdrop-blur">
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={`h-2.5 w-2.5 rounded-full ${current.dot} shadow-lg`}
          />

          <p className="text-sm font-semibold text-white">
            Executive Command Presence
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <div
              className={`rounded-full border px-3 py-1 text-xs font-semibold ${current.border} ${current.bg} ${current.text}`}
            >
              {current.label}
            </div>

            <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
              {activeSignals} Active Signals
            </div>

            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
              {monitoringMode}
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-400">
          {workspaceName} is under active executive operations monitoring.
        </p>
      </div>
    </section>
  );
}