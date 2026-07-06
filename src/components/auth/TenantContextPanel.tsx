import { getTenantContext } from "@/lib/auth/tenantContext";

export default async function TenantContextPanel() {
  const context = await getTenantContext();

  return (
    <section className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold">
        Tenant Context
      </h2>

      <div className="mt-4 space-y-2 text-sm">
        <div>
          <span className="font-medium">User ID:</span>{" "}
          {context.userId ?? "Anonymous"}
        </div>

        <div>
          <span className="font-medium">Tenant ID:</span>{" "}
          {context.tenantId}
        </div>

        <div>
          <span className="font-medium">Organization ID:</span>{" "}
          {context.organizationId ?? "-"}
        </div>

        <div>
          <span className="font-medium">Organization Name:</span>{" "}
          {context.organizationName ?? "-"}
        </div>

        <div>
          <span className="font-medium">Role:</span>{" "}
          {context.role}
        </div>

        <div>
          <span className="font-medium">Auth Provider:</span>{" "}
          {context.authProvider}
        </div>
      </div>
    </section>
  );
}