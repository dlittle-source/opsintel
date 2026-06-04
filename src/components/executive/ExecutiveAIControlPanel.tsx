"use client";

const controlSystems = [
  {
    title: "Autonomous Monitoring",
    description:
      "AI operational systems continuously monitor infrastructure telemetry and enterprise operational behavior.",
    status: "ACTIVE",
  },
  {
    title: "Deployment Safeguards",
    description:
      "Executive deployment intelligence validates rollback readiness and operational deployment stability.",
    status: "VALIDATED",
  },
  {
    title: "Threat Mitigation",
    description:
      "AI security orchestration systems prioritize operational threat visibility and governance enforcement.",
    status: "SECURE",
  },
  {
    title: "Executive Governance",
    description:
      "AI governance systems continuously evaluate enterprise operational policy alignment.",
    status: "ONLINE",
  },
];

const actionControls = [
  "Run Infrastructure Analysis",
  "Initiate AI Threat Scan",
  "Validate Deployment Readiness",
  "Generate Executive Report",
  "Refresh Operational Intelligence",
  "Simulate Incident Recovery",
];

export default function ExecutiveAIControlPanel() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
            Executive AI Control Panel
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            AI Operational Control Surface
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
            Executive AI systems now simulate centralized
            operational governance, deployment orchestration,
            infrastructure automation readiness, and enterprise
            operational control workflows.
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 text-xs uppercase tracking-[0.3em] text-cyan-300">
          AI CONTROL SYSTEMS
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_1fr]">
        <div
          className="
            rounded-3xl
            border
            border-slate-800
            bg-gradient-to-br
            from-slate-950
            via-slate-900
            to-slate-950
            p-6
            shadow-2xl
          "
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
                AI Operational Controls
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white">
                Enterprise AI Systems
              </h3>
            </div>

            <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
              ONLINE
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {controlSystems.map((system) => (
              <div
                key={system.title}
                className="
                  rounded-2xl
                  border
                  border-slate-800
                  bg-black/20
                  p-5
                "
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                      AI Control System
                    </p>

                    <h4 className="mt-3 text-lg font-semibold text-white">
                      {system.title}
                    </h4>
                  </div>

                  <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-cyan-300">
                    {system.status}
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-400">
                  {system.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div
            className="
              rounded-3xl
              border
              border-slate-800
              bg-slate-950/70
              p-6
              shadow-2xl
            "
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
                  Executive Actions
                </p>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  AI Command Actions
                </h3>
              </div>

              <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                READY
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {actionControls.map((action) => (
                <button
                  key={action}
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-800
                    bg-black/20
                    px-4
                    py-4
                    text-left
                    text-sm
                    text-slate-300
                    transition-all
                    duration-300
                    hover:border-cyan-500/30
                    hover:bg-cyan-500/5
                    hover:text-white
                  "
                >
                  {action}
                </button>
              ))}
            </div>
          </div>

          <div
            className="
              rounded-3xl
              border
              border-cyan-500/20
              bg-cyan-500/5
              p-6
              shadow-2xl
            "
          >
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
              Executive Automation Readiness
            </p>

            <div className="mt-4 text-5xl font-black text-white">
              92%
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Enterprise operational systems are currently
              reporting high automation readiness with active AI
              governance visibility and operational orchestration
              controls enabled.
            </p>

            <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}