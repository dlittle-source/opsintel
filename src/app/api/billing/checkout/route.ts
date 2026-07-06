import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const { CheckoutSessionService } = await import(
      "@/services/checkoutSessionService"
    );

    const checkoutService = new CheckoutSessionService();

    const body = await request.json();

    const session =
      await checkoutService.createSubscriptionCheckoutSession(
        body.tenantId,
        body.priceId,
        body.successUrl,
        body.cancelUrl,
        body.email,
        body.name
      );

    return NextResponse.json({
      checkoutUrl: session.url,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to create checkout session",
      },
      {
        status: 500,
      }
    );
  }
}