import { Activity, Command, Layers3, ShieldCheck, Sparkles } from "lucide-react";

export default function ExecutivePlatformBanner() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-5 shadow-[0_0_50px_rgba(0,0,0,0.35)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_35%)]" />

      <div className="relative z-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="mb-3 flex items-center gap-2 text-xs font-medium text-cyan-300">
            <Command className="h-4 w-4" />
            Executive AI Operations Platform
          </div>

          <h2 className="text-xl font-semibold tracking-tight text-white">
            Unified infrastructure intelligence, governance, and autonomous operations.
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400">
            Platform-wide visibility across executive readiness, operational intelligence,
            deployment posture, cost optimization, compliance, multi-cloud strategy, and AI decision support.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[420px]">
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3">
            <div className="flex items-center gap-2 text-emerald-300">
              <Activity className="h-4 w-4" />
              <span className="text-xs font-semibold">Platform Health</span>
            </div>
            <p className="mt-2 text-lg font-bold text-white">Operational</p>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3">
            <div className="flex items-center gap-2 text-cyan-300">
              <Layers3 className="h-4 w-4" />
              <span className="text-xs font-semibold">Workspaces</span>
            </div>
            <p className="mt-2 text-lg font-bold text-white">8 Active</p>
          </div>

          <div className="rounded-2xl border border-violet-400/20 bg-violet-400/10 p-3">
            <div className="flex items-center gap-2 text-violet-300">
              <Sparkles className="h-4 w-4" />
              <span className="text-xs font-semibold">AI Layer</span>
            </div>
            <p className="mt-2 text-lg font-bold text-white">Synchronized</p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-5 flex flex-wrap gap-2">
        {[
          "Executive Readiness",
          "AI Operations",
          "Governance",
          "Deployment Intelligence",
          "Multi-Cloud Strategy",
        ].map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}