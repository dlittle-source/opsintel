export default function MonetizationPositioningStrip() {
  return (
    <section className="my-8 rounded-3xl border border-emerald-400/20 bg-gradient-to-r from-emerald-400/10 via-slate-950 to-cyan-400/10 p-5 shadow-xl">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
            Monetization Layer
          </p>

          <h2 className="mt-2 text-xl font-bold text-white">
            White-Label Executive Intelligence Platform
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
            Positions OpsIntel as a premium executive infrastructure
            intelligence platform for consulting firms, managed service
            providers, enterprise technology teams, and future white-label
            licensing opportunities.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-xs md:grid-cols-4">
          {["SaaS", "White-Label", "Consulting", "Enterprise"].map((item) => (
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