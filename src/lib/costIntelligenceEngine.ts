import { GeneratedArchitecture } from "@/types/architecture";

export type ServiceCostAnalysis = {
  id: string;
  label: string;
  type: string;
  estimatedMonthlyCost: number;
  scalingRisk: "low" | "medium" | "high";
  efficiencyScore: number;
  optimizationOpportunities: string[];
};

export type InfrastructureCostAnalysis = {
  totalEstimatedMonthlyCost: number;
  projectedMonthlyScaleCost: number;
  infrastructureEfficiencyScore: number;
  expensiveServices: ServiceCostAnalysis[];
  services: ServiceCostAnalysis[];
  optimizationRecommendations: string[];
  executiveSummary: string[];
};

const baseServiceCosts: Record<string, number> = {
  frontend: 25,
  backend: 80,
  database: 140,
  cache: 60,
  queue: 45,
  container: 70,
  kubernetes: 250,
  cicd: 40,
  monitoring: 55,
  logging: 45,
  ai: 180,
  storage: 50,
  networking: 35,
  loadbalancer: 90,
  security: 65,
  auth: 40,
  cloud: 100,
};

function estimateScalingRisk(
  type: string,
  cost: number
): "low" | "medium" | "high" {
  if (type === "ai" || type === "kubernetes") return "high";
  if (cost >= 150) return "high";
  if (cost >= 80) return "medium";

  return "low";
}

function calculateEfficiencyScore(type: string, connections: number): number {
  let score = 88;

  if (type === "kubernetes") score -= 12;
  if (type === "database") score -= 8;
  if (type === "ai") score -= 10;

  if (connections >= 5) score -= 6;
  if (connections >= 8) score -= 8;

  return Math.max(45, Math.min(100, score));
}

function generateOptimizationRecommendations(
  type: string,
  cost: number,
  efficiency: number
): string[] {
  const recommendations: string[] = [];

  if (type === "ai") {
    recommendations.push("Implement request batching and token optimization.");
    recommendations.push(
      "Consider smaller AI models for non-critical inference workloads."
    );
  }

  if (type === "database") {
    recommendations.push("Enable autoscaling and storage lifecycle policies.");
  }

  if (type === "kubernetes") {
    recommendations.push("Evaluate node autoscaling and spot instance workloads.");
  }

  if (cost >= 120) {
    recommendations.push("Review reserved instance or savings plan opportunities.");
  }

  if (efficiency <= 70) {
    recommendations.push("Investigate resource utilization and reduce idle capacity.");
  }

  return recommendations;
}

export function analyzeInfrastructureCosts(
  architecture: GeneratedArchitecture
): InfrastructureCostAnalysis {
  const services: ServiceCostAnalysis[] = architecture.nodes.map((node) => {
    const type = node.type || "cloud";
    const estimatedMonthlyCost = baseServiceCosts[type] || 75;

    const connections =
      architecture.connections?.filter(
        (connection) =>
          connection.source === node.id || connection.target === node.id
      ).length || 0;

    const scalingRisk = estimateScalingRisk(type, estimatedMonthlyCost);
    const efficiencyScore = calculateEfficiencyScore(type, connections);

    const optimizationOpportunities = generateOptimizationRecommendations(
      type,
      estimatedMonthlyCost,
      efficiencyScore
    );

    return {
      id: node.id,
      label: node.label,
      type,
      estimatedMonthlyCost,
      scalingRisk,
      efficiencyScore,
      optimizationOpportunities,
    };
  });

  const totalEstimatedMonthlyCost = services.reduce(
    (sum, service) => sum + service.estimatedMonthlyCost,
    0
  );

  const projectedMonthlyScaleCost = Math.round(totalEstimatedMonthlyCost * 1.65);

  const infrastructureEfficiencyScore = Math.round(
    services.reduce((sum, service) => sum + service.efficiencyScore, 0) /
      Math.max(services.length, 1)
  );

  const expensiveServices = services.filter(
    (service) => service.estimatedMonthlyCost >= 120
  );

  const optimizationRecommendations = [
    "Adopt autoscaling policies for burst-based workloads.",
    "Continuously monitor idle infrastructure resources.",
    "Evaluate reserved cloud capacity pricing models.",
    "Implement workload scheduling optimization strategies.",
    "Reduce AI inference cost using response caching layers.",
  ];

  const executiveSummary: string[] = [
    `Estimated monthly infrastructure spend is approximately $${totalEstimatedMonthlyCost}/month.`,
    `Projected scaled infrastructure cost may reach approximately $${projectedMonthlyScaleCost}/month under production growth scenarios.`,
  ];

  if (infrastructureEfficiencyScore >= 85) {
    executiveSummary.push(
      "Infrastructure efficiency is operating within enterprise optimization thresholds."
    );
  } else if (infrastructureEfficiencyScore >= 70) {
    executiveSummary.push(
      "Infrastructure efficiency is acceptable but optimization opportunities exist."
    );
  } else {
    executiveSummary.push(
      "Infrastructure efficiency risk detected. Cost optimization initiatives are recommended."
    );
  }

  if (expensiveServices.length > 0) {
    executiveSummary.push(
      `${expensiveServices.length} high-cost infrastructure services were identified for optimization review.`
    );
  }

  return {
    totalEstimatedMonthlyCost,
    projectedMonthlyScaleCost,
    infrastructureEfficiencyScore,
    expensiveServices,
    services,
    optimizationRecommendations,
    executiveSummary,
  };
}