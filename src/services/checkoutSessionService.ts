import { getStripe } from "@/lib/stripe";
import { BillingCustomerService } from "@/services/billingCustomerService";

export class CheckoutSessionService {
  private customerService = new BillingCustomerService();

  async createSubscriptionCheckoutSession(
    tenantId: string,
    priceId: string,
    successUrl: string,
    cancelUrl: string,
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

    return stripe.checkout.sessions.create({
      mode: "subscription",
      customer: customer.stripeCustomerId,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        tenantId,
      },
    });
  }
}