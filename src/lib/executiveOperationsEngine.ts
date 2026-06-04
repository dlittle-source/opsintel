export type ExecutiveRiskLevel = "low" | "medium" | "high" | "critical";

export type ExecutiveOperationsScorecard = {
  overallScore: number;
  riskLevel: ExecutiveRiskLevel;
  operationalReadiness: number;
  securityPosture: number;
  resiliencyScore: number;
  costEfficiency: number;
  deploymentConfidence: number;
};

export type ExecutiveRiskRadarItem = {
  id: string;
  label: string;
  category: "security" | "cost" | "resiliency" | "deployment" | "governance";
  severity: ExecutiveRiskLevel;
  summary: string;
  recommendedAction: string;
};

export type ExecutiveAdvisoryInsight = {
  id: string;
  title: string;
  priority: ExecutiveRiskLevel;
  message: string;
  action: string;
};

export type ExecutiveOperationsResult = {
  scorecard: ExecutiveOperationsScorecard;
  riskRadar: ExecutiveRiskRadarItem[];
  advisoryInsights: ExecutiveAdvisoryInsight[];
  executiveSummary: string;
  navigationGroups: {
    label: string;
    description: string;
    systems: string[];
  }[];
};

function getRiskLevel(score: number): ExecutiveRiskLevel {
  if (score >= 85) return "low";
  if (score >= 70) return "medium";
  if (score >= 55) return "high";
  return "critical";
}

export function generateExecutiveOperationsIntelligence(): ExecutiveOperationsResult {
  const scorecard: ExecutiveOperationsScorecard = {
    overallScore: 88,
    riskLevel: "low",
    operationalReadiness: 91,
    securityPosture: 86,
    resiliencyScore: 89,
    costEfficiency: 82,
    deploymentConfidence: 93,
  };

  const riskRadar: ExecutiveRiskRadarItem[] = [
    {
      id: "risk-security-001",
      label: "Identity and Access Exposure",
      category: "security",
      severity: "medium",
      summary:
        "Some infrastructure areas may require stronger least-privilege controls and access segmentation.",
      recommendedAction:
        "Review IAM permissions, service roles, and administrative access paths.",
    },
    {
      id: "risk-cost-001",
      label: "Cloud Cost Expansion Risk",
      category: "cost",
      severity: "medium",
      summary:
        "Scaling infrastructure without automated cost controls may increase monthly spend.",
      recommendedAction:
        "Introduce budget alerts, workload tagging, and right-sizing reviews.",
    },
    {
      id: "risk-resiliency-001",
      label: "Failover Maturity Gap",
      category: "resiliency",
      severity: "low",
      summary:
        "Core services appear stable, but additional failover simulation would improve confidence.",
      recommendedAction:
        "Run disaster recovery tests and document rollback procedures.",
    },
    {
      id: "risk-deployment-001",
      label: "Release Pipeline Dependency",
      category: "deployment",
      severity: "low",
      summary:
        "Deployment confidence is strong, but production release gates should remain enforced.",
      recommendedAction:
        "Keep automated health checks, rollback validation, and deployment approvals active.",
    },
  ];

  const advisoryInsights: ExecutiveAdvisoryInsight[] = [
    {
      id: "advisor-001",
      title: "Platform is approaching enterprise-grade readiness",
      priority: "low",
      message:
        "The infrastructure intelligence layer is now strong enough to support executive visibility, operational review, and architecture decision-making.",
      action:
        "Continue consolidating intelligence modules into a unified executive console.",
    },
    {
      id: "advisor-002",
      title: "Convert vertical dashboards into grouped command zones",
      priority: "medium",
      message:
        "The platform has many strong systems, but the UX should now shift from a long vertical stack into grouped executive sections.",
      action:
        "Create navigation groups for Operations, Risk, Governance, Cost, Deployment, and Advisory Intelligence.",
    },
    {
      id: "advisor-003",
      title: "Prioritize premium command-center presentation",
      priority: "medium",
      message:
        "The next major value unlock is executive usability: fewer scroll-heavy sections, clearer hierarchy, and stronger decision pathways.",
      action:
        "Add an Enterprise AI Operations Console dashboard above the existing intelligence modules.",
    },
  ];

  const navigationGroups = [
    {
      label: "Operations Intelligence",
      description: "Live telemetry, service health, incidents, and command center visibility.",
      systems: [
        "Telemetry Intelligence",
        "Operations Command Center",
        "Infrastructure Heatmap",
      ],
    },
    {
      label: "Risk and Security Intelligence",
      description: "Threat detection, governance posture, risk visibility, and compliance signals.",
      systems: [
        "AI Threat Intelligence",
        "Governance Intelligence",
        "Executive Governance",
      ],
    },
    {
      label: "Architecture Intelligence",
      description: "Topology analysis, resiliency, rollback readiness, and deployment planning.",
      systems: [
        "React Flow Topology",
        "Resiliency Analysis",
        "Rollback Intelligence",
        "Deployment Strategy Intelligence",
      ],
    },
    {
      label: "Business Intelligence",
      description: "Cost optimization, multi-cloud strategy, and executive advisory guidance.",
      systems: [
        "Cost Intelligence",
        "Multi-Cloud Intelligence",
        "AI Advisory Engine",
      ],
    },
  ];

  const executiveSummary =
    "The platform is operating at a strong enterprise-readiness level. Core intelligence systems are active, operational visibility is expanding, and the next priority is transforming the dashboard experience into a unified executive operations console.";

  return {
    scorecard,
    riskRadar,
    advisoryInsights,
    executiveSummary,
    navigationGroups,
  };
}