import { GeneratedArchitecture } from "@/types/architecture";

type Props = {
  architecture: GeneratedArchitecture;
};

export default function NodeInventoryPanel({ architecture }: Props) {
  return (
    <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Infrastructure Inventory
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Generated infrastructure services and their operational roles.
          </p>
        </div>

        <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
          {architecture.nodes.length} Nodes
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {architecture.nodes.map((node) => (
          <div
            key={node.id}
            className="rounded-xl border border-slate-800 bg-slate-950 p-4"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-white">
                {node.label}
              </h3>

              <span className="rounded-full border border-slate-700 px-2 py-1 text-[10px] uppercase text-slate-400">
                {node.type}
              </span>
            </div>

            <p className="mt-2 text-xs text-cyan-300">
              {node.provider || "Infrastructure"}
            </p>

            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {node.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}