"use client";

import { ReactNode } from "react";

import ExecutiveWorkspaceSidebar from "@/components/navigation/ExecutiveWorkspaceSidebar";

type Props = {
  children: ReactNode;
};

export default function ExecutiveWorkspaceLayout({
  children,
}: Props) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex">
        <ExecutiveWorkspaceSidebar />

        <main className="flex-1 overflow-x-hidden">
          <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}