import {
  SubscriptionState,
  isActiveSubscriptionState,
} from "@/lib/billing/subscriptionState";

export class SubscriptionStateService {
  isActive(
    state: SubscriptionState
  ): boolean {
    return isActiveSubscriptionState(state);
  }

  isSuspended(
    state: SubscriptionState
  ): boolean {
    return (
      state === "past_due" ||
      state === "unpaid" ||
      state === "paused"
    );
  }

  isCanceled(
    state: SubscriptionState
  ): boolean {
    return (
      state === "canceled" ||
      state === "incomplete_expired"
    );
  }
}