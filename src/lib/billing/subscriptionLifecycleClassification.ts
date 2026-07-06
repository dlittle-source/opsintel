import { SubscriptionState } from "./subscriptionState";

export type SubscriptionLifecycleClassification =
  | "active"
  | "suspended"
  | "canceled"
  | "pending";

const lifecycleClassificationMap: Record<
  SubscriptionState,
  SubscriptionLifecycleClassification
> = {
  trialing: "active",
  active: "active",

  past_due: "suspended",
  unpaid: "suspended",
  paused: "suspended",

  canceled: "canceled",
  incomplete_expired: "canceled",

  incomplete: "pending",
};

export function getSubscriptionLifecycleClassification(
  state: SubscriptionState
): SubscriptionLifecycleClassification {
  return lifecycleClassificationMap[state];
}

export function isActiveLifecycle(
  state: SubscriptionState
): boolean {
  return (
    getSubscriptionLifecycleClassification(state) === "active"
  );
}

export function isSuspendedLifecycle(
  state: SubscriptionState
): boolean {
  return (
    getSubscriptionLifecycleClassification(state) === "suspended"
  );
}

export function isCanceledLifecycle(
  state: SubscriptionState
): boolean {
  return (
    getSubscriptionLifecycleClassification(state) === "canceled"
  );
}

export function isPendingLifecycle(
  state: SubscriptionState
): boolean {
  return (
    getSubscriptionLifecycleClassification(state) === "pending"
  );
}