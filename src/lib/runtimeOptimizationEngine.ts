export type RuntimeOptimizationRecommendation = {
  category: string;
  impact: "Low" | "Medium" | "High";
  savings: string;
  description: string;
};

export type RuntimeOptimizationSnapshot = {
  optimizationStatus: "Healthy" | "Watch";
  recommendations: number;
  projectedSavings: string;
  items: RuntimeOptimizationRecommendation[];
};

export function getRuntimeOptimizationSnapshot(): RuntimeOptimizationSnapshot {
  const items: RuntimeOptimizationRecommendation[] = [
    {
      category: "Provisioning Efficiency",
      impact: "High",
      savings: "$4,200/year",
      description:
        "Optimize runtime provisioning workflows to reduce operational overhead.",
    },
    {
      category: "Policy Evaluation Caching",
      impact: "Medium",
      savings: "$1,800/year",
      description:
        "Cache repeated policy evaluations to improve runtime responsiveness.",
    },
    {
      category: "Feature Resolution Performance",
      impact: "Medium",
      savings: "$1,250/year",
      description:
        "Reduce entitlement resolution latency through optimized lookups.",
    },
    {
      category: "Audit Pipeline Consolidation",
      impact: "Low",
      savings: "$700/year",
      description:
        "Consolidate audit processing jobs to improve resource utilization.",
    },
  ];

  return {
    optimizationStatus: "Healthy",
    recommendations: items.length,
    projectedSavings: "$7,950/year",
    items,
  };
}