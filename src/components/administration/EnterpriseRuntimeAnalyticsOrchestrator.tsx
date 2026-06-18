import RuntimeAnalyticsExecutiveSummary from "@/components/administration/runtime-analytics/RuntimeAnalyticsExecutiveSummary";
import RuntimeAnalyticsInsights from "@/components/administration/runtime-analytics/RuntimeAnalyticsInsights";
import RuntimeAnalyticsOverview from "@/components/administration/runtime-analytics/RuntimeAnalyticsOverview";
import RuntimeAnomalyDetection from "@/components/administration/runtime-analytics/RuntimeAnomalyDetection";
import RuntimeCapacityAnalytics from "@/components/administration/runtime-analytics/RuntimeCapacityAnalytics";
import RuntimeForecastCenter from "@/components/administration/runtime-analytics/RuntimeForecastCenter";
import RuntimePerformanceAnalytics from "@/components/administration/runtime-analytics/RuntimePerformanceAnalytics";
import RuntimeTrendAnalytics from "@/components/administration/runtime-analytics/RuntimeTrendAnalytics";

export default function EnterpriseRuntimeAnalyticsOrchestrator() {
  return (
    <section className="space-y-6">
      <RuntimeAnalyticsExecutiveSummary />

      <div className="grid items-start gap-6 xl:grid-cols-2">
        <RuntimeAnalyticsOverview />
        <RuntimeTrendAnalytics />
      </div>

      <div className="grid items-start gap-6 xl:grid-cols-2">
        <RuntimeCapacityAnalytics />
        <RuntimePerformanceAnalytics />
      </div>

      <div className="grid items-start gap-6 xl:grid-cols-2">
        <RuntimeForecastCenter />
        <RuntimeAnomalyDetection />
      </div>

      <RuntimeAnalyticsInsights />
    </section>
  );
}