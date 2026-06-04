"use client";

import { useMemo, useState } from "react";
import {
  compareArchitectures,
  SnapshotDiffResult,
} from "@/lib/snapshotDiffEngine";
import { GeneratedArchitecture } from "@/types/architecture";

type SnapshotStatus =
  | "production"
  | "stable"
  | "rollback"
  | "experimental"
  | "recovery"
  | "review";

type ArchitectureSnapshot = {
  id: string;
  label: string;
  status: SnapshotStatus;
  architecture: GeneratedArchitecture;
  created_at: string;
};

type Props = {
  snapshots: ArchitectureSnapshot[];
};

function getRiskClass(riskLevel: SnapshotDiffResult["riskLevel"]) {
  if (riskLevel === "high") {
    return "border-red-400/30 bg-red-500/10 text-red-300";
  }

  if (riskLevel === "medium") {
    return "border-yellow-400/30 bg-yellow-500/10 text-yellow-300";
  }

  return "border-emerald-400/30 bg-emerald-500/10 text-emerald-300";
}

function getDriftClass(warning: string) {
  if (warning.toLowerCase().includes("warning")) {
    return "border-red-400/20 bg-red-500/10 text-red-300";
  }

  return "border-emerald-400/20 bg-emerald-500/10 text-emerald-300";
}

function formatDelta(value: number) {
  return value > 0 ? `+${value}` : value;
}

export default function SnapshotComparePanel({ snapshots }: Props) {
  const [baseSnapshotId, setBaseSnapshotId] = useState("");
  const [targetSnapshotId, setTargetSnapshotId] = useState("");

  const baseSnapshot = snapshots.find(
    (snapshot) => snapshot.id === baseSnapshotId
  );

  const targetSnapshot = snapshots.find(
    (snapshot) => snapshot.id === targetSnapshotId
  );

  const isSameSnapshot =
    baseSnapshotId && targetSnapshotId && baseSnapshotId === targetSnapshotId;

  const diff = useMemo(() => {
    if (!baseSnapshot || !targetSnapshot || isSameSnapshot) return null;

    return compareArchitectures(
      targetSnapshot.architecture,
      baseSnapshot.architecture
    );
  }, [baseSnapshot, targetSnapshot, isSameSnapshot]);

  return (
    <section className="mb-6 rounded-2xl border border-cyan-500/20 bg-slate-900/70 p-5 shadow-2xl">
      <div className="mb-5">
        <div className="mb-2 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
          Snapshot Compare Intelligence
        </div>

        <h2 className="text-lg font-semibold text-white">
          Infrastructure Diff Engine
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Compare two architecture snapshots to identify service changes,
          topology movement, operational impact, deployment risk, and
          infrastructure drift.
        </p>
      </div>

      {snapshots.length < 2 ? (
        <div className="rounded-xl border border-dashed border-slate-800 bg-slate-950/70 p-5 text-sm text-slate-400">
          Create at least two snapshots to unlock infrastructure comparison.
        </div>
      ) : (
        <>
          <div className="grid gap-4 lg:grid-cols-2">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Base Snapshot
              </label>

              <select
                value={baseSnapshotId}
                onChange={(event) => setBaseSnapshotId(event.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
              >
                <option value="">Select baseline snapshot</option>

                {snapshots.map((snapshot) => (
                  <option key={snapshot.id} value={snapshot.id}>
                    {snapshot.label} — {snapshot.status}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Target Snapshot
              </label>

              <select
                value={targetSnapshotId}
                onChange={(event) => setTargetSnapshotId(event.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
              >
                <option value="">Select comparison snapshot</option>

                {snapshots.map((snapshot) => (
                  <option key={snapshot.id} value={snapshot.id}>
                    {snapshot.label} — {snapshot.status}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {isSameSnapshot && (
            <div className="mt-5 rounded-xl border border-yellow-400/20 bg-yellow-500/10 p-4 text-sm text-yellow-300">
              Select two different snapshots to run a meaningful infrastructure
              comparison.
            </div>
          )}

          {diff && (
            <div className="mt-5 space-y-4">
              <div className="grid gap-4 md:grid-cols-4">
                <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-xs text-slate-500">Node Delta</p>
                  <p className="mt-2 text-2xl font-bold text-white">
                    {formatDelta(diff.nodeDelta)}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-xs text-slate-500">Connection Delta</p>
                  <p className="mt-2 text-2xl font-bold text-white">
                    {formatDelta(diff.connectionDelta)}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-xs text-slate-500">Readiness Delta</p>
                  <p className="mt-2 text-2xl font-bold text-white">
                    {formatDelta(diff.productionReadinessDelta)}
                  </p>
                </div>

                <div
                  className={`rounded-xl border p-4 ${getRiskClass(
                    diff.riskLevel
                  )}`}
                >
                  <p className="text-xs opacity-80">Operational Risk</p>
                  <p className="mt-2 text-2xl font-bold uppercase">
                    {diff.riskLevel}
                  </p>
                </div>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                <div className="rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-4">
                  <h3 className="text-sm font-semibold text-emerald-300">
                    Added Services
                  </h3>

                  {diff.addedServices.length === 0 ? (
                    <p className="mt-3 text-sm text-slate-400">
                      No new services introduced.
                    </p>
                  ) : (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {diff.addedServices.map((service) => (
                        <span
                          key={service}
                          className="rounded-full border border-emerald-400/20 bg-slate-950 px-3 py-1 text-xs text-emerald-300"
                        >
                          + {service}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="rounded-xl border border-red-400/20 bg-red-500/10 p-4">
                  <h3 className="text-sm font-semibold text-red-300">
                    Removed Services
                  </h3>

                  {diff.removedServices.length === 0 ? (
                    <p className="mt-3 text-sm text-slate-400">
                      No services removed.
                    </p>
                  ) : (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {diff.removedServices.map((service) => (
                        <span
                          key={service}
                          className="rounded-full border border-red-400/20 bg-slate-950 px-3 py-1 text-xs text-red-300"
                        >
                          - {service}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                <h3 className="text-sm font-semibold text-white">
                  AI Operational Change Summary
                </h3>

                <div className="mt-3 flex flex-wrap gap-2">
                  {diff.summary.map((item, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-5 rounded-xl border border-cyan-400/20 bg-cyan-500/10 p-4">
                  <h3 className="text-sm font-semibold text-cyan-300">
                    AI Infrastructure Impact Analysis
                  </h3>

                  <div className="mt-3 space-y-2">
                    {diff.aiInsights.map((insight, index) => (
                      <div
                        key={index}
                        className="rounded-xl border border-cyan-400/10 bg-slate-950/70 p-3 text-sm text-slate-300"
                      >
                        {insight}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 rounded-xl border border-red-400/20 bg-red-500/10 p-4">
                  <h3 className="text-sm font-semibold text-red-300">
                    Architecture Drift Detection
                  </h3>

                  <div className="mt-3 space-y-2">
                    {diff.driftWarnings.map((warning, index) => (
                      <div
                        key={index}
                        className={`rounded-xl border p-3 text-sm ${getDriftClass(
                          warning
                        )}`}
                      >
                        {warning}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
}