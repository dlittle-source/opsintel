import { getStripe } from "@/lib/stripe";
import { BillingRepository } from "@/repositories/billingRepository";

export class BillingCustomerService {
  private repository = new BillingRepository();

  async getOrCreateCustomer(
    tenantId: string,
    email?: string,
    name?: string
  ) {
    const existingCustomer =
      await this.repository.findCustomerByTenantId(tenantId);

    if (existingCustomer) {
      return existingCustomer;
    }

    const stripe = getStripe();

    const stripeCustomer = await stripe.customers.create({
      email,
      name,
      metadata: {
        tenantId,
      },
    });

    return this.repository.createCustomer({
      tenantId,
      stripeCustomerId: stripeCustomer.id,
      email,
      name,
    });
  }

  async findByTenantId(tenantId: string) {
    return this.repository.findCustomerByTenantId(tenantId);
  }

  async findByStripeId(stripeCustomerId: string) {
    return this.repository.findCustomerByStripeId(
      stripeCustomerId
    );
  }
}