import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const { getStripe } = await import("@/lib/stripe");
    const { BillingCustomerService } = await import(
      "@/services/billingCustomerService"
    );

    const body = await request.json();

    const customerService = new BillingCustomerService();

    const customer = await customerService.findByTenantId(
      body.tenantId
    );

    if (!customer) {
      return NextResponse.json(
        {
          error: "Customer not found",
        },
        {
          status: 404,
        }
      );
    }

    const stripe = getStripe();

    const session =
      await stripe.billingPortal.sessions.create({
        customer: customer.stripeCustomerId,
        return_url: body.returnUrl,
      });

    return NextResponse.json({
      portalUrl: session.url,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to create portal session",
      },
      {
        status: 500,
      }
    );
  }
}