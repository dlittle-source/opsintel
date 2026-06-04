"use client";

import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  MessageSquare,
  Radar,
  Send,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

const suggestedPrompts = [
  "Summarize current deployment risks",
  "Analyze cloud cost optimization opportunities",
  "Explain the highest operational risk",
  "Generate executive infrastructure summary",
  "Forecast infrastructure scaling concerns",
];

const aiResponses = [
  {
    title: "Deployment Risk Advisory",
    response:
      "AI models detected elevated deployment volatility associated with authentication service latency during recent rollout activity. Recommend progressive canary deployment enforcement and autoscaling threshold expansion before the next release cycle.",
  },
  {
    title: "Infrastructure Cost Insight",
    response:
      "Cross-cloud analysis identified over-provisioned compute workloads within non-peak operational windows. Estimated optimization opportunity currently exceeds $18K/month.",
  },
];

const intelligenceDomains = [
  {
    icon: Cpu,
    label: "Infrastructure Intelligence",
  },
  {
    icon: ShieldCheck,
    label: "Security Governance",
  },
  {
    icon: TrendingUp,
    label: "Operational Forecasting",
  },
  {
    icon: Radar,
    label: "Deployment Advisory",
  },
];

export default function ExecutiveAICopilotLayer() {
  return (
    <section className="relative mt-6 overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-6 shadow-[0_0_120px_rgba(56,189,248,0.10)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_35%)]" />

      {/* Header */}
      <div className="relative z-10 flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-start gap-4">
          <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-4 shadow-[0_0_40px_rgba(56,189,248,0.18)]">
            <BrainCircuit className="h-7 w-7 text-cyan-300" />
          </div>

          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-cyan-200">
              <Sparkles className="h-3.5 w-3.5" />
              Executive AI Copilot
            </div>

            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Executive AI Copilot Layer
            </h2>

            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400">
              Conversational infrastructure intelligence, AI operational
              guidance, executive deployment advisory, and autonomous
              enterprise infrastructure assistance.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3">
          <CheckCircle2 className="h-5 w-5 text-emerald-300" />

          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-emerald-200/70">
              Copilot Status
            </div>

            <div className="text-sm font-medium text-emerald-100">
              AI executive assistant operating normally
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="relative z-10 mt-8 grid gap-6 xl:grid-cols-[1.35fr_0.9fr]">
        {/* Left */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Executive AI Conversation
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Conversational infrastructure intelligence and operational advisory.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3">
              <MessageSquare className="h-5 w-5 text-cyan-300" />
            </div>
          </div>

          {/* AI Responses */}
          <div className="mt-6 space-y-5">
            {aiResponses.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-slate-950/50 p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3">
                    <Zap className="h-5 w-5 text-cyan-300" />
                  </div>

                  <div className="flex-1">
                    <div className="text-lg font-medium text-white">
                      {item.title}
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {item.response}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="mt-6 rounded-3xl border border-cyan-400/20 bg-slate-950/60 p-4">
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Ask the Executive AI Copilot about infrastructure operations..."
                className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
              />

              <button className="inline-flex items-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:bg-cyan-400/20">
                Send
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="space-y-6">
          {/* Suggested Prompts */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Suggested Executive Prompts
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  AI-generated operational questions.
                </p>
              </div>

              <Sparkles className="h-5 w-5 text-cyan-300" />
            </div>

            <div className="mt-6 space-y-3">
              {suggestedPrompts.map((prompt) => (
                <button
                  key={prompt}
                  className="group flex w-full items-center justify-between rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-left transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5"
                >
                  <span className="text-sm text-slate-300">
                    {prompt}
                  </span>

                  <ArrowRight className="h-4 w-4 text-cyan-300 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              ))}
            </div>
          </div>

          {/* Intelligence Domains */}
          <div className="rounded-3xl border border-purple-400/20 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-blue-500/10 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-3">
                <BrainCircuit className="h-5 w-5 text-purple-300" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  AI Intelligence Domains
                </h3>

                <p className="mt-1 text-sm text-slate-300">
                  Active executive advisory systems
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {intelligenceDomains.map((domain) => (
                <div
                  key={domain.label}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <domain.icon className="h-4 w-4 text-cyan-300" />

                    <span className="text-sm text-slate-300">
                      {domain.label}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-emerald-300">
                    <CheckCircle2 className="h-4 w-4" />

                    <span className="text-xs font-medium">
                      Active
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/40 p-5">
              <p className="text-sm leading-relaxed text-slate-300">
                Executive AI Copilot models are actively synthesizing deployment
                intelligence, operational telemetry, governance posture,
                infrastructure optimization signals, and cloud risk analysis
                into conversational executive guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}