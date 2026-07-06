import { PlanKey } from "./planConfig";

export type WorkspacePackage =
  | "executive"
  | "administration"
  | "billing";

const workspaceMatrix: Record<PlanKey, WorkspacePackage[]> = {
  starter: [
    "executive",
    "administration",
    "billing",
  ],

  professional: [
    "executive",
    "administration",
    "billing",
  ],

  enterprise: [
    "executive",
    "administration",
    "billing",
  ],
};

export function getWorkspacePackages(
  planKey: PlanKey
): WorkspacePackage[] {
  return workspaceMatrix[planKey];
}

export function hasWorkspacePackage(
  planKey: PlanKey,
  workspacePackage: WorkspacePackage
): boolean {
  return getWorkspacePackages(planKey).includes(workspacePackage);
}