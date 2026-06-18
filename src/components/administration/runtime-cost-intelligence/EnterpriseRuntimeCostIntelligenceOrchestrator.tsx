import RuntimeBudgetManagement from "@/components/administration/runtime-cost-intelligence/RuntimeBudgetManagement";
import RuntimeCapacityEfficiency from "@/components/administration/runtime-cost-intelligence/RuntimeCapacityEfficiency";
import RuntimeCostExecutiveSummary from "@/components/administration/runtime-cost-intelligence/RuntimeCostExecutiveSummary";
import RuntimeCostInsights from "@/components/administration/runtime-cost-intelligence/RuntimeCostInsights";
import RuntimeCostOptimization from "@/components/administration/runtime-cost-intelligence/RuntimeCostOptimization";
import RuntimeCostOverview from "@/components/administration/runtime-cost-intelligence/RuntimeCostOverview";
import RuntimeForecastingCenter from "@/components/administration/runtime-cost-intelligence/RuntimeForecastingCenter";
import RuntimeResourceSpendCenter from "@/components/administration/runtime-cost-intelligence/RuntimeResourceSpendCenter";

export default function EnterpriseRuntimeCostIntelligenceOrchestrator() {
  return (
    <section className="space-y-6">
      <RuntimeCostExecutiveSummary />

      <div className="grid items-start gap-6 xl:grid-cols-2">
        <RuntimeCostOverview />
        <RuntimeResourceSpendCenter />
      </div>

      <div className="grid items-start gap-6 xl:grid-cols-2">
        <RuntimeCostOptimization />
        <RuntimeBudgetManagement />
      </div>

      <div className="grid items-start gap-6 xl:grid-cols-2">
        <RuntimeCapacityEfficiency />
        <RuntimeForecastingCenter />
      </div>

      <RuntimeCostInsights />
    </section>
  );
}