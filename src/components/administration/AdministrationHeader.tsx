import AdministrationRuntimeOverview from "@/components/administration/AdministrationRuntimeOverview";
import RuntimeHealthBanner from "@/components/administration/RuntimeHealthBanner";

export default function AdministrationHeader() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Enterprise Administration
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage tenant configuration, branding, licensing,
          runtime capabilities, and enterprise platform settings.
        </p>
      </div>

      <RuntimeHealthBanner />

      <AdministrationRuntimeOverview />
    </div>
  );
}