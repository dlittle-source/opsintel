"use client";

import {
  AlertTriangle,
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  Gauge,
  Gavel,
  LockKeyhole,
  Radar,
  Scale,
  ShieldCheck,
  ShieldAlert,
  Sparkles,
} from "lucide-react";

const complianceSignals = [
  {
    label: "Compliance Readiness",
    value: "92%",
    status: "Enterprise Ready",
  },
  {
    label: "Audit Confidence",
    value: "88%",
    status: "Improving",
  },
  {
    label: "Policy Alignment",
    value: "94%",
    status: "Strong",
  },
];

const complianceFindings = [
  {
    title: "Access Control Governance",
    severity: "Moderate Risk",
    domain: "Identity & Permissions",
    recommendation:
      "Enforce least-privilege access reviews and introduce automated permission drift detection across production resources.",
  },
  {
    title: "Infrastructure Audit Trail Coverage",
    severity: "Low Risk",
    domain: "Auditability",
    recommendation:
      "Expand deployment event logging and retain infrastructure change history for executive compliance reporting.",
  },
  {
    title: "Runtime Security Policy Enforcement",
    severity: "Elevated",
    domain: "Runtime Protection",
    recommendation:
      "Apply container runtime policies, image scanning, and deployment approval controls before production promotion.",
  },
];

const governanceAreas = [
  { icon: LockKeyhole, label: "Access Control Review" },
  { icon: FileSearch, label: "Audit Trail Visibility" },
  { icon: ShieldCheck, label: "Security Policy Alignment" },
  { icon: ClipboardCheck, label: "Change Management Controls" },
  { icon: Gavel, label: "Governance Reporting" },
];

export default function ExecutiveComplianceIntelligencePanel() {
  return (
    <section className="relative mt-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-6 shadow-[0_0_80px_rgba(0,0,0,0.45)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.10),transparent_30%)]" />

      <div className="relative z-10 flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-start gap-4">
          <div className="rounded-3xl border border-sky-400/20 bg-sky-400/10 p-4">
            <Scale className="h-7 w-7 text-sky-300" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Executive Compliance Intelligence Panel
            </h2>

            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400">
              AI-powered compliance posture analysis, governance readiness,
              audit-risk visibility, security policy alignment, and executive
              compliance advisory.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3">
          <BadgeCheck className="h-5 w-5 text-emerald-300" />

          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-emerald-200/70">
              Governance Status
            </div>

            <div className="text-sm font-medium text-emerald-100">
              Enterprise compliance posture operating within strong thresholds
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-8 grid gap-4 md:grid-cols-3">
        {complianceSignals.map((signal) => (
          <div
            key={signal.label}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-sky-400/30 hover:bg-sky-400/5"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm text-slate-400">{signal.label}</div>

                <div className="mt-4 text-4xl font-semibold text-white">
                  {signal.value}
                </div>
              </div>

              <div className="rounded-xl border border-sky-400/20 bg-sky-400/10 p-2">
                <Radar className="h-5 w-5 text-sky-300" />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-sky-300">
              <Sparkles className="h-4 w-4" />
              {signal.status}
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-8 grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">
                AI Compliance Findings
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Executive-level governance findings across access, auditability,
                runtime security, and policy enforcement.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-400/20 bg-sky-400/10 p-3">
              <BrainCircuit className="h-5 w-5 text-sky-300" />
            </div>
          </div>

          <div className="mt-6 space-y-5">
            {complianceFindings.map((finding) => (
              <div
                key={finding.title}
                className="rounded-3xl border border-white/10 bg-slate-950/50 p-5 transition-all duration-300 hover:border-sky-400/20"
              >
                <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl border border-sky-500/20 bg-sky-500/10 p-3">
                        <ShieldAlert className="h-5 w-5 text-sky-300" />
                      </div>

                      <div>
                        <div className="text-lg font-medium text-white">
                          {finding.title}
                        </div>

                        <div className="mt-1 text-sm text-slate-400">
                          Domain: {finding.domain}
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
                        AI Governance Recommendation
                      </div>

                      <p className="mt-2 text-sm leading-relaxed text-slate-300">
                        {finding.recommendation}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-orange-500/20 bg-orange-500/10 px-4 py-3 text-sm font-medium text-orange-300">
                    {finding.severity}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Governance Domains
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Active compliance intelligence coverage.
                </p>
              </div>

              <Gauge className="h-5 w-5 text-sky-300" />
            </div>

            <div className="mt-6 space-y-4">
              {governanceAreas.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="h-4 w-4 text-sky-300" />

                    <span className="text-sm text-slate-300">
                      {item.label}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-emerald-300">
                    <CheckCircle2 className="h-4 w-4" />
                    <span className="text-xs font-medium">Active</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-sky-400/20 bg-gradient-to-br from-sky-500/10 via-emerald-500/10 to-blue-500/10 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-sky-400/20 bg-sky-400/10 p-3">
                <ShieldCheck className="h-5 w-5 text-sky-300" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Executive Compliance Narrative
                </h3>

                <p className="mt-1 text-sm text-slate-300">
                  AI-generated governance advisory
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/40 p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-1 h-5 w-5 text-orange-300" />

                <p className="text-sm leading-relaxed text-slate-300">
                  AI compliance models indicate a strong enterprise governance
                  posture with moderate improvement opportunities across access
                  control review, audit trail expansion, and runtime security
                  policy enforcement. Recommended actions will improve audit
                  confidence, enterprise buyer trust, and white-label readiness.
                </p>
              </div>

              <button className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-300 transition-all duration-300 hover:bg-sky-400/20">
                Open Compliance Report
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}