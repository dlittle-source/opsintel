import { getRuntimeIntelligenceSummary } from "@/lib/runtimeIntelligenceEngine";

export default function RuntimeIntelligenceScorecard() {
  const summary = getRuntimeIntelligenceSummary();

  return (
    <section className="rounded-xl border bg-card p-6">
      <h2 className="text-xl font-semibold">
        Runtime Intelligence Scorecard
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-5">
        <ScoreCard
          label="Runtime"
          value={summary.runtimeScore}
        />

        <ScoreCard
          label="Health"
          value={summary.healthScore}
        />

        <ScoreCard
          label="Compliance"
          value={summary.complianceScore}
        />

        <ScoreCard
          label="Optimization"
          value={summary.optimizationScore}
        />

        <ScoreCard
          label="Risk"
          value={summary.riskScore}
        />
      </div>
    </section>
  );
}

type ScoreCardProps = {
  label: string;
  value: number;
};

function ScoreCard({
  label,
  value,
}: ScoreCardProps) {
  return (
    <div className="rounded-lg border p-4">
      <div className="text-sm text-muted-foreground">
        {label}
      </div>

      <div className="mt-2 text-2xl font-bold">
        {value}
      </div>
    </div>
  );
}