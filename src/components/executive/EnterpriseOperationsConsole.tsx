"use client";

import {
  ExecutiveAdvisoryInsight,
  ExecutiveOperationsResult,
  ExecutiveRiskRadarItem,
} from "@/lib/executiveOperationsEngine";

type Props = {
  data: ExecutiveOperationsResult;
};

const severityStyles: Record<string, string> = {
  low: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  medium: "border-yellow-500/30 bg-yellow-500/10 text-yellow-300",
  high: "border-orange-500/30 bg-orange-500/10 text-orange-300",
  critical: "border-red-500/30 bg-red-500/10 text-red-300",
};

function RiskRadarCard({
  item,
}: {
  item: ExecutiveRiskRadarItem;
}) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/70
        p-5
        shadow-xl
        backdrop-blur-sm
      "
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            {item.category}
          </p>

          <h3 className="mt-2 text-lg font-semibold text-white">
            {item.label}
          </h3>
        </div>

        <div
          className={`
            rounded-full
            border
            px-3
            py-1
            text-xs
            font-medium
            capitalize
            ${severityStyles[item.severity]}
          `}
        >
          {item.severity}
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-300">
        {item.summary}
      </p>

      <div className="mt-5 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4">
        <p className="text-xs uppercase tracking-widest text-cyan-300">
          Recommended Action
        </p>

        <p className="mt-2 text-sm text-slate-200">
          {item.recommendedAction}
        </p>
      </div>
    </div>
  );
}

function AdvisoryCard({
  insight,
}: {
  insight: ExecutiveAdvisoryInsight;
}) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-800
        bg-gradient-to-br
        from-slate-900
        to-slate-950
        p-5
        shadow-2xl
      "
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            Executive Advisory
          </p>

          <h3 className="mt-2 text-lg font-semibold text-white">
            {insight.title}
          </h3>
        </div>

        <div
          className={`
            rounded-full
            border
            px-3
            py-1
            text-xs
            font-medium
            capitalize
            ${severityStyles[insight.priority]}
          `}
        >
          {insight.priority}
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-300">
        {insight.message}
      </p>

      <div className="mt-5 border-t border-slate-800 pt-4">
        <p className="text-xs uppercase tracking-widest text-cyan-300">
          Strategic Recommendation
        </p>

        <p className="mt-2 text-sm text-slate-200">
          {insight.action}
        </p>
      </div>
    </div>
  );
}

export default function EnterpriseOperationsConsole({
  data,
}: Props) {
  const scorecards = [
    {
      label: "Operational Readiness",
      value: data.scorecard.operationalReadiness,
    },
    {
      label: "Security Posture",
      value: data.scorecard.securityPosture,
    },
    {
      label: "Resiliency Score",
      value: data.scorecard.resiliencyScore,
    },
    {
      label: "Cost Efficiency",
      value: data.scorecard.costEfficiency,
    },
    {
      label: "Deployment Confidence",
      value: data.scorecard.deploymentConfidence,
    },
  ];

  return (
    <section className="space-y-8">
      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-cyan-500/20
          bg-gradient-to-br
          from-slate-950
          via-slate-900
          to-cyan-950/30
          p-8
          shadow-[0_0_80px_rgba(6,182,212,0.08)]
        "
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-20 right-0 h-64 w-64 rounded-full bg-cyan-500 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-500 blur-3xl" />
        </div>

        <div className="relative z-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-300">
                Enterprise AI Operations Console
              </p>

              <h1 className="mt-4 text-4xl font-black tracking-tight text-white">
                Unified Executive Infrastructure Intelligence
              </h1>

              <p className="mt-5 text-base leading-7 text-slate-300">
                {data.executiveSummary}
              </p>
            </div>

            <div
              className="
                rounded-3xl
                border
                border-cyan-500/20
                bg-black/30
                p-6
                backdrop-blur-md
              "
            >
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                Enterprise Score
              </p>

              <div className="mt-3 flex items-end gap-2">
                <span className="text-6xl font-black text-white">
                  {data.scorecard.overallScore}
                </span>

                <span className="pb-2 text-slate-400">/100</span>
              </div>

              <div
                className={`
                  mt-4
                  inline-flex
                  rounded-full
                  border
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  ${severityStyles[data.scorecard.riskLevel]}
                `}
              >
                {data.scorecard.riskLevel} operational risk
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {scorecards.map((card) => (
              <div
                key={card.label}
                className="
                  rounded-2xl
                  border
                  border-slate-800
                  bg-black/20
                  p-5
                  backdrop-blur-sm
                "
              >
                <p className="text-sm text-slate-400">
                  {card.label}
                </p>

                <div className="mt-4 flex items-end gap-2">
                  <span className="text-3xl font-bold text-white">
                    {card.value}
                  </span>

                  <span className="pb-1 text-sm text-slate-500">
                    /100
                  </span>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                    style={{
                      width: `${card.value}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-[1.4fr_1fr]">
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
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                Global Risk Radar
              </p>

              <h2 className="mt-2 text-2xl font-bold text-white">
                Operational Threat Landscape
              </h2>
            </div>

            <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs text-cyan-300">
              LIVE EXECUTIVE ANALYSIS
            </div>
          </div>

          <div className="mt-6 grid gap-5">
            {data.riskRadar.map((item) => (
              <RiskRadarCard
                key={item.id}
                item={item}
              />
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
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
              Executive Navigation
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white">
              Intelligence Systems
            </h2>

            <div className="mt-6 space-y-4">
              {data.navigationGroups.map((group) => (
                <div
                  key={group.label}
                  className="
                    rounded-2xl
                    border
                    border-slate-800
                    bg-black/20
                    p-5
                  "
                >
                  <h3 className="text-lg font-semibold text-white">
                    {group.label}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {group.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.systems.map((system) => (
                      <div
                        key={system}
                        className="
                          rounded-full
                          border
                          border-cyan-500/20
                          bg-cyan-500/10
                          px-3
                          py-1
                          text-xs
                          text-cyan-200
                        "
                      >
                        {system}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            {data.advisoryInsights.map((insight) => (
              <AdvisoryCard
                key={insight.id}
                insight={insight}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}