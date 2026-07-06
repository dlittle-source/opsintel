export type MiddlewareRuntimeDecision =
  | "allow"
  | "redirect"
  | "deny";

export type MiddlewareRuntimeRedirectReason =
  | "unauthenticated"
  | "tenant_required"
  | "workspace_denied"
  | "subscription_required"
  | "license_required"
  | "runtime_unavailable";

export type MiddlewareRuntimeAdapterInput = {
  pathname: string;
  tenantId?: string;
  userId?: string;
  workspaceKey?: string;
};

export type MiddlewareRuntimeAdapterResult = {
  decision: MiddlewareRuntimeDecision;
  reason?: MiddlewareRuntimeRedirectReason;
  redirectTo?: string;
  workspaceKey?: string;
  tenantId?: string;
};

export interface MiddlewareRuntimeAdapter {
  execute(
    input: MiddlewareRuntimeAdapterInput
  ): Promise<MiddlewareRuntimeAdapterResult>;
}