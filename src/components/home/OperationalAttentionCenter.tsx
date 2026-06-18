import { Activity, AlertCircle, CheckCircle2, Radar } from "lucide-react";

const signals = [
  {
    title: "Platform Health",
    status: "Stable",
    description:
      "Core OpsIntel services are operating within expected enterprise readiness thresholds.",
    icon: CheckCircle2,
    accent: "text-emerald-300",
  },
  {
    title: "Readiness Monitoring",
    status: "Active",
    description:
      "Executive readiness, governance, and operational intelligence signals remain under active observation.",
    icon: Activity,
    accent: "text-cyan-300",
  },
  {
    title: "Executive Watchlist",
    status: "Observed",
    description:
      "Commercialization, optimization, and governance recommendations are being monitored for executive review.",
    icon: Radar,
    accent: "text-violet-300",
  },
];

export default function OperationalAttentionCenter() {
  return (
    <section className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-[0_0_50px_rgba(15,23,42,0.55)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_35%)]" />

      <div className="relative z-10">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
          <AlertCircle className="h-3.5 w-3.5" />
          Executive Attention Center
        </div>

        <h2 className="text-xl font-semibold tracking-tight text-white">
          Active executive intelligence signals.
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Critical OpsIntel indicators requiring observation, validation, or
          executive awareness across readiness, governance, commercialization,
          and operational posture.
        </p>

        <div className="mt-6 space-y-4">
          {signals.map((signal) => {
            const Icon = signal.icon;

            return (
              <div
                key={signal.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/[0.04]">
                    <Icon className={`h-5 w-5 ${signal.accent}`} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-sm font-semibold text-white">
                        {signal.title}
                      </h3>

                      <span className={`text-xs font-medium ${signal.accent}`}>
                        {signal.status}
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {signal.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}