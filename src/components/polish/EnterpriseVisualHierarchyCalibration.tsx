export default function EnterpriseVisualHierarchyCalibration() {
  return (
    <section className="my-8 rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-950 to-violet-400/10 p-6 shadow-2xl">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Visual Hierarchy
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">
            Enterprise Focus Calibration
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
            Highlights the most important executive systems while reducing
            equal-weight dashboard noise across secondary operational layers.
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/80 px-5 py-4 text-sm font-semibold text-cyan-200">
          Executive Priority Active
        </div>
      </div>
    </section>
  );
}