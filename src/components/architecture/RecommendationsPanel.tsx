import { GeneratedArchitecture } from "@/types/architecture";

type Props = {
  architecture: GeneratedArchitecture;
};

export default function RecommendationsPanel({ architecture }: Props) {
  return (
    <section className="mt-6 grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl">
        <h2 className="text-lg font-semibold text-white">
          Security Recommendations
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          AI-generated hardening guidance for this architecture.
        </p>

        <div className="mt-5 space-y-3">
          {architecture.securityRecommendations.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-100"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl">
        <h2 className="text-lg font-semibold text-white">
          Scalability Recommendations
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          AI-generated scaling guidance for future growth.
        </p>

        <div className="mt-5 space-y-3">
          {architecture.scalabilityRecommendations.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4 text-sm text-cyan-100"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}