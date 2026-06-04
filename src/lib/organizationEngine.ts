export type Organization = {
  id: string;

  tenantId: string;

  name: string;

  departmentCount: number;

  userCount: number;

  workspaceCount: number;

  isActive: boolean;
};

export const demoOrganization: Organization = {
  id: "org-001",

  tenantId: "tenant-demo",

  name: "Executive Operations",

  departmentCount: 5,

  userCount: 12,

  workspaceCount: 5,

  isActive: true,
};

export function getOrganization() {
  return demoOrganization;
}

export function getOrganizationHealthScore(
  organization: Organization,
) {
  let score = 70;

  score += Math.min(
    organization.departmentCount * 2,
    10,
  );

  score += Math.min(
    organization.userCount,
    10,
  );

  score += Math.min(
    organization.workspaceCount * 2,
    10,
  );

  return Math.min(score, 100);
}

export function isHealthyOrganization(
  organization: Organization,
) {
  return (
    getOrganizationHealthScore(
      organization,
    ) >= 80
  );
}