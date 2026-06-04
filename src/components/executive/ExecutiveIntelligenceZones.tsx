"use client";

type Zone = {
  id: string;
  title: string;
  description: string;
  systems: string[];
  status: string;
};

const zones: Zone[] = [
  {
    id: "operations",
    title: "Operations Intelligence",
    description:
      "Unified live operational visibility across telemetry, service health, incidents, and infrastructure behavior.",
    status: "ACTIVE",
    systems: [
      "Telemetry Intelligence",
      "Operations Command Center",
      "Infrastructure Heatmap",
    ],
  },
  {
    id: "security",
    title: "Risk & Security Intelligence",
    description:
      "Executive-level security posture analysis with governance visibility and threat intelligence systems.",
    status: "MONITORING",
    systems: [
      "Threat Intelligence",
      "Governance Intelligence",
      "Executive Governance",
    ],
  },
  {
    id: "architecture",
    title: "Architecture Intelligence",
    description:
      "Topology analysis, resiliency mapping, rollback validation, and deployment planning systems.",
    status: "OPTIMIZED",
    systems: [
      "Topology Engine",
      "Resiliency Analysis",
      "Rollback Intelligence",
      "Deployment Strategy",
    ],
  },
  {
    id: "business",
    title: "Business Intelligence",
    description:
      "Enterprise cost visibility, cloud strategy analysis, and executive advisory systems.",
    status: "SCALING",
    systems: [
      "Cost Intelligence",
      "Multi-Cloud Intelligence",
      "AI Advisory Engine",
    ],
  },
];

export default function ExecutiveIntelligenceZones() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
            Unified Intelligence Zones
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            Executive Operational Domains
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
            The platform is now transitioning into grouped operational
            intelligence zones that consolidate infrastructure visibility,
            governance, deployment systems, and executive analysis into a
            modular AI operations experience.
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 text-xs uppercase tracking-[0.3em] text-cyan-300">
          ENTERPRISE AI ORCHESTRATION
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {zones.map((zone) => (
          <div
            key={zone.id}
            className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 shadow-2xl transition-all duration-300 hover:border-cyan-500/30 hover:shadow-cyan-500/10"
          >
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
            </div>

            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    Intelligence Zone
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-white">
                    {zone.title}
                  </h3>
                </div>

                <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-cyan-300">
                  {zone.status}
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                {zone.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {zone.systems.map((system) => (
                  <div
                    key={system}
                    className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-300"
                  >
                    {system}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-slate-800 pt-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    Executive Visibility
                  </p>

                  <p className="mt-2 text-sm text-slate-300">
                    Operational intelligence actively consolidated
                  </p>
                </div>

                <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  ONLINE
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}