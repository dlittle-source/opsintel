export type RetentionRiskLevel = "low" | "moderate" | "elevated" | "critical";

export type CustomerRetentionSignal = {
  id: string;
  customer: string;
  segment: "Startup" | "Growth" | "Enterprise";
  healthScore: number;
  churnProbability: number;
  renewalConfidence: number;
  lifetimeValue: number;
  expansionLikelihood: number;
  riskLevel: RetentionRiskLevel;
  recommendation: string;
};

const retentionSignals: CustomerRetentionSignal[] = [
  {
    id: "ret-001",
    customer: "Apex Federal Systems",
    segment: "Enterprise",
    healthScore: 91,
    churnProbability: 8,
    renewalConfidence: 94,
    lifetimeValue: 285000,
    expansionLikelihood: 82,
    riskLevel: "low",
    recommendation:
      "Maintain executive sponsor engagement and position expansion into governance intelligence.",
  },
  {
    id: "ret-002",
    customer: "Northstar Cloud Group",
    segment: "Enterprise",
    healthScore: 68,
    churnProbability: 31,
    renewalConfidence: 72,
    lifetimeValue: 198000,
    expansionLikelihood: 57,
    riskLevel: "elevated",
    recommendation:
      "Schedule retention review, address adoption decline, and align platform value to renewal goals.",
  },
  {
    id: "ret-003",
    customer: "VelocityOps AI",
    segment: "Growth",
    healthScore: 78,
    churnProbability: 19,
    renewalConfidence: 84,
    lifetimeValue: 124000,
    expansionLikelihood: 74,
    riskLevel: "moderate",
    recommendation:
      "Increase product usage touchpoints and recommend automation intelligence upgrade path.",
  },
  {
    id: "ret-004",
    customer: "CivicSecure Technologies",
    segment: "Enterprise",
    healthScore: 59,
    churnProbability: 44,
    renewalConfidence: 61,
    lifetimeValue: 164000,
    expansionLikelihood: 42,
    riskLevel: "critical",
    recommendation:
      "Escalate to executive success team, create renewal recovery plan, and schedule risk mitigation session.",
  },
];

export function getCustomerRetentionSignals() {
  return retentionSignals;
}

export function getCustomerRetentionSummary() {
  const totalCustomers = retentionSignals.length;

  const averageHealthScore = Math.round(
    retentionSignals.reduce((sum, customer) => sum + customer.healthScore, 0) /
      totalCustomers,
  );

  const averageChurnProbability = Math.round(
    retentionSignals.reduce(
      (sum, customer) => sum + customer.churnProbability,
      0,
    ) / totalCustomers,
  );

  const averageRenewalConfidence = Math.round(
    retentionSignals.reduce(
      (sum, customer) => sum + customer.renewalConfidence,
      0,
    ) / totalCustomers,
  );

  const totalLifetimeValue = retentionSignals.reduce(
    (sum, customer) => sum + customer.lifetimeValue,
    0,
  );

  const highRiskCustomers = retentionSignals.filter(
    (customer) =>
      customer.riskLevel === "elevated" || customer.riskLevel === "critical",
  ).length;

  const expansionReadyCustomers = retentionSignals.filter(
    (customer) => customer.expansionLikelihood >= 70,
  ).length;

  return {
    totalCustomers,
    averageHealthScore,
    averageChurnProbability,
    averageRenewalConfidence,
    totalLifetimeValue,
    highRiskCustomers,
    expansionReadyCustomers,
  };
}