"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Props = {
  architecture: any;
  onLoadProject: (architecture: any) => void;
};

type SavedProject = {
  id: string;
  name: string;
  prompt: string;
  architecture: any;
  created_at: string;
};

export default function SavedProjectsPanel({
  architecture,
  onLoadProject,
}: Props) {
  const [projects, setProjects] = useState<SavedProject[]>([]);
  const [projectName, setProjectName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [editingProjectId, setEditingProjectId] = useState<string | null>(
    null
  );

  const [editingName, setEditingName] = useState("");

  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  async function loadProjects() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data, error } = await supabase
      .from("architecture_projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setMessage(error.message);
      return;
    }

    setProjects(data || []);
  }

  useEffect(() => {
    loadProjects();
  }, []);

  async function handleSaveProject() {
    setLoading(true);
    setMessage("");

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setMessage("You must be signed in.");
      setLoading(false);
      return;
    }

    const { error } = await supabase.from("architecture_projects").insert({
      user_id: user.id,
      name: projectName || "Untitled Architecture Project",
      prompt: architecture?.title || "AI Generated Architecture",
      architecture,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Project saved successfully.");
      setProjectName("");
      loadProjects();
    }

    setLoading(false);
  }

  function handleLoadProject(project: SavedProject) {
    onLoadProject(project);

    setActiveProjectId(project.id);

    setMessage(`Loaded workspace: ${project.name}`);
  }

  async function handleDeleteProject(projectId: string) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this architecture project?"
    );

    if (!confirmDelete) return;

    setLoading(true);
    setMessage("");

    const { error } = await supabase
      .from("architecture_projects")
      .delete()
      .eq("id", projectId);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Project deleted successfully.");

      if (activeProjectId === projectId) {
        setActiveProjectId(null);
      }

      loadProjects();
    }

    setLoading(false);
  }

  function startRenameProject(project: SavedProject) {
    setEditingProjectId(project.id);
    setEditingName(project.name);
  }

  function cancelRenameProject() {
    setEditingProjectId(null);
    setEditingName("");
  }

  async function handleRenameProject(projectId: string) {
    if (!editingName.trim()) {
      setMessage("Project name cannot be empty.");
      return;
    }

    setLoading(true);
    setMessage("");

    const { error } = await supabase
      .from("architecture_projects")
      .update({
        name: editingName,
      })
      .eq("id", projectId);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Workspace renamed successfully.");

      setEditingProjectId(null);
      setEditingName("");

      loadProjects();
    }

    setLoading(false);
  }

  return (
    <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-2xl">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Saved Architecture Projects
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Persist, restore, manage, and evolve AI infrastructure workspaces.
          </p>
        </div>

        <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
          Enterprise Workspace Manager
        </div>
      </div>

      <div className="mb-6 flex flex-col gap-3 md:flex-row">
        <input
          type="text"
          placeholder="Project name..."
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400"
        />

        <button
          onClick={handleSaveProject}
          disabled={loading}
          className="rounded-xl bg-cyan-500 px-5 py-3 text-sm font-medium text-black transition-all hover:bg-cyan-400 disabled:opacity-50"
        >
          {loading ? "Working..." : "Save Project"}
        </button>
      </div>

      {message && (
        <div className="mb-4 rounded-xl border border-slate-800 bg-slate-900/70 p-3 text-sm text-slate-300">
          {message}
        </div>
      )}

      <div className="space-y-3">
        {projects.length === 0 ? (
          <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-400">
            No saved architecture projects yet.
          </div>
        ) : (
          projects.map((project) => {
            const isEditing = editingProjectId === project.id;
            const isActive = activeProjectId === project.id;

            return (
              <div
                key={project.id}
                className={`rounded-xl border p-4 transition-all ${
                  isActive
                    ? "border-cyan-400 bg-cyan-500/5 shadow-lg shadow-cyan-500/10"
                    : "border-slate-800 bg-slate-900/70"
                }`}
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    {isEditing ? (
                      <div className="flex flex-col gap-3">
                        <input
                          type="text"
                          value={editingName}
                          onChange={(e) => setEditingName(e.target.value)}
                          className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-white outline-none focus:border-cyan-400"
                        />

                        <div className="flex gap-2">
                          <button
                            onClick={() =>
                              handleRenameProject(project.id)
                            }
                            disabled={loading}
                            className="rounded-xl bg-cyan-500 px-4 py-2 text-sm font-medium text-black transition-all hover:bg-cyan-400 disabled:opacity-50"
                          >
                            Save Rename
                          </button>

                          <button
                            onClick={cancelRenameProject}
                            className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-white transition-all hover:border-slate-500"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center gap-3">
                          <h3 className="text-sm font-semibold text-white">
                            {project.name}
                          </h3>

                          {isActive && (
                            <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-1 text-[10px] uppercase tracking-wide text-cyan-300">
                              Active Workspace
                            </div>
                          )}
                        </div>

                        <p className="mt-1 text-sm text-slate-400">
                          {project.prompt}
                        </p>

                        <p className="mt-2 text-xs text-slate-500">
                          {new Date(project.created_at).toLocaleString()}
                        </p>
                      </>
                    )}
                  </div>

                  {!isEditing && (
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => handleLoadProject(project)}
                        className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-medium text-white transition-all hover:border-cyan-400"
                      >
                        Load Workspace
                      </button>

                      <button
                        onClick={() => startRenameProject(project)}
                        className="rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-300 transition-all hover:bg-amber-400/20"
                      >
                        Rename
                      </button>

                      <button
                        onClick={() => handleDeleteProject(project.id)}
                        disabled={loading}
                        className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-2 text-sm font-medium text-red-300 transition-all hover:bg-red-400/20 disabled:opacity-50"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}