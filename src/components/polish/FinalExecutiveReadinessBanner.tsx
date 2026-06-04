export default function FinalExecutiveReadinessBanner() {
  return (
    <section className="mt-8 rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-950 to-emerald-400/10 p-6 shadow-2xl">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Final Readiness
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">
            Enterprise AI DevOps Platform Ready
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
            The platform is now positioned for portfolio presentation,
            executive demos, client conversations, white-label packaging, and
            monetization readiness.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-xs md:grid-cols-4">
          {["Portfolio", "Demo", "Client", "Monetization"].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-800 bg-slate-950/75 px-4 py-3 text-center font-semibold text-slate-200"
            >
              {item} Ready
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}