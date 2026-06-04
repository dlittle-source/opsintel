import { UsageSnapshot } from "./usageMeteringEngine";

export type TenantUsageIntelligence = {
  tenantId: string;
  organizationId: string;
  activeUsers: number;
  totalWorkspaces: number;
  usage: UsageSnapshot;
  usageHealth: "healthy" | "moderate" | "high" | "critical";
  expansionSignal: "low" | "medium" | "high";
};

export const demoTenantUsage: TenantUsageIntelligence = {
  tenantId: "tenant-demo",
  organizationId: "org-001",
  activeUsers: 12,
  totalWorkspaces: 5,
  usage: {
    architectureGenerations: 184,
    aiCopilotRequests: 742,
    deploymentAnalyses: 91,
    complianceAnalyses: 64,
  },
  usageHealth: "healthy",
  expansionSignal: "high",
};

export function getTenantUsageIntelligence() {
  return demoTenantUsage;
}

export function getTenantUsageScore(
  usage: TenantUsageIntelligence,
) {
  let score = 70;

  score += Math.min(usage.activeUsers * 2, 15);
  score += Math.min(usage.totalWorkspaces * 2, 10);

  if (usage.expansionSignal === "high") {
    score += 5;
  }

  return Math.min(score, 100);
}

export function shouldRecommendExpansion(
  usage: TenantUsageIntelligence,
) {
  return (
    usage.expansionSignal === "high" ||
    usage.activeUsers >= 10 ||
    usage.totalWorkspaces >= 5
  );
}