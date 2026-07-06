export default function BillingCancelPage() {
  return (
    <section className="mx-auto max-w-2xl space-y-6 py-16">
      <h1 className="text-3xl font-bold">
        Checkout Cancelled
      </h1>

      <p className="text-muted-foreground">
        Your subscription was not completed.
      </p>

      <p className="text-muted-foreground">
        You can restart checkout at any time.
      </p>
    </section>
  );
}