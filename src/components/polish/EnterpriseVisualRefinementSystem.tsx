export default function EnterpriseVisualRefinementSystem() {
  return (
    <section className="mb-6 rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 shadow-2xl">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Phase 6A
          </p>

          <h1 className="mt-3 text-2xl font-bold tracking-tight text-white md:text-3xl">
            Enterprise Visual Refinement System
          </h1>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
            Premium interface polish layer focused on dashboard clarity,
            executive hierarchy, reduced visual fatigue, monetization readiness,
            and portfolio-grade presentation quality.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm md:grid-cols-4">
          {[
            { label: "Hierarchy", value: "Improved" },
            { label: "Spacing", value: "Cleaner" },
            { label: "Fatigue", value: "Reduced" },
            { label: "Readiness", value: "Premium" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4"
            >
              <p className="text-xs uppercase tracking-widest text-slate-500">
                {item.label}
              </p>
              <p className="mt-2 font-semibold text-slate-100">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
          <p className="text-sm font-semibold text-cyan-300">
            Executive Clarity
          </p>
          <p className="mt-2 text-xs leading-5 text-slate-400">
            Makes the dashboard feel more structured, intentional, and easier
            to understand during demos.
          </p>
        </div>

        <div className="rounded-2xl border border-violet-400/20 bg-violet-400/10 p-4">
          <p className="text-sm font-semibold text-violet-300">
            SaaS Polish Layer
          </p>
          <p className="mt-2 text-xs leading-5 text-slate-400">
            Adds premium enterprise product energy without changing the
            existing application logic.
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4">
          <p className="text-sm font-semibold text-emerald-300">
            Monetization Ready
          </p>
          <p className="mt-2 text-xs leading-5 text-slate-400">
            Supports portfolio screenshots, white-label positioning, and
            business-ready presentation.
          </p>
        </div>
      </div>
    </section>
  );
}