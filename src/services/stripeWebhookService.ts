import Stripe from "stripe";

import { getStripe } from "@/lib/stripe";
import { BillingRepository } from "@/repositories/billingRepository";

export class StripeWebhookService {
  private repository = new BillingRepository();

  constructEvent(
    payload: Buffer,
    signature: string
  ): Stripe.Event {
    const stripe = getStripe();

    return stripe.webhooks.constructEvent(
      payload,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  }

  async processEvent(event: Stripe.Event) {
    return this.repository.markBillingEventProcessed(
      event.id,
      event.type
    );
  }
}