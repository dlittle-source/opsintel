"use client";

import { useEffect, useState } from "react";

type ActivityType =
  | "deployment"
  | "incident"
  | "rollback"
  | "health"
  | "scaling";

type Activity = {
  id: number;
  type: ActivityType;
  title: string;
  description: string;
  timestamp: string;
};

const events: Omit<Activity, "id" | "timestamp">[] = [
  {
    type: "deployment",
    title: "Frontend Deployment Completed",
    description:
      "Next.js production container deployed successfully to AWS infrastructure.",
  },
  {
    type: "incident",
    title: "Latency Spike Detected",
    description:
      "Authentication API exceeded latency threshold across production nodes.",
  },
  {
    type: "rollback",
    title: "Rollback Executed",
    description:
      "System automatically restored previous stable deployment version.",
  },
  {
    type: "health",
    title: "Health Validation Passed",
    description:
      "Infrastructure health checks completed successfully across all services.",
  },
  {
    type: "scaling",
    title: "Infrastructure Auto Scaling",
    description:
      "Kubernetes worker nodes increased to support elevated traffic volume.",
  },
  {
    type: "deployment",
    title: "Nginx Configuration Updated",
    description:
      "Reverse proxy configuration synchronized across edge infrastructure.",
  },
];

export default function DeploymentActivityFeed() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const createEvent = () => {
      const randomEvent =
        events[Math.floor(Math.random() * events.length)];

      const newEvent: Activity = {
        ...randomEvent,
        id: Date.now(),
        timestamp: new Date().toLocaleTimeString(),
      };

      setActivities((prev) => [newEvent, ...prev.slice(0, 8)]);
    };

    createEvent();

    const interval = setInterval(createEvent, 5000);

    return () => clearInterval(interval);
  }, []);

  const badgeStyles = {
    deployment:
      "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",

    incident:
      "border-red-400/20 bg-red-400/10 text-red-300",

    rollback:
      "border-amber-400/20 bg-amber-400/10 text-amber-300",

    health:
      "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",

    scaling:
      "border-violet-400/20 bg-violet-400/10 text-violet-300",
  };

  return (
    <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-2xl">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Deployment Activity Feed
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Real-time deployment orchestration and operational event stream.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          Live Operations
        </div>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 transition-all duration-300 hover:border-slate-700"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-3">
                  <span
                    className={`rounded-full border px-2 py-1 text-[10px] uppercase tracking-wider ${badgeStyles[activity.type]}`}
                  >
                    {activity.type}
                  </span>

                  <h3 className="text-sm font-medium text-white">
                    {activity.title}
                  </h3>
                </div>

                <p className="text-sm leading-relaxed text-slate-400">
                  {activity.description}
                </p>
              </div>

              <div className="text-xs text-slate-500">
                {activity.timestamp}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}