import { SubscriptionState } from "./subscriptionState";

export const subscriptionStateTransitions: Record<
  SubscriptionState,
  SubscriptionState[]
> = {
  trialing: [
    "active",
    "canceled",
  ],

  active: [
    "past_due",
    "canceled",
  ],

  past_due: [
    "active",
    "unpaid",
    "canceled",
  ],

  unpaid: [
    "active",
    "canceled",
  ],

  canceled: [],

  incomplete: [
    "active",
    "incomplete_expired",
  ],

  incomplete_expired: [],

  paused: [
    "active",
    "canceled",
  ],
};

export function canTransitionSubscriptionState(
  from: SubscriptionState,
  to: SubscriptionState
): boolean {
  return subscriptionStateTransitions[from].includes(to);
}