import { GeneratedArchitecture } from "@/types/architecture";

export type HeatmapRiskLevel = "low" | "medium" | "high" | "critical";

export type InfrastructureHeatmapNode = {
  id: string;
  serviceName: string;
  provider?: string;
  serviceType?: string;
  stressScore: number;
  riskLevel: HeatmapRiskLevel;
  signals: string[];
  recommendedAction: string;
};

export type InfrastructureHeatmapCluster = {
  id: string;
  name: string;
  averageStressScore: number;
  riskLevel: HeatmapRiskLevel;
  affectedServices: string[];
  summary: string;
};

export type InfrastructureHeatmapResult = {
  overallStressScore: number;
  overallRiskLevel: HeatmapRiskLevel;
  nodes: InfrastructureHeatmapNode[];
  clusters: InfrastructureHeatmapCluster[];
  executiveSummary: string;
};

type ArchitectureNodeLike = {
  id?: string;
  label?: string;
  provider?: string;
  type?: string;
  data?: {
    label?: string;
    provider?: string;
    type?: string;
  };
};

function getNodeLabel(node: ArchitectureNodeLike, index: number): string {
  return node.label || node.data?.label || `Service ${index + 1}`;
}

function getNodeProvider(node: ArchitectureNodeLike): string | undefined {
  return node.provider || node.data?.provider;
}

function getNodeType(node: ArchitectureNodeLike): string | undefined {
  return node.type || node.data?.type;
}

function getRiskLevel(score: number): HeatmapRiskLevel {
  if (score >= 85) return "critical";
  if (score >= 70) return "high";
  if (score >= 45) return "medium";
  return "low";
}

function getSignals(score: number, serviceType?: string): string[] {
  const signals: string[] = [];

  if (score >= 45) signals.push("Elevated resource utilization");
  if (score >= 60) signals.push("Increased dependency pressure");
  if (score >= 70) signals.push("Latency variance detected");
  if (score >= 85) signals.push("Critical saturation pattern");

  if (serviceType === "database") {
    signals.push("Database connection pressure");
  }

  if (serviceType === "backend") {
    signals.push("API throughput sensitivity");
  }

  if (serviceType === "frontend") {
    signals.push("User experience impact potential");
  }

  return signals.length > 0 ? signals : ["Normal operating pattern"];
}

function getRecommendedAction(riskLevel: HeatmapRiskLevel): string {
  switch (riskLevel) {
    case "critical":
      return "Scale immediately, inspect recent deployments, review logs, and prepare rollback if service health continues to degrade.";
    case "high":
      return "Review capacity, validate autoscaling, inspect dependency health, and monitor latency trends.";
    case "medium":
      return "Continue monitoring and review resource trends during the next operational check.";
    default:
      return "No immediate action required. Maintain normal observability coverage.";
  }
}

function getClusterSummary(
  riskLevel: HeatmapRiskLevel,
  affectedServices: string[]
): string {
  if (riskLevel === "critical") {
    return `Critical pressure detected across ${affectedServices.length} service(s). Immediate response is recommended.`;
  }

  if (riskLevel === "high") {
    return `High operational pressure detected across ${affectedServices.length} service(s). Engineering review is recommended.`;
  }

  if (riskLevel === "medium") {
    return `Moderate infrastructure stress detected across ${affectedServices.length} service(s). Continue active monitoring.`;
  }

  return "Cluster is operating within healthy stress levels.";
}

export function generateInfrastructureHeatmap(
  architecture: GeneratedArchitecture
): InfrastructureHeatmapResult {
  const nodes = (architecture.nodes || []) as ArchitectureNodeLike[];

  const heatmapNodes: InfrastructureHeatmapNode[] = nodes
    .slice(0, 12)
    .map((node, index) => {
      const id = node.id || `heatmap-node-${index + 1}`;
      const serviceName = getNodeLabel(node, index);
      const provider = getNodeProvider(node);
      const serviceType = getNodeType(node);

      const baseScore = 28 + index * 9;
      const typeModifier =
        serviceType === "database"
          ? 18
          : serviceType === "backend"
            ? 12
            : serviceType === "security"
              ? 10
              : serviceType === "frontend"
                ? 6
                : 4;

      const stressScore = Math.min(100, baseScore + typeModifier);
      const riskLevel = getRiskLevel(stressScore);

      return {
        id,
        serviceName,
        provider,
        serviceType,
        stressScore,
        riskLevel,
        signals: getSignals(stressScore, serviceType),
        recommendedAction: getRecommendedAction(riskLevel),
      };
    });

  const highRiskNodes = heatmapNodes.filter(
    (node) => node.riskLevel === "high" || node.riskLevel === "critical"
  );

  const mediumRiskNodes = heatmapNodes.filter(
    (node) => node.riskLevel === "medium"
  );

  const overallStressScore =
    heatmapNodes.length > 0
      ? Math.round(
          heatmapNodes.reduce((total, node) => total + node.stressScore, 0) /
            heatmapNodes.length
        )
      : 0;

  const overallRiskLevel = getRiskLevel(overallStressScore);

  const clusters: InfrastructureHeatmapCluster[] = [
    {
      id: "cluster-high-pressure",
      name: "High Pressure Services",
      averageStressScore:
        highRiskNodes.length > 0
          ? Math.round(
              highRiskNodes.reduce((total, node) => total + node.stressScore, 0) /
                highRiskNodes.length
            )
          : 0,
      riskLevel: highRiskNodes.some((node) => node.riskLevel === "critical")
        ? "critical"
        : highRiskNodes.length > 0
          ? "high"
          : "low",
      affectedServices: highRiskNodes.map((node) => node.serviceName),
      summary: getClusterSummary(
        highRiskNodes.some((node) => node.riskLevel === "critical")
          ? "critical"
          : highRiskNodes.length > 0
            ? "high"
            : "low",
        highRiskNodes.map((node) => node.serviceName)
      ),
    },
    {
      id: "cluster-watchlist",
      name: "Operational Watchlist",
      averageStressScore:
        mediumRiskNodes.length > 0
          ? Math.round(
              mediumRiskNodes.reduce(
                (total, node) => total + node.stressScore,
                0
              ) / mediumRiskNodes.length
            )
          : 0,
      riskLevel: mediumRiskNodes.length > 0 ? "medium" : "low",
      affectedServices: mediumRiskNodes.map((node) => node.serviceName),
      summary: getClusterSummary(
        mediumRiskNodes.length > 0 ? "medium" : "low",
        mediumRiskNodes.map((node) => node.serviceName)
      ),
    },
  ];

  return {
    overallStressScore,
    overallRiskLevel,
    nodes: heatmapNodes,
    clusters,
    executiveSummary:
      overallRiskLevel === "critical"
        ? "Infrastructure heatmap analysis shows critical service pressure. Immediate operational response is recommended."
        : overallRiskLevel === "high"
          ? "Infrastructure heatmap analysis shows high stress across key services. Engineering review is recommended."
          : overallRiskLevel === "medium"
            ? "Infrastructure heatmap analysis shows moderate operational stress. Continue monitoring and validate capacity posture."
            : "Infrastructure heatmap analysis shows healthy service distribution with low operational stress.",
  };
}