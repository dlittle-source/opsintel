export type CustomerTier = "enterprise" | "growth" | "startup";
export type CustomerStatus = "healthy" | "watch" | "at-risk" | "expansion";
export type CustomerLifecycleStage =
  | "onboarding"
  | "active"
  | "adoption"
  | "renewal"
  | "expansion";

export type CustomerAccount = {
  id: string;
  name: string;
  industry: string;
  tier: CustomerTier;
  status: CustomerStatus;
  lifecycleStage: CustomerLifecycleStage;
  owner: string;
  contractValue: number;
  renewalDate: string;
  activeUsers: number;
  seatsPurchased: number;
  usageScore: number;
  healthScore: number;
  expansionPotential: number;
  riskSignals: string[];
  successSignals: string[];
  recommendedAction: string;
};

export type CustomerPortfolioSummary = {
  totalCustomers: number;
  enterpriseCustomers: number;
  totalContractValue: number;
  averageHealthScore: number;
  averageUsageScore: number;
  atRiskCustomers: number;
  expansionOpportunities: number;
  renewalPipelineValue: number;
};

const customers: CustomerAccount[] = [
  {
    id: "cust-001",
    name: "Northstar Financial Group",
    industry: "Financial Services",
    tier: "enterprise",
    status: "healthy",
    lifecycleStage: "active",
    owner: "Customer Success",
    contractValue: 148000,
    renewalDate: "2026-09-15",
    activeUsers: 42,
    seatsPurchased: 50,
    usageScore: 88,
    healthScore: 91,
    expansionPotential: 82,
    riskSignals: ["Governance review pending"],
    successSignals: [
      "High executive dashboard engagement",
      "Strong multi-workspace usage",
      "Architecture exports increasing",
    ],
    recommendedAction:
      "Schedule executive value review and position governance automation add-on.",
  },
  {
    id: "cust-002",
    name: "ApexCloud Systems",
    industry: "Cloud Consulting",
    tier: "growth",
    status: "expansion",
    lifecycleStage: "expansion",
    owner: "Strategic Accounts",
    contractValue: 82000,
    renewalDate: "2026-08-01",
    activeUsers: 31,
    seatsPurchased: 35,
    usageScore: 94,
    healthScore: 89,
    expansionPotential: 93,
    riskSignals: [],
    successSignals: [
      "Near-seat capacity",
      "Heavy AI Copilot usage",
      "Multiple saved architecture projects",
    ],
    recommendedAction:
      "Recommend seat expansion and premium AI governance package.",
  },
  {
    id: "cust-003",
    name: "CivicOps Digital",
    industry: "Public Sector",
    tier: "enterprise",
    status: "watch",
    lifecycleStage: "adoption",
    owner: "Enterprise Success",
    contractValue: 126000,
    renewalDate: "2026-10-30",
    activeUsers: 18,
    seatsPurchased: 45,
    usageScore: 61,
    healthScore: 68,
    expansionPotential: 54,
    riskSignals: [
      "Low seat activation",
      "Limited dashboard return visits",
      "No recent architecture exports",
    ],
    successSignals: ["Initial onboarding completed", "Security workspace reviewed"],
    recommendedAction:
      "Launch adoption recovery plan with admin enablement and weekly success check-ins.",
  },
  {
    id: "cust-004",
    name: "Velocity Retail AI",
    industry: "Retail Technology",
    tier: "growth",
    status: "healthy",
    lifecycleStage: "active",
    owner: "Customer Success",
    contractValue: 64000,
    renewalDate: "2026-07-20",
    activeUsers: 27,
    seatsPurchased: 30,
    usageScore: 86,
    healthScore: 84,
    expansionPotential: 76,
    riskSignals: ["Renewal window approaching"],
    successSignals: [
      "Strong cost intelligence usage",
      "Regular deployment strategy reviews",
      "High architecture generation volume",
    ],
    recommendedAction:
      "Prepare renewal business case with cost optimization wins.",
  },
  {
    id: "cust-005",
    name: "HelioHealth Labs",
    industry: "Healthcare",
    tier: "startup",
    status: "at-risk",
    lifecycleStage: "renewal",
    owner: "Lifecycle Success",
    contractValue: 38000,
    renewalDate: "2026-06-28",
    activeUsers: 8,
    seatsPurchased: 25,
    usageScore: 42,
    healthScore: 51,
    expansionPotential: 35,
    riskSignals: [
      "Low active usage",
      "Renewal date near",
      "Limited executive workspace activity",
    ],
    successSignals: ["Compliance workspace accessed", "Initial architecture saved"],
    recommendedAction:
      "Escalate to retention motion and offer guided architecture review session.",
  },
];

export function getCustomerAccounts(): CustomerAccount[] {
  return customers;
}

export function getCustomerAccountById(
  id: string,
): CustomerAccount | undefined {
  return customers.find((customer) => customer.id === id);
}

export function getCustomerPortfolioSummary(): CustomerPortfolioSummary {
  const totalCustomers = customers.length;

  const totalContractValue = customers.reduce(
    (sum, customer) => sum + customer.contractValue,
    0,
  );

  const averageHealthScore = Math.round(
    customers.reduce((sum, customer) => sum + customer.healthScore, 0) /
      totalCustomers,
  );

  const averageUsageScore = Math.round(
    customers.reduce((sum, customer) => sum + customer.usageScore, 0) /
      totalCustomers,
  );

  const enterpriseCustomers = customers.filter(
    (customer) => customer.tier === "enterprise",
  ).length;

  const atRiskCustomers = customers.filter(
    (customer) => customer.status === "at-risk",
  ).length;

  const expansionOpportunities = customers.filter(
    (customer) =>
      customer.status === "expansion" || customer.expansionPotential >= 75,
  ).length;

  const renewalPipelineValue = customers
    .filter((customer) => customer.lifecycleStage === "renewal")
    .reduce((sum, customer) => sum + customer.contractValue, 0);

  return {
    totalCustomers,
    enterpriseCustomers,
    totalContractValue,
    averageHealthScore,
    averageUsageScore,
    atRiskCustomers,
    expansionOpportunities,
    renewalPipelineValue,
  };
}

export function getCustomerStatusLabel(status: CustomerStatus): string {
  const labels: Record<CustomerStatus, string> = {
    healthy: "Healthy",
    watch: "Watch",
    "at-risk": "At Risk",
    expansion: "Expansion",
  };

  return labels[status];
}

export function getCustomerTierLabel(tier: CustomerTier): string {
  const labels: Record<CustomerTier, string> = {
    enterprise: "Enterprise",
    growth: "Growth",
    startup: "Startup",
  };

  return labels[tier];
}