import { getCustomerAccounts } from "./customerManagementEngine";

export type CustomerHealthClassification =
  | "excellent"
  | "healthy"
  | "watch"
  | "critical";

export type CustomerHealthInsight = {
  customerId: string;
  customerName: string;
  healthScore: number;
  classification: CustomerHealthClassification;
  churnRisk: number;
  adoptionScore: number;
  expansionScore: number;
  executiveRecommendation: string;
  strengths: string[];
  concerns: string[];
};

function classifyHealth(
  score: number,
): CustomerHealthClassification {
  if (score >= 90) return "excellent";
  if (score >= 75) return "healthy";
  if (score >= 60) return "watch";

  return "critical";
}

export function getCustomerHealthInsights(): CustomerHealthInsight[] {
  return getCustomerAccounts().map((customer) => {
    const churnRisk = Math.max(
      5,
      100 - customer.healthScore,
    );

    const adoptionScore = Math.round(
      (customer.activeUsers / customer.seatsPurchased) * 100,
    );

    const expansionScore = customer.expansionPotential;

    const concerns: string[] = [];
    const strengths: string[] = [];

    if (adoptionScore < 60) {
      concerns.push("Low platform adoption");
    }

    if (customer.healthScore < 70) {
      concerns.push("Customer health declining");
    }

    if (churnRisk > 40) {
      concerns.push("Elevated churn risk");
    }

    if (adoptionScore >= 80) {
      strengths.push("Strong adoption");
    }

    if (customer.healthScore >= 85) {
      strengths.push("Excellent engagement");
    }

    if (expansionScore >= 80) {
      strengths.push("High expansion potential");
    }

    let executiveRecommendation =
      "Maintain regular customer engagement cadence.";

    if (churnRisk > 40) {
      executiveRecommendation =
        "Initiate executive retention and recovery plan.";
    } else if (expansionScore > 80) {
      executiveRecommendation =
        "Launch expansion and upsell motion.";
    }

    return {
      customerId: customer.id,
      customerName: customer.name,
      healthScore: customer.healthScore,
      classification: classifyHealth(customer.healthScore),
      churnRisk,
      adoptionScore,
      expansionScore,
      executiveRecommendation,
      strengths,
      concerns,
    };
  });
}

export function getCustomerHealthSummary() {
  const insights = getCustomerHealthInsights();

  const excellent = insights.filter(
    (i) => i.classification === "excellent",
  ).length;

  const healthy = insights.filter(
    (i) => i.classification === "healthy",
  ).length;

  const watch = insights.filter(
    (i) => i.classification === "watch",
  ).length;

  const critical = insights.filter(
    (i) => i.classification === "critical",
  ).length;

  const averageHealthScore = Math.round(
    insights.reduce(
      (sum, customer) => sum + customer.healthScore,
      0,
    ) / insights.length,
  );

  return {
    excellent,
    healthy,
    watch,
    critical,
    averageHealthScore,
  };
}