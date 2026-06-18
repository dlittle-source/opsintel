export type RuntimeRiskItem = {
  category: string;
  severity: "Low" | "Medium" | "High";
  score: string;
  description: string;
};

export type RuntimeRiskAssessmentSnapshot = {
  overallRisk: "Low" | "Moderate" | "High";
  activeRisks: number;
  riskScore: string;
  risks: RuntimeRiskItem[];
};

export function getRuntimeRiskAssessmentSnapshot(): RuntimeRiskAssessmentSnapshot {
  const risks: RuntimeRiskItem[] = [
    {
      category: "Provisioning Capacity",
      severity: "Low",
      score: "12",
      description:
        "Current provisioning capacity exceeds projected runtime demand.",
    },
    {
      category: "Policy Drift",
      severity: "Medium",
      score: "38",
      description:
        "Policy configurations should be reviewed for consistency across tenants.",
    },
    {
      category: "Audit Coverage",
      severity: "Low",
      score: "18",
      description:
        "Audit collection remains healthy with strong coverage metrics.",
    },
    {
      category: "Dependency Concentration",
      severity: "Medium",
      score: "41",
      description:
        "Several services depend on a limited set of shared runtime components.",
    },
  ];

  return {
    overallRisk: "Moderate",
    activeRisks: risks.length,
    riskScore: "27",
    risks,
  };
}