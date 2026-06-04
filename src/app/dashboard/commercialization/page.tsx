import CommercializationCommandCenter from "@/components/commercial/CommercializationCommandCenter";
import LaunchReadinessDashboard from "@/components/commercial/LaunchReadinessDashboard";
import PricingAndPackagingIntelligence from "@/components/commercial/PricingAndPackagingIntelligence";
import GoToMarketIntelligence from "@/components/commercial/GoToMarketIntelligence";
import CommercializationExecutiveSummary from "@/components/commercial/CommercializationExecutiveSummary";

export default function CommercializationWorkspacePage() {
  return (
    <div className="space-y-6">
      <CommercializationCommandCenter />

      <LaunchReadinessDashboard />

      <PricingAndPackagingIntelligence />

      <GoToMarketIntelligence />

      <CommercializationExecutiveSummary />
    </div>
  );
}