const escalations = [
  {
    event: "Critical Runtime Failure",
    destination: "Incident Command Center",
    priority: "P1",
  },
  {
    event: "Policy Violation",
    destination: "Governance Team",
    priority: "P2",
  },
  {
    event: "Tenant Provisioning Delay",
    destination: "Customer Success",
    priority: "P3",
  },
  {
    event: "Automation Execution Failure",
    destination: "Platform Operations",
    priority: "P1",
  },
];

export default function RuntimeEscalationCenter() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white">
          Runtime Escalation Center
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          Automated escalation routing ensures critical runtime events reach
          the appropriate operational teams with priority awareness.
        </p>
      </div>

      <div className="space-y-4">
        {escalations.map((item) => (
          <div
            key={item.event}
            className="rounded-xl border border-slate-800 bg-slate-900/70 p-4"
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-medium text-cyan-300">
                  {item.event}
                </h4>

                <p className="mt-1 text-sm text-slate-400">
                  Destination: {item.destination}
                </p>
              </div>

              <div className="rounded-lg border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-sm text-rose-300">
                {item.priority}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}