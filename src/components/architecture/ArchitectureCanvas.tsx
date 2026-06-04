"use client";

import { useEffect, useMemo } from "react";

import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  MarkerType,
  useNodesState,
  useEdgesState,
} from "reactflow";

import "reactflow/dist/style.css";

import { GeneratedArchitecture } from "@/types/architecture";
import InfrastructureNode from "./InfrastructureNode";

type Props = {
  architecture: GeneratedArchitecture;
};

type Position = {
  x: number;
  y: number;
};

type ArchitectureConnection = {
  id: string;
  source: string;
  target: string;
  label?: string;
};

const nodeTypes = {
  infrastructure: InfrastructureNode,
};

function normalizeType(type: string) {
  return type?.toLowerCase().trim() || "unknown";
}

function getLane(type: string) {
  const normalizedType = normalizeType(type);

  if (["frontend", "client", "user", "cdn"].includes(normalizedType)) {
    return "edge";
  }

  if (
    ["backend", "api", "container", "compute", "server", "nginx"].includes(
      normalizedType
    )
  ) {
    return "compute";
  }

  if (["database", "cache", "storage", "rds", "redis"].includes(normalizedType)) {
    return "data";
  }

  if (["security", "iam", "firewall", "sg"].includes(normalizedType)) {
    return "security";
  }

  if (
    ["monitoring", "observability", "logging", "cloudwatch"].includes(
      normalizedType
    )
  ) {
    return "operations";
  }

  if (["cicd", "pipeline", "deployment", "github"].includes(normalizedType)) {
    return "delivery";
  }

  if (
    ["cloud", "network", "vpc", "ec2", "loadbalancer", "load balancer"].includes(
      normalizedType
    )
  ) {
    return "platform";
  }

  return "misc";
}

const laneConfig: Record<string, Position> = {
  edge: { x: 80, y: 120 },
  compute: { x: 430, y: 120 },
  data: { x: 780, y: 120 },
  security: { x: 80, y: 390 },
  platform: { x: 430, y: 390 },
  operations: { x: 780, y: 390 },
  delivery: { x: 80, y: 640 },
  misc: { x: 430, y: 640 },
};

function buildNodes(architecture: GeneratedArchitecture): Node[] {
  const safeNodes = Array.isArray(architecture?.nodes)
    ? architecture.nodes
    : [];

  const laneCounts: Record<string, number> = {};

  return safeNodes.map((node) => {
    const lane = getLane(node.type);
    const laneIndex = laneCounts[lane] || 0;
    const base = laneConfig[lane] || laneConfig.misc;

    laneCounts[lane] = laneIndex + 1;

    return {
      id: node.id,
      position: {
        x: base.x + laneIndex * 35,
        y: base.y + laneIndex * 190,
      },
      data: {
        label: node.label,
        provider: node.provider,
        description: node.description,
        type: node.type,
      },
      type: "infrastructure",
      draggable: true,
    };
  });
}

function buildFallbackConnections(architecture: GeneratedArchitecture) {
  const safeNodes = Array.isArray(architecture?.nodes)
    ? architecture.nodes
    : [];

  const connections: ArchitectureConnection[] = [];

  for (let index = 0; index < safeNodes.length - 1; index++) {
    connections.push({
      id: `fallback-edge-${index}`,
      source: safeNodes[index].id,
      target: safeNodes[index + 1].id,
      label: "Infrastructure flow",
    });
  }

  return connections;
}

function buildEdges(architecture: GeneratedArchitecture): Edge[] {
  const safeNodes = Array.isArray(architecture?.nodes)
    ? architecture.nodes
    : [];

  const validNodeIds = new Set(safeNodes.map((node) => node.id));

  const rawConnections = Array.isArray(architecture?.connections)
    ? architecture.connections
    : [];

  const validConnections = rawConnections.filter((connection) => {
    return (
      connection &&
      typeof connection.source === "string" &&
      typeof connection.target === "string" &&
      validNodeIds.has(connection.source) &&
      validNodeIds.has(connection.target)
    );
  });

  const finalConnections =
    validConnections.length > 0
      ? validConnections
      : buildFallbackConnections(architecture);

  return finalConnections.map((connection, index) => ({
    id: connection.id || `edge-${index}`,
    source: connection.source,
    target: connection.target,
    sourceHandle: "source",
    targetHandle: "target",
    label: connection.label || "Infrastructure flow",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#38bdf8",
    },
    style: {
      strokeWidth: 2,
      stroke: "#38bdf8",
    },
    labelStyle: {
      fill: "#cbd5e1",
      fontSize: 11,
    },
    labelBgStyle: {
      fill: "#020617",
      fillOpacity: 0.85,
    },
  }));
}

function getArchitectureSignature(architecture: GeneratedArchitecture) {
  const nodeIds = Array.isArray(architecture?.nodes)
    ? architecture.nodes.map((node) => node.id).join("-")
    : "no-nodes";

  const connectionIds = Array.isArray(architecture?.connections)
    ? architecture.connections
        .map((connection) => `${connection.source}-${connection.target}`)
        .join("-")
    : "no-connections";

  return `${nodeIds}-${connectionIds}-${architecture?.summary || ""}`;
}

export default function ArchitectureCanvas({ architecture }: Props) {
  const architectureSignature = useMemo(
    () => getArchitectureSignature(architecture),
    [architecture]
  );

  const initialNodes = useMemo(
    () => buildNodes(architecture),
    [architectureSignature, architecture]
  );

  const initialEdges = useMemo(
    () => buildEdges(architecture),
    [architectureSignature, architecture]
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [architectureSignature, initialNodes, initialEdges, setNodes, setEdges]);

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold">Architecture Canvas</h2>

          <p className="text-sm text-slate-400">
            {architecture?.summary ||
              "AI-generated production cloud architecture workspace."}
          </p>
        </div>

        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
          Score: {architecture?.productionReadinessScore ?? 0}/100
        </div>
      </div>

      <div className="mb-4 grid gap-3 text-xs text-slate-400 md:grid-cols-4">
        <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">
          Edge / Frontend
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">
          Compute / Platform
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">
          Data / Operations
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">
          Security / Delivery
        </div>
      </div>

      <div className="h-[900px] overflow-hidden rounded-xl border border-slate-800 bg-[#020617]">
        <ReactFlow
          key={architectureSignature}
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodesDraggable
          nodesConnectable={false}
          elementsSelectable
          panOnDrag
          zoomOnScroll
          fitView
          fitViewOptions={{
            padding: 0.2,
          }}
        >
          <Background color="#1e293b" gap={20} />

          <Controls />

          <MiniMap nodeColor="#0f172a" maskColor="rgba(15,23,42,0.6)" />
        </ReactFlow>
      </div>
    </section>
  );
}