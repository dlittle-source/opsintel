"use client";

import { useEffect, useState } from "react";

type InsightSeverity = "low" | "medium" | "high";

type Insight = {
  id: number;
  title: string;
  description: string;
  severity: InsightSeverity;
  confidence: number;
};

const insightPool: Omit<Insight, "id">[] = [
  {
    title: "API Latency Trend Detected",
    description:
      "AI analysis identified increasing latency patterns across authentication services. Consider horizontal scaling before peak traffic windows.",
    severity: "medium",
    confidence: 91,
  },

  {
    title: "Infrastructure Resilience Warning",
    description:
      "Single point of failure detected in database replication architecture. Multi-region redundancy recommended.",
    severity: "high",
    confidence: 96,
  },

  {
    title: "Deployment Stability Healthy",
    description:
      "Recent deployment activity shows stable recovery metrics with no elevated rollback behavior detected.",
    severity: "low",
    confidence: 94,
  },

  {
    title: "Container Memory Forecast",
    description:
      "Predictive infrastructure analysis suggests elevated container memory utilization within the next operational cycle.",
    severity: "medium",
    confidence: 88,
  },

  {
    title: "Auto Scaling Opportunity",
    description:
      "Traffic simulations indicate improved operational efficiency through proactive Kubernetes node scaling.",
    severity: "low",
    confidence: 90,
  },
];

export default function AIOperationalInsights() {
  const [insights, setInsights] = useState<Insight[]>([]);

  useEffect(() => {
    const generateInsights = () => {
      const shuffled = [...insightPool]
        .sort(() => Math.random() - 0.5)
        .slice(0, 4)
        .map((item, index) => ({
          ...item,
          id: Date.now() + index,
        }));

      setInsights(shuffled);
    };

    generateInsights();

    const interval = setInterval(generateInsights, 8000);

    return () => clearInterval(interval);
  }, []);

  const severityStyles = {
    low: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
    medium: "border-amber-400/20 bg-amber-400/10 text-amber-300",
    high: "border-red-400/20 bg-red-400/10 text-red-300",
  };

  return (
    <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-2xl">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            AI Operational Insights
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            AI-powered infrastructure intelligence and operational risk analysis.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs text-violet-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400" />
          AI Analysis Active
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {insights.map((insight) => (
          <div
            key={insight.id}
            className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 transition-all duration-300 hover:border-slate-700"
          >
            <div className="mb-4 flex items-center justify-between">
              <span
                className={`rounded-full border px-2 py-1 text-[10px] uppercase tracking-wider ${severityStyles[insight.severity]}`}
              >
                {insight.severity} severity
              </span>

              <div className="text-xs text-slate-500">
                Confidence {insight.confidence}%
              </div>
            </div>

            <h3 className="text-sm font-semibold text-white">
              {insight.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {insight.description}
            </p>

            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between text-xs">
                <span className="text-slate-500">
                  AI Confidence Score
                </span>

                <span className="text-slate-400">
                  {insight.confidence}%
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${
                    insight.severity === "high"
                      ? "bg-red-400"
                      : insight.severity === "medium"
                      ? "bg-amber-400"
                      : "bg-emerald-400"
                  }`}
                  style={{
                    width: `${insight.confidence}%`,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}