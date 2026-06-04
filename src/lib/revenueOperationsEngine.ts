export type RevenueHealthStatus = "healthy" | "stable" | "watch" | "at-risk";

export type RevenueOperationsSummary = {
  annualRecurringRevenue: number;
  monthlyRecurringRevenue: number;
  netRevenueRetention: number;
  grossRevenueRetention: number;
  expansionRevenue: number;
  contractionRevenue: number;
  churnedRevenue: number;
  pipelineCoverage: number;
  revenueHealthScore: number;
  status: RevenueHealthStatus;
};

const revenueOperationsSummary: RevenueOperationsSummary = {
  annualRecurringRevenue: 1840000,
  monthlyRecurringRevenue: 153333,
  netRevenueRetention: 118,
  grossRevenueRetention: 91,
  expansionRevenue: 286000,
  contractionRevenue: 74000,
  churnedRevenue: 92000,
  pipelineCoverage: 3.4,
  revenueHealthScore: 87,
  status: "healthy",
};

export function getRevenueOperationsSummary() {
  return revenueOperationsSummary;
}

export function getRevenueOperationsSignals() {
  return [
    {
      title: "Net Revenue Retention Strong",
      description:
        "NRR remains above 110%, indicating expansion revenue is outpacing contraction and churn.",
      impact: "Positive",
    },
    {
      title: "Pipeline Coverage Healthy",
      description:
        "Pipeline coverage is currently 3.4x, providing strong revenue confidence for the next forecast cycle.",
      impact: "Healthy",
    },
    {
      title: "Churned Revenue Requires Monitoring",
      description:
        "Churned revenue remains manageable but should be monitored closely across renewal windows.",
      impact: "Watch",
    },
  ];
}