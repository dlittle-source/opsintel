export type RuntimeIntelligenceSummary = {
  runtimeScore: number;
  healthScore: number;
  complianceScore: number;
  optimizationScore: number;
  riskScore: number;
};

export function getRuntimeIntelligenceSummary(): RuntimeIntelligenceSummary {
  return {
    runtimeScore: 96,
    healthScore: 98,
    complianceScore: 97,
    optimizationScore: 94,
    riskScore: 92,
  };
}