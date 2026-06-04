"use client";

const executiveInsights = [
  {
    title: "Infrastructure Stability Increasing",
    description:
      "AI operational analysis indicates improved deployment consistency and reduced infrastructure volatility across monitored systems.",
    type: "Operational Intelligence",
    priority: "LOW RISK",
  },
  {
    title: "Cloud Optimization Opportunity Detected",
    description:
      "Cost intelligence systems identified infrastructure optimization opportunities capable of reducing projected cloud spend.",
    type: "Cost Intelligence",
    priority: "MEDIUM PRIORITY",
  },
  {
    title: "Threat Surface Remains Stable",
    description:
      "Threat intelligence analysis reports no critical vulnerabilities detected within the current infrastructure posture.",
    type: "Security Intelligence",
    priority: "SECURE",
  },
  {
    title: "Deployment Readiness Confirmed",
    description:
      "Rollback validation and deployment confidence systems indicate high operational readiness for production delivery.",
    type: "Deployment Intelligence",
    priority: "READY",
  },
];

const aiNarratives = [
  "AI governance systems synchronized executive operational policies successfully.",
  "Infrastructure telemetry engines continue reporting healthy operational behavior.",
  "Multi-cloud orchestration systems completed strategic analysis refresh.",
  "Executive resiliency intelligence confirmed deployment recovery alignment.",
  "AI advisory systems generated updated operational optimization recommendations.",
];

export default function ExecutiveAIActivityLayer() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
            Executive AI Activity Layer
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            AI Operational Intelligence Stream
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
            Executive AI systems continuously analyze operational
            infrastructure behavior, deployment stability,
            governance posture, and enterprise infrastructure
            intelligence signals in real time.
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 text-xs uppercase tracking-[0.3em] text-cyan-300">
          AI EXECUTIVE ANALYSIS
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.3fr_1fr]">
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
                AI Insight Stream
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white">
                Executive Operational Insights
              </h3>
            </div>

            <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
              LIVE ANALYSIS
            </div>
          </div>

          <div className="mt-6 space-y-5">
            {executiveInsights.map((insight) => (
              <div
                key={insight.title}
                className="
                  rounded-2xl
                  border
                  border-slate-800
                  bg-black/20
                  p-5
                "
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                      {insight.type}
                    </p>

                    <h4 className="mt-3 text-xl font-semibold text-white">
                      {insight.title}
                    </h4>
                  </div>

                  <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-cyan-300">
                    {insight.priority}
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-400">
                  {insight.description}
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
                  AI Narrative Feed
                </p>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  Operational Timeline
                </h3>
              </div>

              <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                ACTIVE
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {aiNarratives.map((narrative) => (
                <div
                  key={narrative}
                  className="
                    flex
                    items-start
                    gap-4
                    rounded-2xl
                    border
                    border-slate-800
                    bg-black/20
                    p-4
                  "
                >
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />

                  <p className="text-sm leading-6 text-slate-300">
                    {narrative}
                  </p>
                </div>
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
              Executive AI Status
            </p>

            <div className="mt-4 text-5xl font-black text-white">
              ONLINE
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Executive AI operational systems remain active with
              continuous infrastructure intelligence monitoring and
              enterprise governance analysis enabled.
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