import { GeneratedArchitecture } from "@/types/architecture";

type Props = {
  architecture: GeneratedArchitecture;
};

export default function StackOverviewPanel({ architecture }: Props) {
  return (
    <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Technology Stack
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            AI-selected services, frameworks, and infrastructure components.
          </p>
        </div>

        <div className="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-xs text-purple-300">
          {architecture.stack.length} Services
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        {architecture.stack.map((item) => (
          <div
            key={item}
            className="rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-slate-200"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}