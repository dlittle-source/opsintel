export default function PortfolioPresentationMode() {
  return (
    <section className="my-8 rounded-3xl border border-amber-400/20 bg-gradient-to-br from-amber-400/10 via-slate-950 to-cyan-400/10 p-6 shadow-2xl">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
            Portfolio Presentation
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">
            Enterprise Demo Showcase Mode
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
            Positions the platform for recruiter walkthroughs, client demos,
            screenshots, white-label discussions, and monetization-ready
            presentation.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-xs md:grid-cols-4">
          {[
            "Demo Ready",
            "Client Ready",
            "Recruiter Ready",
            "White-Label Ready",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-800 bg-slate-950/75 px-4 py-3 text-center font-semibold text-slate-200"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}