import { GeneratedArchitecture } from "@/types/architecture";

export type DeploymentRiskLevel = "low" | "medium" | "high";

export type DeploymentStrategy =
  | "rolling"
  | "blue-green"
  | "canary"
  | "recreate"
  | "immutable";

export type DeploymentServiceInsight = {
  id: string;
  label: string;
  type: string;
  deploymentRisk: DeploymentRiskLevel;
  deploymentStrategy: DeploymentStrategy;
  rollbackReadiness: number;
  zeroDowntimeCapable: boolean;
  recommendations: string[];
};

export type DeploymentStrategyAnalysis = {
  overallDeploymentRisk: DeploymentRiskLevel;
  deploymentMaturityScore: number;
  rollbackPreparednessScore: number;
  zeroDowntimeReadiness: number;
  ciCdReliabilityScore: number;
  services: DeploymentServiceInsight[];
  deploymentRecommendations: string[];
  executiveSummary: string[];
};

function determineDeploymentRisk(
  type: string
): DeploymentRiskLevel {
  if (
    ["database", "networking", "loadbalancer"].includes(type)
  ) {
    return "high";
  }

  if (
    ["backend", "kubernetes", "container", "ai"].includes(type)
  ) {
    return "medium";
  }

  return "low";
}

function determineDeploymentStrategy(
  type: string
): DeploymentStrategy {
  if (["frontend", "backend", "container"].includes(type)) {
    return "blue-green";
  }

  if (["ai", "monitoring", "security"].includes(type)) {
    return "canary";
  }

  if (["database"].includes(type)) {
    return "immutable";
  }

  if (["kubernetes"].includes(type)) {
    return "rolling";
  }

  return "recreate";
}

function calculateRollbackReadiness(
  type: string,
  strategy: DeploymentStrategy
): number {
  let score = 72;

  if (strategy === "blue-green") score += 18;
  if (strategy === "canary") score += 12;
  if (strategy === "rolling") score += 8;

  if (type === "database") score -= 18;
  if (type === "networking") score -= 10;

  return Math.max(35, Math.min(100, score));
}

function supportsZeroDowntime(
  strategy: DeploymentStrategy
): boolean {
  return ["blue-green", "canary", "rolling"].includes(
    strategy
  );
}

function generateDeploymentRecommendations(
  type: string,
  strategy: DeploymentStrategy,
  risk: DeploymentRiskLevel
): string[] {
  const recommendations: string[] = [];

  if (strategy === "blue-green") {
    recommendations.push(
      "Implement environment parity validation before production cutover."
    );
  }

  if (strategy === "canary") {
    recommendations.push(
      "Enable progressive traffic shifting and automated rollback thresholds."
    );
  }

  if (strategy === "rolling") {
    recommendations.push(
      "Configure rolling health validation and pod disruption budgets."
    );
  }

  if (type === "database") {
    recommendations.push(
      "Use schema migration validation and point-in-time recovery testing."
    );
  }

  if (risk === "high") {
    recommendations.push(
      "Introduce pre-deployment approval workflows and production freeze controls."
    );
  }

  recommendations.push(
    "Continuously validate deployment rollback procedures through simulation exercises."
  );

  return recommendations;
}

function calculateMaturityScore(
  services: DeploymentServiceInsight[]
): number {
  const avgRollback =
    services.reduce(
      (sum, service) => sum + service.rollbackReadiness,
      0
    ) / Math.max(services.length, 1);

  const zeroDowntimeServices = services.filter(
    (service) => service.zeroDowntimeCapable
  ).length;

  const score =
    avgRollback * 0.7 +
    (zeroDowntimeServices / Math.max(services.length, 1)) *
      30;

  return Math.round(
    Math.max(35, Math.min(100, score))
  );
}

function calculateOverallRisk(
  services: DeploymentServiceInsight[]
): DeploymentRiskLevel {
  const highRiskCount = services.filter(
    (service) => service.deploymentRisk === "high"
  ).length;

  if (highRiskCount >= 3) return "high";
  if (highRiskCount >= 1) return "medium";

  return "low";
}

export function analyzeDeploymentStrategy(
  architecture: GeneratedArchitecture
): DeploymentStrategyAnalysis {
  const services: DeploymentServiceInsight[] =
    architecture.nodes.map((node) => {
      const type = node.type || "cloud";

      const deploymentRisk =
        determineDeploymentRisk(type);

      const deploymentStrategy =
        determineDeploymentStrategy(type);

      const rollbackReadiness =
        calculateRollbackReadiness(
          type,
          deploymentStrategy
        );

      const zeroDowntimeCapable =
        supportsZeroDowntime(deploymentStrategy);

      return {
        id: node.id,
        label: node.label,
        type,
        deploymentRisk,
        deploymentStrategy,
        rollbackReadiness,
        zeroDowntimeCapable,
        recommendations:
          generateDeploymentRecommendations(
            type,
            deploymentStrategy,
            deploymentRisk
          ),
      };
    });

  const deploymentMaturityScore =
    calculateMaturityScore(services);

  const rollbackPreparednessScore = Math.round(
    services.reduce(
      (sum, service) =>
        sum + service.rollbackReadiness,
      0
    ) / Math.max(services.length, 1)
  );

  const zeroDowntimeReadyServices = services.filter(
    (service) => service.zeroDowntimeCapable
  ).length;

  const zeroDowntimeReadiness = Math.round(
    (zeroDowntimeReadyServices /
      Math.max(services.length, 1)) *
      100
  );

  const ciCdReliabilityScore = Math.round(
    (deploymentMaturityScore +
      rollbackPreparednessScore +
      zeroDowntimeReadiness) /
      3
  );

  const overallDeploymentRisk =
    calculateOverallRisk(services);

  const deploymentRecommendations = [
    "Adopt progressive deployment strategies for critical production workloads.",
    "Introduce automated rollback validation into CI/CD workflows.",
    "Continuously test zero-downtime deployment orchestration.",
    "Enable deployment health monitoring with automated remediation triggers.",
    "Use deployment simulation exercises to validate production resiliency.",
  ];

  const executiveSummary: string[] = [
    `Deployment maturity score is ${deploymentMaturityScore}%.`,
    `Rollback preparedness score is ${rollbackPreparednessScore}%.`,
    `Zero-downtime readiness is ${zeroDowntimeReadiness}%.`,
    `CI/CD operational reliability score is ${ciCdReliabilityScore}%.`,
  ];

  if (overallDeploymentRisk === "high") {
    executiveSummary.push(
      "Critical deployment governance risks detected requiring operational mitigation."
    );
  } else if (
    overallDeploymentRisk === "medium"
  ) {
    executiveSummary.push(
      "Deployment strategy posture is stable but operational improvements are recommended."
    );
  } else {
    executiveSummary.push(
      "Deployment governance posture appears operationally mature."
    );
  }

  return {
    overallDeploymentRisk,
    deploymentMaturityScore,
    rollbackPreparednessScore,
    zeroDowntimeReadiness,
    ciCdReliabilityScore,
    services,
    deploymentRecommendations,
    executiveSummary,
  };
}