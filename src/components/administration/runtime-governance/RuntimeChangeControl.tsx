const changeRequests = [
  {
    change: "Feature Flag Update",
    owner: "Runtime Operations",
    status: "Approved",
  },
  {
    change: "Tenant Licensing Revision",
    owner: "Entitlements",
    status: "Pending",
  },
  {
    change: "Policy Engine Upgrade",
    owner: "Platform Governance",
    status: "Scheduled",
  },
  {
    change: "Partner Branding Update",
    owner: "White-Label Services",
    status: "Rejected",
  },
];

export default function RuntimeChangeControl() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">
          Runtime Change Control
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Governance and approval visibility across runtime modifications and
          platform changes.
        </p>
      </div>

      <div className="space-y-4">
        {changeRequests.map((request) => (
          <div
            key={request.change}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-white">
                  {request.change}
                </div>

                <div className="mt-1 text-sm text-slate-400">
                  Owner: {request.owner}
                </div>
              </div>

              <div
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  request.status === "Approved"
                    ? "bg-emerald-500/20 text-emerald-400"
                    : request.status === "Pending"
                      ? "bg-amber-500/20 text-amber-400"
                      : request.status === "Scheduled"
                        ? "bg-cyan-500/20 text-cyan-400"
                        : "bg-rose-500/20 text-rose-400"
                }`}
              >
                {request.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}