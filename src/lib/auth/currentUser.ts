import { auth } from "@clerk/nextjs/server";
import {
  getDefaultTenantIdentity,
  TenantIdentity,
} from "./tenantIdentity";

export async function getCurrentTenantIdentity(): Promise<TenantIdentity> {
  const { userId } = await auth();

  return {
    ...getDefaultTenantIdentity(),
    userId,
  };
}