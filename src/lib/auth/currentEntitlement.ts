import {
  EntitlementIdentity,
  getDefaultEntitlementIdentity,
} from "./entitlementIdentity";

export async function getCurrentEntitlementIdentity(): Promise<EntitlementIdentity> {
  return {
    ...getDefaultEntitlementIdentity(),
  };
}