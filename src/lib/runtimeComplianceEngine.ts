export type RuntimeComplianceControl = {
  label: string;
  status: "Compliant" | "Watch" | "Non-Compliant";
  score: string;
  description: string;
};

export type RuntimeComplianceSnapshot = {
  complianceStatus: "Compliant" | "Watch" | "Non-Compliant";
  complianceScore: string;
  activeControls: number;
  controls: RuntimeComplianceControl[];
};

export function getRuntimeComplianceSnapshot(): RuntimeComplianceSnapshot {
  const controls: RuntimeComplianceControl[] = [
    {
      label: "Tenant Isolation",
      status: "Compliant",
      score: "100%",
      description:
        "Tenant runtime boundaries are enforced across licensed environments.",
    },
    {
      label: "Policy Enforcement",
      status: "Compliant",
      score: "98%",
      description:
        "Runtime policy decisions are being evaluated and enforced successfully.",
    },
    {
      label: "Entitlement Validation",
      status: "Compliant",
      score: "99%",
      description:
        "Feature access is aligned with tenant licensing and capability rules.",
    },
    {
      label: "Audit Readiness",
      status: "Watch",
      score: "92%",
      description:
        "Audit signals are available, with minor review recommended for elevated provisioning activity.",
    },
  ];

  return {
    complianceStatus: "Compliant",
    complianceScore: "97%",
    activeControls: controls.length,
    controls,
  };
}