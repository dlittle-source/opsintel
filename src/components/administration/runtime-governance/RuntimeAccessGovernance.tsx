const accessReviews = [
  {
    role: "Platform Administrator",
    tenants: "12 tenants",
    status: "Reviewed",
  },
  {
    role: "Runtime Operator",
    tenants: "28 tenants",
    status: "Pending Review",
  },
  {
    role: "Billing Administrator",
    tenants: "8 tenants",
    status: "Reviewed",
  },
  {
    role: "White-Label Partner Admin",
    tenants: "5 partners",
    status: "Escalated",
  },
];

export default function RuntimeAccessGovernance() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">
          Runtime Access Governance
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Role-based runtime access review across platform administrators,
          operators, billing users, and white-label partner administrators.
        </p>
      </div>

      <div className="space-y-4">
        {accessReviews.map((review) => (
          <div
            key={review.role}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-white">{review.role}</div>

                <div className="mt-1 text-sm text-slate-400">
                  Scope: {review.tenants}
                </div>
              </div>

              <div
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  review.status === "Reviewed"
                    ? "bg-emerald-500/20 text-emerald-400"
                    : review.status === "Pending Review"
                      ? "bg-amber-500/20 text-amber-400"
                      : "bg-rose-500/20 text-rose-400"
                }`}
              >
                {review.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}