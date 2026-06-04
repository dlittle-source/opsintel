import { GeneratedArchitecture } from "@/types/architecture";

export type CloudProvider = "aws" | "azure" | "gcp" | "multi-cloud" | "unknown";

export type ProviderRiskLevel = "low" | "medium" | "high";

export type MultiCloudServiceInsight = {
  id: string;
  label: string;
  type: string;
  detectedProvider: CloudProvider;
  providerConfidence: number;
  lockInRisk: ProviderRiskLevel;
  resiliencyImpact: ProviderRiskLevel;
  recommendations: string[];
};

export type MultiCloudAnalysis = {
  primaryProvider: CloudProvider;
  detectedProviders: CloudProvider[];
  multiCloudScore: number;
  vendorLockInScore: number;
  failoverReadinessScore: number;
  disasterRecoveryScore: number;
  services: MultiCloudServiceInsight[];
  providerRecommendations: string[];
  executiveSummary: string[];
};

const awsKeywords = [
  "aws",
  "ec2",
  "ecs",
  "eks",
  "lambda",
  "rds",
  "s3",
  "cloudfront",
  "route53",
  "dynamodb",
];

const azureKeywords = [
  "azure",
  "aks",
  "app service",
  "functions",
  "cosmos",
  "blob",
  "sql database",
  "front door",
];

const gcpKeywords = [
  "gcp",
  "google cloud",
  "gke",
  "cloud run",
  "cloud functions",
  "cloud sql",
  "firestore",
  "bigquery",
];

function normalize(value?: string): string {
  return value?.toLowerCase().trim() || "";
}

function detectProviderFromText(text: string): {
  provider: CloudProvider;
  confidence: number;
} {
  const value = normalize(text);

  const awsMatches = awsKeywords.filter((keyword) =>
    value.includes(keyword)
  ).length;

  const azureMatches = azureKeywords.filter((keyword) =>
    value.includes(keyword)
  ).length;

  const gcpMatches = gcpKeywords.filter((keyword) =>
    value.includes(keyword)
  ).length;

  const scores = [
    { provider: "aws" as CloudProvider, matches: awsMatches },
    { provider: "azure" as CloudProvider, matches: azureMatches },
    { provider: "gcp" as CloudProvider, matches: gcpMatches },
  ].sort((a, b) => b.matches - a.matches);

  if (scores[0].matches === 0) {
    return {
      provider: "unknown",
      confidence: 25,
    };
  }

  return {
    provider: scores[0].provider,
    confidence: Math.min(95, 55 + scores[0].matches * 20),
  };
}

function getLockInRisk(type: string, provider: CloudProvider): ProviderRiskLevel {
  if (provider === "unknown") return "medium";

  if (
    ["database", "ai", "serverless", "kubernetes", "auth", "storage"].includes(
      type
    )
  ) {
    return "high";
  }

  if (["backend", "frontend", "container", "monitoring"].includes(type)) {
    return "medium";
  }

  return "low";
}

function getResiliencyImpact(type: string): ProviderRiskLevel {
  if (["database", "backend", "loadbalancer", "networking"].includes(type)) {
    return "high";
  }

  if (["ai", "storage", "auth", "security"].includes(type)) {
    return "medium";
  }

  return "low";
}

function scoreMultiCloudReadiness(providers: CloudProvider[]): number {
  const realProviders = providers.filter(
    (provider) => provider !== "unknown" && provider !== "multi-cloud"
  );

  const uniqueProviders = new Set(realProviders);

  if (uniqueProviders.size >= 3) return 92;
  if (uniqueProviders.size === 2) return 78;
  if (uniqueProviders.size === 1) return 55;

  return 40;
}

function scoreVendorLockIn(services: MultiCloudServiceInsight[]): number {
  const highRiskCount = services.filter(
    (service) => service.lockInRisk === "high"
  ).length;

  const mediumRiskCount = services.filter(
    (service) => service.lockInRisk === "medium"
  ).length;

  const score = 100 - highRiskCount * 12 - mediumRiskCount * 6;

  return Math.max(30, Math.min(100, score));
}

function scoreFailoverReadiness(services: MultiCloudServiceInsight[]): number {
  const criticalServices = services.filter(
    (service) => service.resiliencyImpact === "high"
  );

  if (criticalServices.length === 0) return 85;

  const providerSpread = new Set(
    criticalServices.map((service) => service.detectedProvider)
  );

  const score = 50 + providerSpread.size * 15;

  return Math.max(35, Math.min(95, score));
}

function generateServiceRecommendations(
  type: string,
  provider: CloudProvider,
  lockInRisk: ProviderRiskLevel
): string[] {
  const recommendations: string[] = [];

  if (provider === "unknown") {
    recommendations.push(
      "Add provider metadata to improve cloud governance visibility."
    );
  }

  if (lockInRisk === "high") {
    recommendations.push(
      "Evaluate portability risks and document migration strategy."
    );
  }

  if (type === "database") {
    recommendations.push(
      "Define cross-region backup, restore, and failover procedures."
    );
  }

  if (type === "kubernetes" || type === "container") {
    recommendations.push(
      "Use portable container images and environment-based deployment configuration."
    );
  }

  if (type === "storage") {
    recommendations.push(
      "Apply lifecycle policies and validate cross-provider export options."
    );
  }

  return recommendations;
}

function generateProviderRecommendations(
  providers: CloudProvider[],
  lockInScore: number,
  failoverScore: number
): string[] {
  const recommendations: string[] = [];

  const realProviders = providers.filter(
    (provider) => provider !== "unknown" && provider !== "multi-cloud"
  );

  const uniqueProviders = new Set(realProviders);

  if (uniqueProviders.size <= 1) {
    recommendations.push(
      "Introduce a secondary cloud strategy for disaster recovery and business continuity planning."
    );
  }

  if (lockInScore < 70) {
    recommendations.push(
      "Reduce vendor lock-in by standardizing deployment artifacts, container images, and infrastructure configuration."
    );
  }

  if (failoverScore < 75) {
    recommendations.push(
      "Improve failover readiness by defining warm standby or active-passive recovery patterns."
    );
  }

  recommendations.push(
    "Document provider-specific risks, cost models, identity boundaries, and regional dependency assumptions."
  );

  recommendations.push(
    "Use infrastructure-as-code to make cloud migration and recovery workflows repeatable."
  );

  return recommendations;
}

export function analyzeMultiCloudArchitecture(
  architecture: GeneratedArchitecture
): MultiCloudAnalysis {
  const services: MultiCloudServiceInsight[] = architecture.nodes.map((node) => {
    const type = node.type || "cloud";

    const providerText = [
      node.label,
      node.provider,
      node.description,
      type,
    ]
      .filter(Boolean)
      .join(" ");

    const providerResult = detectProviderFromText(providerText);

    const lockInRisk = getLockInRisk(type, providerResult.provider);
    const resiliencyImpact = getResiliencyImpact(type);

    return {
      id: node.id,
      label: node.label,
      type,
      detectedProvider: providerResult.provider,
      providerConfidence: providerResult.confidence,
      lockInRisk,
      resiliencyImpact,
      recommendations: generateServiceRecommendations(
        type,
        providerResult.provider,
        lockInRisk
      ),
    };
  });

  const detectedProviders = Array.from(
    new Set(services.map((service) => service.detectedProvider))
  );

  const realProviders = detectedProviders.filter(
    (provider) => provider !== "unknown" && provider !== "multi-cloud"
  );

  const primaryProvider =
    realProviders.length > 1
      ? "multi-cloud"
      : realProviders[0] || "unknown";

  const multiCloudScore = scoreMultiCloudReadiness(detectedProviders);
  const vendorLockInScore = scoreVendorLockIn(services);
  const failoverReadinessScore = scoreFailoverReadiness(services);

  const disasterRecoveryScore = Math.round(
    (multiCloudScore + vendorLockInScore + failoverReadinessScore) / 3
  );

  const providerRecommendations = generateProviderRecommendations(
    detectedProviders,
    vendorLockInScore,
    failoverReadinessScore
  );

  const executiveSummary: string[] = [
    `Primary cloud strategy detected: ${primaryProvider.toUpperCase()}.`,
    `Multi-cloud readiness score is ${multiCloudScore}%.`,
    `Vendor portability score is ${vendorLockInScore}%.`,
    `Disaster recovery maturity score is ${disasterRecoveryScore}%.`,
  ];

  if (primaryProvider !== "multi-cloud") {
    executiveSummary.push(
      "Architecture currently appears provider-concentrated and may benefit from secondary cloud recovery planning."
    );
  } else {
    executiveSummary.push(
      "Architecture demonstrates multi-cloud characteristics with improved resiliency potential."
    );
  }

  return {
    primaryProvider,
    detectedProviders,
    multiCloudScore,
    vendorLockInScore,
    failoverReadinessScore,
    disasterRecoveryScore,
    services,
    providerRecommendations,
    executiveSummary,
  };
}