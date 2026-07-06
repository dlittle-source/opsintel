import {
  getDefaultRoleIdentity,
  RoleIdentity,
} from "./roleIdentity";

export async function getCurrentRoleIdentity(): Promise<RoleIdentity> {
  return {
    ...getDefaultRoleIdentity(),
  };
}