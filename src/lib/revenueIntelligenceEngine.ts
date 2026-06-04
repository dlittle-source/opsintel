import { getCustomerAccounts } from "./customerManagementEngine";
import { getCustomerHealthInsights } from "./customerHealthEngine";

export type RevenueForecast = {
  projectedRevenue: number;
  renewalRevenue: number;
  expansionRevenue: number;
  atRiskRevenue: number;
  netRevenueOpportunity: number;
};

export type RevenueInsight = {
  customerId: string;
  customerName: string;
  contractValue: number;
  renewalProbability: number;
  expansionProbability: number;
  riskLevel: "low" | "moderate" | "high";
  projectedValue: number;
};

export function getRevenueInsights(): RevenueInsight[] {
  const customers = getCustomerAccounts();
  const healthInsights = getCustomerHealthInsights();

  return customers.map((customer) => {
    const health = healthInsights.find(
      (h) => h.customerId === customer.id,
    );

    const healthScore = health?.healthScore ?? 70;

    const renewalProbability =
      healthScore >= 90
        ? 95
        : healthScore >= 80
          ? 85
          : healthScore >= 70
            ? 75
            : healthScore >= 60
              ? 60
              : 40;

    const expansionProbability =
      customer.expansionPotential >= 85
        ? 90
        : customer.expansionPotential >= 70
          ? 75
          : customer.expansionPotential >= 50
            ? 60
            : 35;

    const projectedValue = Math.round(
      customer.contractValue *
        (renewalProbability / 100),
    );

    const riskLevel =
      renewalProbability >= 85
        ? "low"
        : renewalProbability >= 65
          ? "moderate"
          : "high";

    return {
      customerId: customer.id,
      customerName: customer.name,
      contractValue: customer.contractValue,
      renewalProbability,
      expansionProbability,
      riskLevel,
      projectedValue,
    };
  });
}

export function getRevenueForecast(): RevenueForecast {
  const insights = getRevenueInsights();

  const projectedRevenue = insights.reduce(
    (sum, customer) => sum + customer.projectedValue,
    0,
  );

  const renewalRevenue = insights.reduce(
    (sum, customer) =>
      sum +
      Math.round(
        customer.contractValue *
          (customer.renewalProbability / 100),
      ),
    0,
  );

  const expansionRevenue = insights.reduce(
    (sum, customer) =>
      sum +
      Math.round(
        customer.contractValue *
          0.2 *
          (customer.expansionProbability / 100),
      ),
    0,
  );

  const atRiskRevenue = insights
    .filter((customer) => customer.riskLevel === "high")
    .reduce(
      (sum, customer) => sum + customer.contractValue,
      0,
    );

  const netRevenueOpportunity =
    renewalRevenue + expansionRevenue;

  return {
    projectedRevenue,
    renewalRevenue,
    expansionRevenue,
    atRiskRevenue,
    netRevenueOpportunity,
  };
}