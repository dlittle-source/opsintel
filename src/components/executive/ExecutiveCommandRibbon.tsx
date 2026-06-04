"use client";

const ribbonSignals = [
  {
    label: "Enterprise Score",
    value: "88/100",
    status: "STABLE",
  },
  {
    label: "Operational Risk",
    value: "LOW",
    status: "CONTROLLED",
  },
  {
    label: "AI Systems",
    value: "ONLINE",
    status: "ACTIVE",
  },
  {
    label: "Threat Level",
    value: "NORMAL",
    status: "SECURE",
  },
  {
    label: "Deployment State",
    value: "READY",
    status: "VALIDATED",
  },
];

export default function ExecutiveCommandRibbon() {
  return (
    <section className="sticky top-4 z-30 rounded-3xl border border-cyan-500/20 bg-slate-950/90 p-4 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
            Executive Command Ribbon
          </p>

          <h2 className="mt-2 text-xl font-black tracking-tight text-white">
            Enterprise AI Operations Status
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {ribbonSignals.map((signal) => (
            <div
              key={signal.label}
              className="rounded-2xl border border-slate-800 bg-black/30 px-4 py-3"
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                {signal.label}
              </p>

              <div className="mt-2 text-lg font-black text-white">
                {signal.value}
              </div>

              <div className="mt-2 inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-emerald-300">
                {signal.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}