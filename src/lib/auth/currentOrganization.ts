import {
  getDefaultOrganizationIdentity,
  OrganizationIdentity,
} from "./organizationIdentity";

export async function getCurrentOrganizationIdentity(): Promise<OrganizationIdentity> {
  return {
    ...getDefaultOrganizationIdentity(),
  };
}