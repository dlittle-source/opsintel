import RuntimeAlertingCenter from "@/components/administration/runtime-observability/RuntimeAlertingCenter";
import RuntimeLoggingCenter from "@/components/administration/runtime-observability/RuntimeLoggingCenter";
import RuntimeMetricsCenter from "@/components/administration/runtime-observability/RuntimeMetricsCenter";
import RuntimeMonitoringOperations from "@/components/administration/runtime-observability/RuntimeMonitoringOperations";
import RuntimeObservabilityExecutiveSummary from "@/components/administration/runtime-observability/RuntimeObservabilityExecutiveSummary";
import RuntimeObservabilityInsights from "@/components/administration/runtime-observability/RuntimeObservabilityInsights";
import RuntimeObservabilityOverview from "@/components/administration/runtime-observability/RuntimeObservabilityOverview";
import RuntimeTracingCenter from "@/components/administration/runtime-observability/RuntimeTracingCenter";

export default function EnterpriseRuntimeObservabilityOrchestrator() {
  return (
    <section className="space-y-6">
      <RuntimeObservabilityExecutiveSummary />

      <div className="grid items-start gap-6 xl:grid-cols-2">
        <RuntimeObservabilityOverview />
        <RuntimeLoggingCenter />
      </div>

      <div className="grid items-start gap-6 xl:grid-cols-2">
        <RuntimeMetricsCenter />
        <RuntimeTracingCenter />
      </div>

      <div className="grid items-start gap-6 xl:grid-cols-2">
        <RuntimeAlertingCenter />
        <RuntimeMonitoringOperations />
      </div>

      <RuntimeObservabilityInsights />
    </section>
  );
}