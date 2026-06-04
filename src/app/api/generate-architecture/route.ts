import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";
import { buildArchitecturePrompt } from "@/lib/architecturePrompt";

type ArchitectureNode = {
  id: string;
  label: string;
  type: string;
  provider?: string;
  description?: string;
};

type ArchitectureConnection = {
  id: string;
  source: string;
  target: string;
  label: string;
};

function normalizeType(type: string) {
  return type?.toLowerCase().trim() || "";
}

function findNodeByType(nodes: ArchitectureNode[], types: string[]) {
  return nodes.find((node) => types.includes(normalizeType(node.type)));
}

function buildFallbackConnections(
  nodes: ArchitectureNode[]
): ArchitectureConnection[] {
  const connections: ArchitectureConnection[] = [];

  const frontend = findNodeByType(nodes, ["frontend", "client", "cdn"]);
  const backend = findNodeByType(nodes, ["backend", "api", "server"]);
  const database = findNodeByType(nodes, ["database", "rds", "postgres"]);
  const cache = findNodeByType(nodes, ["cache", "redis"]);
  const container = findNodeByType(nodes, ["container", "docker"]);
  const cicd = findNodeByType(nodes, ["cicd", "pipeline", "deployment"]);
  const cloud = findNodeByType(nodes, ["cloud", "ec2", "platform"]);
  const monitoring = findNodeByType(nodes, [
    "monitoring",
    "observability",
    "logging",
  ]);
  const security = findNodeByType(nodes, ["security", "iam", "firewall"]);

  function addConnection(
    source: ArchitectureNode | undefined,
    target: ArchitectureNode | undefined,
    label: string
  ) {
    if (!source || !target || source.id === target.id) return;

    connections.push({
      id: `${source.id}-${target.id}`,
      source: source.id,
      target: target.id,
      label,
    });
  }

  addConnection(frontend, backend, "HTTP/API traffic");
  addConnection(backend, database, "Read/write queries");
  addConnection(backend, cache, "Cached data access");
  addConnection(cicd, container, "Build and package");
  addConnection(container, cloud, "Deploy container");
  addConnection(cloud, monitoring, "Metrics and logs");
  addConnection(security, cloud, "Network access control");
  addConnection(monitoring, backend, "Health telemetry");

  if (connections.length === 0 && nodes.length > 1) {
    for (let i = 0; i < nodes.length - 1; i++) {
      connections.push({
        id: `${nodes[i].id}-${nodes[i + 1].id}`,
        source: nodes[i].id,
        target: nodes[i + 1].id,
        label: "Infrastructure dependency",
      });
    }
  }

  return connections;
}

function sanitizeArchitecture(architecture: any) {
  const nodes: ArchitectureNode[] = Array.isArray(architecture?.nodes)
    ? architecture.nodes
    : [];

  const validNodeIds = new Set(nodes.map((node) => node.id));

  const validConnections: ArchitectureConnection[] = Array.isArray(
    architecture?.connections
  )
    ? architecture.connections.filter(
        (connection: ArchitectureConnection) =>
          validNodeIds.has(connection.source) &&
          validNodeIds.has(connection.target)
      )
    : [];

  return {
    ...architecture,
    nodes,
    connections:
      validConnections.length > 0
        ? validConnections
        : buildFallbackConnections(nodes),
  };
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const prompt = body.prompt;

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        { error: "Prompt is required." },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "user",
          content: buildArchitecturePrompt(prompt),
        },
      ],
      temperature: 0.3,
    });

    const content = completion.choices[0]?.message?.content;

    if (!content) {
      return NextResponse.json(
        { error: "No architecture generated." },
        { status: 500 }
      );
    }

    const architecture = sanitizeArchitecture(JSON.parse(content));

    return NextResponse.json({ architecture });
  } catch (error) {
    console.error("Architecture generation error:", error);

    return NextResponse.json(
      { error: "Failed to generate architecture." },
      { status: 500 }
    );
  }
}