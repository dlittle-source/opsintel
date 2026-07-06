import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const { StripeWebhookService } = await import(
      "@/services/stripeWebhookService"
    );

    const signature = (await headers()).get("stripe-signature");

    if (!signature) {
      return NextResponse.json(
        {
          error: "Missing signature",
        },
        {
          status: 400,
        }
      );
    }

    const payload = Buffer.from(await request.arrayBuffer());

    const webhookService = new StripeWebhookService();

    const event = webhookService.constructEvent(
      payload,
      signature
    );

    await webhookService.processEvent(event);

    return NextResponse.json({
      received: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Webhook processing failed",
      },
      {
        status: 400,
      }
    );
  }
}