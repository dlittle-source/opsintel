export interface OrganizationProfile {
  organizationId: string;

  organizationName: string;

  industry: string;

  organizationType: string;

  employeeCount: number;

  licensingTier: string;

  whiteLabelEnabled: boolean;

  createdAt: string;
}

export function getOrganizationProfile(): OrganizationProfile {
  return {
    organizationId: "opsintel-demo",

    organizationName: "OpsIntel",

    industry: "Technology",

    organizationType: "SaaS Provider",

    employeeCount: 25,

    licensingTier: "Tier B Professional",

    whiteLabelEnabled: true,

    createdAt: "2026-01-01",
  };
}