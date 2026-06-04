"use client";

import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabaseClient";

export default function AuthPanel() {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
    }

    loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleSignUp = async () => {
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Account created successfully. You can now sign in.");
    }

    setLoading(false);
  };

  const handleSignIn = async () => {
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Successfully signed in.");
    }

    setLoading(false);
  };

  const handleSignOut = async () => {
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signOut();

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Signed out successfully.");
      setEmail("");
      setPassword("");
    }

    setLoading(false);
  };

  if (user) {
    return (
      <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5 shadow-2xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Authenticated Session Active
            </div>

            <h2 className="text-lg font-semibold text-white">
              Welcome back
            </h2>

            <p className="mt-1 text-sm text-slate-300">
              Signed in as{" "}
              <span className="font-medium text-emerald-300">
                {user.email}
              </span>
            </p>
          </div>

          <button
            onClick={handleSignOut}
            disabled={loading}
            className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm font-medium text-white transition-all hover:border-slate-500 disabled:opacity-50"
          >
            {loading ? "Signing out..." : "Sign Out"}
          </button>
        </div>

        {message && (
          <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/70 p-3 text-sm text-slate-300">
            {message}
          </div>
        )}
      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 shadow-2xl">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">
          Authentication Portal
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Sign in to save generated cloud architectures and reports.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto_auto]">
        <div>
          <label className="mb-2 block text-sm text-slate-400">
            Email
          </label>

          <input
            type="email"
            placeholder="engineer@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition-all focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-400">
            Password
          </label>

          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition-all focus:border-cyan-400"
          />
        </div>

        <div className="flex items-end">
          <button
            onClick={handleSignUp}
            disabled={loading}
            className="w-full rounded-xl bg-cyan-500 px-4 py-3 text-sm font-medium text-black transition-all hover:bg-cyan-400 disabled:opacity-50"
          >
            {loading ? "Working..." : "Sign Up"}
          </button>
        </div>

        <div className="flex items-end">
          <button
            onClick={handleSignIn}
            disabled={loading}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-medium text-white transition-all hover:border-slate-500 disabled:opacity-50"
          >
            {loading ? "Working..." : "Sign In"}
          </button>
        </div>
      </div>

      {message && (
        <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/70 p-3 text-sm text-slate-300">
          {message}
        </div>
      )}
    </section>
  );
}