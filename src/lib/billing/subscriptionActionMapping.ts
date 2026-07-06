import { SubscriptionLifecycleClassification } from "./subscriptionLifecycleClassification";

export type SubscriptionAction =
  | "enable_runtime"
  | "restrict_runtime"
  | "disable_workspaces"
  | "limited_access";

const actionMap: Record<
  SubscriptionLifecycleClassification,
  SubscriptionAction
> = {
  active: "enable_runtime",
  suspended: "restrict_runtime",
  canceled: "disable_workspaces",
  pending: "limited_access",
};

export function getSubscriptionAction(
  classification: SubscriptionLifecycleClassification
): SubscriptionAction {
  return actionMap[classification];
}

export function shouldEnableRuntime(
  classification: SubscriptionLifecycleClassification
): boolean {
  return getSubscriptionAction(classification) === "enable_runtime";
}

export function shouldRestrictRuntime(
  classification: SubscriptionLifecycleClassification
): boolean {
  return getSubscriptionAction(classification) === "restrict_runtime";
}

export function shouldDisableWorkspaces(
  classification: SubscriptionLifecycleClassification
): boolean {
  return getSubscriptionAction(classification) === "disable_workspaces";
}

export function shouldLimitAccess(
  classification: SubscriptionLifecycleClassification
): boolean {
  return getSubscriptionAction(classification) === "limited_access";
}