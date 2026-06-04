export type PlatformRole =
  | "admin"
  | "architect"
  | "engineer"
  | "auditor"
  | "viewer";

export type RolePermissions = {
  executiveWorkspace: boolean;
  commandCenter: boolean;
  intelligenceWorkspace: boolean;
  deploymentWorkspace: boolean;
  complianceWorkspace: boolean;

  manageUsers: boolean;
  manageBilling: boolean;
  manageTenant: boolean;
  exportReports: boolean;
};

export const rolePermissions: Record<
  PlatformRole,
  RolePermissions
> = {
  admin: {
    executiveWorkspace: true,
    commandCenter: true,
    intelligenceWorkspace: true,
    deploymentWorkspace: true,
    complianceWorkspace: true,

    manageUsers: true,
    manageBilling: true,
    manageTenant: true,
    exportReports: true,
  },

  architect: {
    executiveWorkspace: true,
    commandCenter: true,
    intelligenceWorkspace: true,
    deploymentWorkspace: true,
    complianceWorkspace: true,

    manageUsers: false,
    manageBilling: false,
    manageTenant: false,
    exportReports: true,
  },

  engineer: {
    executiveWorkspace: false,
    commandCenter: true,
    intelligenceWorkspace: true,
    deploymentWorkspace: true,
    complianceWorkspace: false,

    manageUsers: false,
    manageBilling: false,
    manageTenant: false,
    exportReports: false,
  },

  auditor: {
    executiveWorkspace: true,
    commandCenter: false,
    intelligenceWorkspace: false,
    deploymentWorkspace: false,
    complianceWorkspace: true,

    manageUsers: false,
    manageBilling: false,
    manageTenant: false,
    exportReports: true,
  },

  viewer: {
    executiveWorkspace: false,
    commandCenter: false,
    intelligenceWorkspace: true,
    deploymentWorkspace: false,
    complianceWorkspace: false,

    manageUsers: false,
    manageBilling: false,
    manageTenant: false,
    exportReports: false,
  },
};

export function getPermissions(
  role: PlatformRole,
) {
  return rolePermissions[role];
}

export function canAccessWorkspace(
  role: PlatformRole,
  workspace:
    | "executiveWorkspace"
    | "commandCenter"
    | "intelligenceWorkspace"
    | "deploymentWorkspace"
    | "complianceWorkspace",
) {
  return rolePermissions[role][workspace];
}

export function canManageUsers(
  role: PlatformRole,
) {
  return rolePermissions[role].manageUsers;
}

export function canManageBilling(
  role: PlatformRole,
) {
  return rolePermissions[role].manageBilling;
}

export function canManageTenant(
  role: PlatformRole,
) {
  return rolePermissions[role].manageTenant;
}