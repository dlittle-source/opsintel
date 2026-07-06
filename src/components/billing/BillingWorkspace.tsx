import CustomerPortalCard from "@/components/billing/CustomerPortalCard";
import SubscriptionStatusCard from "@/components/billing/SubscriptionStatusCard";
import UpgradePlanCard from "@/components/billing/UpgradePlanCard";

export default function BillingWorkspace() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Billing Workspace
        </h1>

        <p className="text-muted-foreground">
          Subscription lifecycle, plans, invoices and
          customer billing management.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <SubscriptionStatusCard />
        <UpgradePlanCard />
        <CustomerPortalCard />
      </div>
    </section>
  );
}