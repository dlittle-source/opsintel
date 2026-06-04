import { GeneratedArchitecture } from "@/types/architecture";

type Props = {
  architecture: GeneratedArchitecture;
};

export default function ConnectionMatrixPanel({
  architecture,
}: Props) {
  return (
    <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Infrastructure Connections
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Service communication and deployment dependency mapping.
          </p>
        </div>

        <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
          {architecture.connections.length} Connections
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-xl border border-slate-800">
        <table className="w-full border-collapse">
          <thead className="bg-slate-950">
            <tr>
              <th className="border-b border-slate-800 px-4 py-3 text-left text-xs uppercase tracking-wider text-slate-400">
                Source
              </th>

              <th className="border-b border-slate-800 px-4 py-3 text-left text-xs uppercase tracking-wider text-slate-400">
                Target
              </th>

              <th className="border-b border-slate-800 px-4 py-3 text-left text-xs uppercase tracking-wider text-slate-400">
                Connection Type
              </th>
            </tr>
          </thead>

          <tbody>
            {architecture.connections.map((connection) => (
              <tr
                key={connection.id}
                className="border-b border-slate-800 bg-slate-900/40"
              >
                <td className="px-4 py-4 text-sm text-slate-200">
                  {connection.source}
                </td>

                <td className="px-4 py-4 text-sm text-slate-200">
                  {connection.target}
                </td>

                <td className="px-4 py-4">
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                    {connection.label}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}