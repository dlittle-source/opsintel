import { getStripe } from "@/lib/stripe";
import { BillingRepository } from "@/repositories/billingRepository";
import { BillingCustomerService } from "@/services/billingCustomerService";

export class SubscriptionService {
  private repository = new BillingRepository();
  private customerService = new BillingCustomerService();

  async getSubscription(tenantId: string) {
    return this.repository.findSubscriptionByTenantId(
      tenantId
    );
  }

  async createSubscription(
    tenantId: string,
    priceId: string,
    email?: string,
    name?: string
  ) {
    const customer =
      await this.customerService.getOrCreateCustomer(
        tenantId,
        email,
        name
      );

    const stripe = getStripe();

    const stripeSubscription =
      await stripe.subscriptions.create({
        customer: customer.stripeCustomerId,
        items: [
          {
            price: priceId,
          },
        ],
        payment_behavior: "default_incomplete",
      });

    return this.repository.createSubscription({
      tenantId,
      billingCustomerId: customer.id,
      stripeSubscriptionId: stripeSubscription.id,
      stripePriceId: priceId,
      stripeProductId:
        typeof stripeSubscription.items.data[0]?.price.product ===
        "string"
          ? stripeSubscription.items.data[0].price.product
          : undefined,
    });
  }

  async findByStripeSubscriptionId(
    stripeSubscriptionId: string
  ) {
    return this.repository.findSubscriptionByStripeId(
      stripeSubscriptionId
    );
  }
}