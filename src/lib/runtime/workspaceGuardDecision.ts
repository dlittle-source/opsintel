export type WorkspaceGuardDecision =
  | "allow"
  | "deny"
  | "upgrade_required"
  | "tenant_inactive"
  | "subscription_inactive"
  | "feature_disabled";