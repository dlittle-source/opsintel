"use client";

const pricingIdeas = [
  {
    tier: "Starter",
    audience: "Solo developers / portfolio users",
    price: "$19-$29/mo",
    features: ["AI architecture generation", "Basic topology view", "Simple export"],
  },
  {
    tier: "Pro",
    audience: "DevOps engineers / consultants",
    price: "$49-$99/mo",
    features: ["PDF reports", "Risk scoring", "AI recommendations", "Saved projects"],
  },
  {
    tier: "Team",
    audience: "Platform teams / agencies",
    price: "$199+/mo",
    features: ["Team workspaces", "Client reports", "Multi-cloud metadata", "Advanced analytics"],
  },
];

export default function SaaSCommercializationPanel() {
  return (
    <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-2xl">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            SaaS Commercialization Direction
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Product positioning, target users, and premium feature roadmap.
          </p>
        </div>

        <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
          Monetization Layer
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {pricingIdeas.map((item) => (
          <div
            key={item.tier}
            className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 transition-all duration-300 hover:border-slate-700"
          >
            <div className="mb-4">
              <h3 className="text-base font-semibold text-white">
                {item.tier}
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                {item.audience}
              </p>
            </div>

            <div className="mb-5 text-2xl font-bold text-white">
              {item.price}
            </div>

            <div className="space-y-2">
              {item.features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-lg border border-slate-800 bg-slate-950/70 px-3 py-2 text-sm text-slate-300"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
        <p className="text-xs uppercase tracking-wider text-cyan-300">
          Commercial Positioning
        </p>

        <p className="mt-2 text-sm leading-relaxed text-slate-300">
          Position this product as an AI-powered infrastructure planning and DevOps intelligence platform for engineers, consultants, startups, and platform teams who need fast architecture generation, operational analysis, and client-ready documentation.
        </p>
      </div>
    </section>
  );
}