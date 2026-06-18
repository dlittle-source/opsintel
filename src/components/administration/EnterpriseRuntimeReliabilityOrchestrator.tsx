import RuntimeAvailabilityCenter from "@/components/administration/runtime-reliability/RuntimeAvailabilityCenter";
import RuntimeFailoverIntelligence from "@/components/administration/runtime-reliability/RuntimeFailoverIntelligence";
import RuntimeRecoveryCenter from "@/components/administration/runtime-reliability/RuntimeRecoveryCenter";
import RuntimeRedundancyManagement from "@/components/administration/runtime-reliability/RuntimeRedundancyManagement";
import RuntimeReliabilityExecutiveSummary from "@/components/administration/runtime-reliability/RuntimeReliabilityExecutiveSummary";
import RuntimeReliabilityInsights from "@/components/administration/runtime-reliability/RuntimeReliabilityInsights";
import RuntimeReliabilityOverview from "@/components/administration/runtime-reliability/RuntimeReliabilityOverview";
import RuntimeResilienceAnalysis from "@/components/administration/runtime-reliability/RuntimeResilienceAnalysis";

export default function EnterpriseRuntimeReliabilityOrchestrator() {
  return (
    <section className="space-y-6">
      <RuntimeReliabilityExecutiveSummary />

      <div className="grid items-start gap-6 xl:grid-cols-2">
        <RuntimeReliabilityOverview />
        <RuntimeAvailabilityCenter />
      </div>

      <div className="grid items-start gap-6 xl:grid-cols-2">
        <RuntimeRedundancyManagement />
        <RuntimeRecoveryCenter />
      </div>

      <div className="grid items-start gap-6 xl:grid-cols-2">
        <RuntimeResilienceAnalysis />
        <RuntimeFailoverIntelligence />
      </div>

      <RuntimeReliabilityInsights />
    </section>
  );
}