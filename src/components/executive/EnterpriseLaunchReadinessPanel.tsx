"use client";

const readinessSignals = [
  {
    label: "Commercial Readiness",
    value: "96%",
    status: "LAUNCH READY",
  },
  {
    label: "SaaS Positioning",
    value: "91%",
    status: "COMMERCIAL",
  },
  {
    label: "White-Label Potential",
    value: "89%",
    status: "STRONG",
  },
  {
    label: "Enterprise UX Polish",
    value: "94%",
    status: "PREMIUM",
  },
];

const launchChecklist = [
  "OpsIntel is visually positioned as the executive infrastructure intelligence entry point.",
  "AI intelligence systems are grouped into clear executive operational domains.",
  "Command-center layout supports SaaS demos, consulting conversations, and monetization storytelling.",
  "White-label value is visible through governance, readiness, monitoring, and advisory systems.",
  "Platform experience now communicates enterprise readiness instead of basic dashboard behavior.",
];

export default function EnterpriseLaunchReadinessPanel() {
  return (
    <section className="space-y-6">
      <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/30 p-8 shadow-2xl">
        <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
          OpsIntel Launch Readiness
        </p>

        <h2 className="mt-4 text-4xl font-black tracking-tight text-white">
          SaaS, Consulting & White-Label Positioning
        </h2>

        <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-400">
          OpsIntel is being refined into a clean, premium, enterprise-ready
          executive infrastructure intelligence platform suitable for client
          conversations, SaaS positioning, consulting delivery, and future
          white-label monetization.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {readinessSignals.map((signal) => (
            <div
              key={signal.label}
              className="rounded-2xl border border-slate-800 bg-black/25 p-5"
            >
              <p className="text-sm text-slate-400">{signal.label}</p>

              <div className="mt-4 text-4xl font-black text-white">
                {signal.value}
              </div>

              <div className="mt-4 inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                {signal.status}
              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  style={{ width: signal.value }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_1fr]">
        <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
            Launch Checklist
          </p>

          <h3 className="mt-3 text-2xl font-bold text-white">
            OpsIntel Rebrand Completion Focus
          </h3>

          <div className="mt-6 space-y-4">
            {launchChecklist.map((item) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-slate-800 bg-black/20 p-4"
              >
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />

                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-6 shadow-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
            Monetization Signal
          </p>

          <h3 className="mt-3 text-3xl font-black text-white">
            White-Label Ready Direction
          </h3>

          <p className="mt-5 text-sm leading-7 text-slate-400">
            The product direction now supports a strong monetization story:
            executive infrastructure intelligence, governance visibility,
            commercialization readiness, AI advisory intelligence, operational
            monitoring, and executive reporting can be packaged for
            white-label, consulting, or SaaS-style positioning.
          </p>

          <div className="mt-6 rounded-2xl border border-slate-800 bg-black/25 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Recommended Positioning
            </p>

            <p className="mt-3 text-lg font-semibold text-white">
              AI-powered executive infrastructure intelligence platform for
              cloud teams, DevOps leaders, consulting firms, and managed service
              providers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}