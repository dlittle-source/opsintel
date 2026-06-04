export default function ExecutiveDensityOptimizationSystem() {
  return (
    <section className="my-8 rounded-3xl border border-slate-800/70 bg-gradient-to-br from-slate-950 via-slate-900/80 to-slate-950 p-5 shadow-xl">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Density Optimization
          </p>

          <h2 className="mt-2 text-xl font-bold tracking-tight text-white">
            Calmer Enterprise Workspace
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            Improves dashboard readability by separating dense intelligence
            surfaces into clearer, calmer, portfolio-ready visual zones.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 text-center text-xs">
          {[
            { label: "Noise", value: "Lower" },
            { label: "Scan", value: "Faster" },
            { label: "Focus", value: "Higher" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3"
            >
              <p className="text-slate-500">{item.label}</p>
              <p className="mt-1 font-semibold text-slate-100">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}