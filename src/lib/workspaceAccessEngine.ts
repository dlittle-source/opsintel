import {
  SubscriptionTier,
  canAccessWorkspace,
} from "./subscriptionEngine";

export type WorkspaceKey =
  | "executiveWorkspace"
  | "commandCenter"
  | "intelligenceWorkspace"
  | "deploymentWorkspace"
  | "complianceWorkspace";

export function hasWorkspaceAccess(
  tier: SubscriptionTier,
  workspace: WorkspaceKey,
) {
  return canAccessWorkspace(
    tier,
    workspace,
  );
}

export function getAccessibleWorkspaces(
  tier: SubscriptionTier,
): WorkspaceKey[] {
  const workspaces: WorkspaceKey[] = [
    "executiveWorkspace",
    "commandCenter",
    "intelligenceWorkspace",
    "deploymentWorkspace",
    "complianceWorkspace",
  ];

  return workspaces.filter((workspace) =>
    canAccessWorkspace(
      tier,
      workspace,
    ),
  );
}

export function getRestrictedWorkspaces(
  tier: SubscriptionTier,
): WorkspaceKey[] {
  const workspaces: WorkspaceKey[] = [
    "executiveWorkspace",
    "commandCenter",
    "intelligenceWorkspace",
    "deploymentWorkspace",
    "complianceWorkspace",
  ];

  return workspaces.filter(
    (workspace) =>
      !canAccessWorkspace(
        tier,
        workspace,
      ),
  );
}

export function canAccessExecutive(
  tier: SubscriptionTier,
) {
  return canAccessWorkspace(
    tier,
    "executiveWorkspace",
  );
}

export function canAccessCommandCenter(
  tier: SubscriptionTier,
) {
  return canAccessWorkspace(
    tier,
    "commandCenter",
  );
}

export function canAccessIntelligence(
  tier: SubscriptionTier,
) {
  return canAccessWorkspace(
    tier,
    "intelligenceWorkspace",
  );
}

export function canAccessDeployments(
  tier: SubscriptionTier,
) {
  return canAccessWorkspace(
    tier,
    "deploymentWorkspace",
  );
}

export function canAccessCompliance(
  tier: SubscriptionTier,
) {
  return canAccessWorkspace(
    tier,
    "complianceWorkspace",
  );
}