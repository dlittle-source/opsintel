const legendItems = [
  {
    label: "Frontend Services",
    color: "bg-cyan-400",
  },
  {
    label: "Backend APIs",
    color: "bg-emerald-400",
  },
  {
    label: "Cloud Infrastructure",
    color: "bg-orange-400",
  },
  {
    label: "CI/CD Pipelines",
    color: "bg-purple-400",
  },
  {
    label: "Container Systems",
    color: "bg-pink-400",
  },
];

export default function ArchitectureLegend() {
  return (
    <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Infrastructure Legend
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Architecture service classifications and deployment categories.
          </p>
        </div>

        <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
          Operational Mapping
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {legendItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 px-4 py-3"
          >
            <div className={`h-4 w-4 rounded-full ${item.color}`} />

            <p className="text-sm text-slate-300">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}