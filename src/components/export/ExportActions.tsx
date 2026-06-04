"use client";

import { GeneratedArchitecture } from "@/types/architecture";

type Props = {
  architecture: GeneratedArchitecture;
};

export default function ExportActions({ architecture }: Props) {
  function handleExportMarkdown() {
    const markdown = `# ${architecture.projectName}

## Executive Summary

${architecture.summary}

## Infrastructure Summary

${architecture.infrastructureSummary}

## Stack

${architecture.stack.map((item) => `- ${item}`).join("\n")}

## Production Readiness

- Score: ${architecture.productionReadinessScore}/100
- Complexity: ${architecture.estimatedComplexity}
- Risk Level: ${architecture.riskLevel}
- Deployment Confidence: ${architecture.deploymentConfidence}%
- Estimated Monthly Cost: ${architecture.estimatedMonthlyCost}

## Deployment Flow

${architecture.deploymentFlow.map((step, index) => `${index + 1}. ${step}`).join("\n")}

## Security Recommendations

${architecture.securityRecommendations.map((item) => `- ${item}`).join("\n")}

## Scalability Recommendations

${architecture.scalabilityRecommendations.map((item) => `- ${item}`).join("\n")}
`;

    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${architecture.projectName
      .toLowerCase()
      .replaceAll(" ", "-")}-architecture-report.md`;

    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-white">Export Center</h2>
          <p className="mt-1 text-sm text-slate-400">
            Download the generated architecture assessment as a Markdown report.
          </p>
        </div>

        <button
          onClick={handleExportMarkdown}
          className="rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Export Markdown
        </button>
      </div>
    </section>
  );
}