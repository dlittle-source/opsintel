import RuntimeIntelligenceScorecard from "@/components/administration/RuntimeIntelligenceScorecard";

export default function EnterpriseRuntimeIntelligenceDashboard() {
  return (
    <section className="space-y-6">
      <div className="rounded-xl border bg-card p-6">
        <h2 className="text-xl font-semibold">
          Enterprise Runtime Intelligence Dashboard
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Executive intelligence aggregation layer for runtime health,
          telemetry, compliance, dependencies, optimization, and risk
          assessment.
        </p>
      </div>

      <RuntimeIntelligenceScorecard />

    </section>
  );
}