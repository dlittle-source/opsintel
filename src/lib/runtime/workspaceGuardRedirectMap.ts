import { WorkspaceGuardDecision } from "./workspaceGuardDecision";
import { WorkspaceGuardRedirect } from "./workspaceGuardRedirect";

export const workspaceGuardRedirectMap: Record<
  WorkspaceGuardDecision,
  WorkspaceGuardRedirect
> = {
  allow: "/dashboard",
  deny: "/dashboard",
  upgrade_required: "/dashboard/billing",
  tenant_inactive: "/dashboard",
  subscription_inactive: "/dashboard/billing",
  feature_disabled: "/dashboard",
};