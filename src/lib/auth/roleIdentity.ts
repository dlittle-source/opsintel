export type TenantRole =
  | "owner"
  | "admin"
  | "operator"
  | "viewer";

export interface RoleIdentity {
  role: TenantRole;
  permissions: string[];
}

export function getDefaultRoleIdentity(): RoleIdentity {
  return {
    role: "viewer",
    permissions: [],
  };
}