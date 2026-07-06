import { SubscriptionState } from "./subscriptionState";

export type SubscriptionStateMetadata = {
  displayName: string;
  severity: "info" | "warning" | "critical";
  runtimeEnabled: boolean;
  workspaceEnabled: boolean;
  entitlementsEnabled: boolean;
};

export const subscriptionStateMetadata: Record<
  SubscriptionState,
  SubscriptionStateMetadata
> = {
  trialing: {
    displayName: "Trialing",
    severity: "info",
    runtimeEnabled: true,
    workspaceEnabled: true,
    entitlementsEnabled: true,
  },

  active: {
    displayName: "Active",
    severity: "info",
    runtimeEnabled: true,
    workspaceEnabled: true,
    entitlementsEnabled: true,
  },

  past_due: {
    displayName: "Past Due",
    severity: "warning",
    runtimeEnabled: false,
    workspaceEnabled: true,
    entitlementsEnabled: false,
  },

  unpaid: {
    displayName: "Unpaid",
    severity: "critical",
    runtimeEnabled: false,
    workspaceEnabled: false,
    entitlementsEnabled: false,
  },

  canceled: {
    displayName: "Canceled",
    severity: "critical",
    runtimeEnabled: false,
    workspaceEnabled: false,
    entitlementsEnabled: false,
  },

  incomplete: {
    displayName: "Incomplete",
    severity: "warning",
    runtimeEnabled: false,
    workspaceEnabled: true,
    entitlementsEnabled: false,
  },

  incomplete_expired: {
    displayName: "Incomplete Expired",
    severity: "critical",
    runtimeEnabled: false,
    workspaceEnabled: false,
    entitlementsEnabled: false,
  },

  paused: {
    displayName: "Paused",
    severity: "warning",
    runtimeEnabled: false,
    workspaceEnabled: true,
    entitlementsEnabled: false,
  },
};

export function getSubscriptionStateMetadata(
  state: SubscriptionState
): SubscriptionStateMetadata {
  return subscriptionStateMetadata[state];
}