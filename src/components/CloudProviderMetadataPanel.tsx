"use client";

const providers = [
  {
    name: "AWS",
    region: "us-east-1",
    services: ["EC2", "ECS", "RDS", "CloudWatch"],
    environment: "Production",
  },
  {
    name: "Azure",
    region: "eastus",
    services: ["App Service", "AKS", "SQL Database", "Monitor"],
    environment: "Enterprise Ready",
  },
  {
    name: "Google Cloud",
    region: "us-central1",
    services: ["Compute Engine", "GKE", "Cloud SQL", "Operations"],
    environment: "Hybrid Cloud",
  },
];

export default function CloudProviderMetadataPanel() {
  return (
    <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-2xl">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-white">
          Cloud Provider Metadata
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Multi-cloud infrastructure context, regions, and platform services.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {providers.map((provider) => (
          <div
            key={provider.name}
            className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 transition-all duration-300 hover:border-slate-700"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-semibold text-white">
                {provider.name}
              </h3>

              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2 py-1 text-xs text-cyan-300">
                {provider.region}
              </span>
            </div>

            <p className="mb-3 text-xs uppercase tracking-wider text-slate-500">
              Services
            </p>

            <div className="flex flex-wrap gap-2">
              {provider.services.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-slate-700 bg-slate-950 px-2 py-1 text-xs text-slate-300"
                >
                  {service}
                </span>
              ))}
            </div>

            <div className="mt-5 rounded-lg border border-slate-800 bg-slate-950/70 p-3">
              <p className="text-xs text-slate-500">Environment</p>
              <p className="mt-1 text-sm font-medium text-emerald-300">
                {provider.environment}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}