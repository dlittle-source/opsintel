export default function RuntimeAutomationExecutiveSummary() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Phase 18P
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-white">
            Enterprise Runtime Automation Suite
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
            Centralizes runtime workflow automation, remediation actions,
            approvals, scheduling, escalation routing, and operational insights
            across tenant-aware enterprise environments.
          </p>
        </div>

        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
          Automation readiness active
        </div>
      </div>
    </section>
  );
}