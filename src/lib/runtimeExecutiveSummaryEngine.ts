import { getRuntimeIntelligenceSummary } from "@/lib/runtimeIntelligenceEngine";

export type RuntimeExecutiveSummary = {
  overallStatus: string;
  recommendation: string;
  runtimeScore: number;
};

export function getRuntimeExecutiveSummary(): RuntimeExecutiveSummary {
  const summary = getRuntimeIntelligenceSummary();

  return {
    overallStatus: "Healthy",
    recommendation:
      "Continue monitoring optimization opportunities and maintain compliance posture.",
    runtimeScore: summary.runtimeScore,
  };
}