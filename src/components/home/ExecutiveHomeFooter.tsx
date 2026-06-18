import { Globe, ShieldCheck, FileText, LifeBuoy } from "lucide-react";

import { getTenantBranding } from "@/lib/tenantBrandingEngine";

export default function ExecutiveHomeFooter() {
  const branding = getTenantBranding();

  return (
    <footer className="border-t border-white/10 py-6">
      <div className="flex flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex flex-col">
            <span className="font-medium text-slate-400">
              © 2026 {branding.companyName}
            </span>

            <span className="text-xs text-slate-500">
              AI-Powered Executive Infrastructure Intelligence Platform
            </span>
          </div>

          <div className="hidden h-4 w-px bg-white/10 md:block" />

          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span>Enterprise Edition</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 md:ml-16">
          <button className="flex items-center gap-2 transition-colors hover:text-cyan-300">
            <ShieldCheck className="h-4 w-4" />
            Privacy
          </button>

          <button className="flex items-center gap-2 transition-colors hover:text-cyan-300">
            <FileText className="h-4 w-4" />
            Terms
          </button>

          <button className="flex items-center gap-2 transition-colors hover:text-cyan-300">
            <LifeBuoy className="h-4 w-4" />
            Support
          </button>
        </div>
      </div>
    </footer>
  );
}