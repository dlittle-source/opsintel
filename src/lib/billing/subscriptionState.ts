export type SubscriptionState =
  | "trialing"
  | "active"
  | "past_due"
  | "unpaid"
  | "canceled"
  | "incomplete"
  | "incomplete_expired"
  | "paused";

export const ACTIVE_SUBSCRIPTION_STATES: SubscriptionState[] = [
  "trialing",
  "active",
];

export function isActiveSubscriptionState(
  state: SubscriptionState
): boolean {
  return ACTIVE_SUBSCRIPTION_STATES.includes(state);
}