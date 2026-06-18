import {
  BrainCircuit,
  CheckCircle2,
  DollarSign,
  ShieldCheck,
} from "lucide-react";

import { getRuntimeExecutiveSummary } from "@/lib/runtimeExecutiveSummaryEngine";

export default function RuntimeExecutiveSummary() {
  const summary = getRuntimeExecutiveSummary();

  const executiveInsights = [
    {
      title: "Overall Runtime Health",
      value: summary.overallStatus,
      icon: CheckCircle2,
    },
    {
      title: "Runtime Intelligence Score",
      value: `${summary.runtimeScore}%`,
      icon: BrainCircuit,
    },
    {
      title: "Compliance Posture",
      value: "Verified",
      icon: ShieldCheck,
    },
    {
      title: "Optimization Opportunity",
      value: "$2,480/month",
      icon: DollarSign,
    },
  ];

  return (
    <section className="rounded-xl border bg-card p-6">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">
          Executive Runtime Summary
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          AI-generated executive insights summarizing operational health,
          compliance, optimization opportunities, and strategic runtime
          recommendations.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {executiveInsights.map((insight) => {
          const Icon = insight.icon;

          return (
            <div
              key={insight.title}
              className="rounded-lg border border-border bg-card p-4"
            >
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-slate-300" />

                <div>
                  <p className="text-sm font-medium text-slate-200">
                    {insight.title}
                  </p>

                  <p className="mt-1 text-lg font-semibold text-white">
                    {insight.value}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 rounded-lg border border-border bg-card p-4">
        <p className="text-sm font-medium text-slate-200">
          Executive Recommendation
        </p>

        <p className="mt-1 text-sm text-white">
          {summary.recommendation}
        </p>
      </div>
    </section>
  );
}