"use client";

const exportSections = [
  "Architecture Overview",
  "Infrastructure Topology",
  "Cloud Provider Metadata",
  "Operational Metrics",
  "AI Operational Insights",
  "Deployment Risk Score",
  "Incident Simulation Summary",
  "Deployment Runbook",
  "Recommendations",
];

export default function ArchitecturePDFExportPanel() {
  return (
    <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-2xl">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Architecture PDF Export Planning
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Planned executive architecture report structure for SaaS-ready PDF exports.
          </p>
        </div>

        <div className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs text-violet-300">
          Export Roadmap
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
          <h3 className="text-sm font-semibold text-white">
            Planned PDF Report Sections
          </h3>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {exportSections.map((section, index) => (
              <div
                key={section}
                className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-950/70 p-3"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-xs text-cyan-300">
                  {index + 1}
                </span>

                <span className="text-sm text-slate-300">
                  {section}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
          <h3 className="text-sm font-semibold text-white">
            Export Capability Direction
          </h3>

          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <p>
              Generate client-ready architecture reports for DevOps teams,
              cloud consultants, and engineering leaders.
            </p>

            <p>
              Future export versions can include topology snapshots,
              deployment risk analysis, operational recommendations, and
              executive summaries.
            </p>
          </div>

          <div className="mt-5 rounded-lg border border-emerald-400/20 bg-emerald-400/10 p-4">
            <p className="text-xs uppercase tracking-wider text-emerald-300">
              SaaS Monetization Angle
            </p>

            <p className="mt-2 text-sm text-slate-300">
              PDF exports can become a premium feature for consultants,
              freelancers, and internal platform teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}