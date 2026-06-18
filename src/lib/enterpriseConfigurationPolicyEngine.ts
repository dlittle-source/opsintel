export interface EnterpriseConfigurationPolicy {
  id: string;
  name: string;
  status: "Compliant" | "Warning";
  severity: "Low" | "Medium" | "High";
}

export function getEnterpriseConfigurationPolicies(): EnterpriseConfigurationPolicy[] {
  return [
    {
      id: "branding",
      name: "Branding Consistency",
      status: "Compliant",
      severity: "Low",
    },
    {
      id: "tenant",
      name: "Multi-Tenant Isolation",
      status: "Compliant",
      severity: "High",
    },
    {
      id: "themes",
      name: "Theme Configuration",
      status: "Compliant",
      severity: "Low",
    },
    {
      id: "assets",
      name: "Logo Asset Registration",
      status: "Compliant",
      severity: "Medium",
    },
    {
      id: "governance",
      name: "Development Rules",
      status: "Compliant",
      severity: "High",
    },
  ];
}