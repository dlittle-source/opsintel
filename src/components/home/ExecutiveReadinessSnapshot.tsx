import {
  Activity,
  BrainCircuit,
  Gauge,
  Rocket,
  Scale,
  ShieldCheck,
} from "lucide-react";

const readinessMetrics = [
  {
    label: "Readiness Score",
    value: "92",
    status: "Enterprise Ready",
    icon: Gauge,
    accent: "text-cyan-300",
    glow: "bg-cyan-400/10",
  },
  {
    label: "AI Confidence",
    value: "97%",
    status: "High Confidence",
    icon: BrainCircuit,
    accent: "text-violet-300",
    glow: "bg-violet-400/10",
  },
  {
    label: "Risk Posture",
    value: "Low",
    status: "Controlled",
    icon: ShieldCheck,
    accent: "text-emerald-300",
    glow: "bg-emerald-400/10",
  },
  {
    label: "Governance",
    value: "Compliant",
    status: "Healthy",
    icon: Scale,
    accent: "text-amber-300",
    glow: "bg-amber-400/10",
  },
  {
    label: "Commercialization Readiness",
    value: "Launch Ready",
    status: "Commercialization Approved",
    icon: Rocket,
    accent: "text-sky-300",
    glow: "bg-sky-400/10",
  },
  {
    label: "Executive Status",
    value: "Operational",
    status: "Nominal",
    icon: Activity,
    accent: "text-green-300",
    glow: "bg-green-400/10",
  },
];

export default function ExecutiveReadinessSnapshot() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-[0_0_50px_rgba(15,23,42,0.6)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_35%)]" />
      <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative z-10 mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
            Executive Readiness Snapshot
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
            Executive infrastructure intelligence at a glance.
          </h2>
        </div>

        <p className="max-w-xl text-sm leading-6 text-slate-400">
          AI-generated executive indicators summarizing readiness, governance,
          commercialization potential, operational risk, decision confidence,
          and enterprise platform health.
        </p>
      </div>

      <div className="relative z-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {readinessMetrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <div
              key={metric.label}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="flex items-start justify-between gap-4">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl ${metric.glow}`}
                >
                  <Icon className={`h-5 w-5 ${metric.accent}`} />
                </div>

                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-400">
                  Live
                </span>
              </div>

              <div className="mt-5">
                <p className="text-sm text-slate-400">{metric.label}</p>
                <p className="mt-2 text-3xl font-semibold tracking-tight text-white">
                  {metric.value}
                </p>
                <p className={`mt-2 text-sm font-medium ${metric.accent}`}>
                  {metric.status}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}