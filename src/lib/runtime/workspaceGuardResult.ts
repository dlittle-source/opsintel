import type { RuntimeFeatureGateResult } from "@/lib/runtime/runtimeFeatureGateResult";

export type WorkspaceGuardStatus =
  | "allowed"
  | "blocked"
  | "upgrade_required"
  | "tenant_inactive"
  | "subscription_inactive"
  | "feature_disabled";

export type WorkspaceGuardReason =
  | "workspace_access_granted"
  | "runtime_feature_gate_allowed"
  | "runtime_feature_gate_blocked"
  | "subscription_enforcement_blocked"
  | "tenant_status_blocked"
  | "feature_flag_blocked"
  | "plan_upgrade_required";

export interface WorkspaceGuardResult {
  allowed: boolean;
  status: WorkspaceGuardStatus;
  reason: WorkspaceGuardReason;
  workspaceKey: string;
  tenantId: string;
  planKey?: string | null;
  requiredPlanKey?: string | null;
  message: string;
  featureGateResult?: RuntimeFeatureGateResult;
}

export function createAllowedWorkspaceGuardResult(params: {
  workspaceKey: string;
  tenantId: string;
  planKey?: string | null;
  featureGateResult?: RuntimeFeatureGateResult;
}): WorkspaceGuardResult {
  return {
    allowed: true,
    status: "allowed",
    reason: "workspace_access_granted",
    workspaceKey: params.workspaceKey,
    tenantId: params.tenantId,
    planKey: params.planKey ?? null,
    requiredPlanKey: null,
    message: "Workspace access granted.",
    featureGateResult: params.featureGateResult,
  };
}

export function createBlockedWorkspaceGuardResult(params: {
  status: Exclude<WorkspaceGuardStatus, "allowed">;
  reason: Exclude<WorkspaceGuardReason, "workspace_access_granted">;
  workspaceKey: string;
  tenantId: string;
  planKey?: string | null;
  requiredPlanKey?: string | null;
  message: string;
  featureGateResult?: RuntimeFeatureGateResult;
}): WorkspaceGuardResult {
  return {
    allowed: false,
    status: params.status,
    reason: params.reason,
    workspaceKey: params.workspaceKey,
    tenantId: params.tenantId,
    planKey: params.planKey ?? null,
    requiredPlanKey: params.requiredPlanKey ?? null,
    message: params.message,
    featureGateResult: params.featureGateResult,
  };
}