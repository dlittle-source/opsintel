export type ArchitectureNodeType =
  | "frontend"
  | "backend"
  | "database"
  | "cloud"
  | "container"
  | "cicd"
  | "security"
  | "monitoring";

export type ArchitectureNode = {
  id: string;
  label: string;
  type: ArchitectureNodeType;
  provider?: string;
  description: string;
};

export type ArchitectureConnection = {
  id: string;
  source: string;
  target: string;
  label: string;
};

export type GeneratedArchitecture = {
  projectName: string;

  summary: string;

  stack: string[];

  nodes: ArchitectureNode[];

  connections: ArchitectureConnection[];

  deploymentFlow: string[];

  securityRecommendations: string[];

  scalabilityRecommendations: string[];

  estimatedMonthlyCost: string;

  riskLevel: "Low" | "Medium" | "High";

  deploymentConfidence: number;

  infrastructureSummary: string;

  estimatedComplexity: "Low" | "Medium" | "High";

  productionReadinessScore: number;
};