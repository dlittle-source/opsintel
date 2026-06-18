const approvals = [
  {
    request: "Production Deployment",
    approver: "Platform Operations",
    status: "Approved",
  },
  {
    request: "Policy Modification",
    approver: "Governance Team",
    status: "Pending",
  },
  {
    request: "Tenant Provisioning",
    approver: "Customer Success",
    status: "Approved",
  },
  {
    request: "Emergency Remediation",
    approver: "Incident Commander",
    status: "Escalated",
  },
];

export default function RuntimeApprovalAutomation() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white">
          Runtime Approval Automation
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          Approval pipelines ensure automated activities remain aligned with
          enterprise governance and operational controls.
        </p>
      </div>

      <div className="space-y-4">
        {approvals.map((approval) => (
          <div
            key={approval.request}
            className="rounded-xl border border-slate-800 bg-slate-900/70 p-4"
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-medium text-cyan-300">
                  {approval.request}
                </h4>

                <p className="mt-1 text-sm text-slate-400">
                  Approver: {approval.approver}
                </p>
              </div>

              <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-sm text-amber-300">
                {approval.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}