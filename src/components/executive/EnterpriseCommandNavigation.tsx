"use client";

const navigationSections = [
  {
    title: "Executive Operations",
    items: [
      "Operations Console",
      "Command Grid",
      "AI Activity Layer",
      "Adaptive Workspace",
    ],
  },
  {
    title: "Infrastructure Intelligence",
    items: [
      "Telemetry Intelligence",
      "Threat Intelligence",
      "Heatmap Systems",
      "Deployment Intelligence",
    ],
  },
  {
    title: "Governance & Security",
    items: [
      "Executive Governance",
      "Risk Intelligence",
      "Operational Policies",
      "AI Governance",
    ],
  },
  {
    title: "Business Intelligence",
    items: [
      "Cost Intelligence",
      "Multi-Cloud Systems",
      "Executive Advisory",
      "Strategic Readiness",
    ],
  },
];

export default function EnterpriseCommandNavigation() {
  return (
    <aside
      className="
        sticky
        top-24
        hidden
        h-fit
        w-[290px]
        shrink-0
        xl:block
      "
    >
      <div
        className="
          overflow-hidden
          rounded-3xl
          border
          border-slate-800
          bg-gradient-to-br
          from-slate-950
          via-slate-900
          to-slate-950
          shadow-2xl
        "
      >
        <div className="border-b border-slate-800 p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
            Enterprise Navigation
          </p>

          <h2 className="mt-3 text-2xl font-black tracking-tight text-white">
            Command Center
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400">
            Executive operational routing and AI intelligence
            workspace navigation.
          </p>
        </div>

        <div className="space-y-8 p-6">
          {navigationSections.map((section) => (
            <div key={section.title}>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
                  {section.title}
                </h3>

                <div className="h-2 w-2 rounded-full bg-cyan-400" />
              </div>

              <div className="mt-4 space-y-2">
                {section.items.map((item) => (
                  <button
                    key={item}
                    className="
                      group
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-2xl
                      border
                      border-slate-800
                      bg-black/20
                      px-4
                      py-3
                      text-left
                      transition-all
                      duration-300
                      hover:border-cyan-500/30
                      hover:bg-cyan-500/5
                    "
                  >
                    <span className="text-sm text-slate-300 transition-colors duration-300 group-hover:text-white">
                      {item}
                    </span>

                    <div
                      className="
                        h-2
                        w-2
                        rounded-full
                        bg-slate-700
                        transition-colors
                        duration-300
                        group-hover:bg-cyan-400
                      "
                    />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 p-6">
          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
              Executive Status
            </p>

            <div className="mt-3 text-3xl font-black text-white">
              ONLINE
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              Enterprise AI operational systems remain active
              with centralized infrastructure intelligence
              routing enabled.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}