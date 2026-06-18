export default function RuntimeGovernanceExecutiveSummary() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-950 to-slate-900 p-6">
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Runtime Governance Executive Summary
          </h2>

          <p className="mt-2 max-w-3xl text-sm text-slate-400">
            Enterprise governance visibility across policy enforcement,
            access reviews, change management, audit events, and exception
            remediation. Governance posture remains stable with active
            controls protecting runtime operations and tenant boundaries.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <div className="text-sm text-slate-400">
              Governance Score
            </div>

            <div className="mt-2 text-3xl font-bold text-emerald-400">
              96%
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <div className="text-sm text-slate-400">
              Active Policies
            </div>

            <div className="mt-2 text-3xl font-bold text-cyan-400">
              128
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <div className="text-sm text-slate-400">
              Pending Reviews
            </div>

            <div className="mt-2 text-3xl font-bold text-amber-400">
              42
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <div className="text-sm text-slate-400">
              Open Exceptions
            </div>

            <div className="mt-2 text-3xl font-bold text-rose-400">
              5
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}