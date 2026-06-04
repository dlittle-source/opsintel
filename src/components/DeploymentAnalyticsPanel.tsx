"use client";

import { useEffect, useState } from "react";

type DeploymentAnalytics = {
  successRate: number;
  rollbackRate: number;
  avgDeployTime: number;
  incidentsPrevented: number;
};

export default function DeploymentAnalyticsPanel() {
  const [analytics, setAnalytics] = useState<DeploymentAnalytics>({
    successRate: 96,
    rollbackRate: 4,
    avgDeployTime: 7,
    incidentsPrevented: 12,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAnalytics({
        successRate: Math.floor(92 + Math.random() * 8),
        rollbackRate: Math.floor(Math.random() * 8),
        avgDeployTime: Math.floor(4 + Math.random() * 9),
        incidentsPrevented: Math.floor(8 + Math.random() * 18),
      });
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      label: "Deployment Success Rate",
      value: `${analytics.successRate}%`,
      helper: "Healthy release reliability",
    },
    {
      label: "Rollback Rate",
      value: `${analytics.rollbackRate}%`,
      helper: "Low rollback activity",
    },
    {
      label: "Avg Deploy Time",
      value: `${analytics.avgDeployTime} min`,
      helper: "Pipeline execution time",
    },
    {
      label: "Incidents Prevented",
      value: analytics.incidentsPrevented,
      helper: "AI-assisted risk avoidance",
    },
  ];

  return (
    <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-2xl">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Deployment Analytics
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Release performance, rollback behavior, and AI-assisted deployment intelligence.
          </p>
        </div>

        <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
          Release Intelligence
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.label}
            className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 transition-all duration-300 hover:border-slate-700"
          >
            <p className="text-sm text-slate-400">{card.label}</p>

            <div className="mt-3 text-2xl font-bold text-white">
              {card.value}
            </div>

            <p className="mt-2 text-xs text-slate-500">
              {card.helper}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}