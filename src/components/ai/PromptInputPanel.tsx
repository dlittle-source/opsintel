"use client";

import { useState } from "react";

type Props = {
  onGenerate: (prompt: string) => Promise<void>;
  isGenerating: boolean;
};

export default function PromptInputPanel({ onGenerate, isGenerating }: Props) {
  const [prompt, setPrompt] = useState("");

  async function handleGenerate() {
    if (!prompt.trim()) return;
    await onGenerate(prompt);
  }

  return (
    <aside className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl">
      <h2 className="text-lg font-semibold">Describe Your Application</h2>

      <p className="mt-2 text-sm text-slate-400">
        Tell the AI what you want to build. Include frontend, backend, database,
        deployment, cloud, and CI/CD requirements.
      </p>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="mt-5 h-48 w-full resize-none rounded-xl border border-slate-700 bg-slate-950 p-4 text-sm text-slate-100 outline-none focus:border-cyan-400"
        placeholder="Example: Build a Next.js app with a Node.js API, PostgreSQL database, Docker deployment, GitHub Actions CI/CD, and AWS EC2 hosting."
      />

      <button
        onClick={handleGenerate}
        disabled={isGenerating}
        className="mt-4 w-full rounded-xl bg-cyan-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isGenerating ? "Generating Architecture..." : "Generate Architecture"}
      </button>

      <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-4">
        <p className="text-sm font-medium text-slate-300">AI Engine Status</p>
        <p className="mt-1 text-xs text-slate-500">
          {isGenerating
            ? "Building architecture JSON and infrastructure topology..."
            : "Ready to generate production architecture."}
        </p>
      </div>
    </aside>
  );
}