import { currentUser } from "@clerk/nextjs/server";

export default async function AuthSessionPanel() {
  const user = await currentUser();

  return (
    <section className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold">
        Authentication Session
      </h2>

      <div className="mt-4 space-y-2 text-sm">
        <div>
          <span className="font-medium">User ID:</span>{" "}
          {user?.id ?? "Anonymous"}
        </div>

        <div>
          <span className="font-medium">Email:</span>{" "}
          {user?.primaryEmailAddress?.emailAddress ?? "Not signed in"}
        </div>

        <div>
          <span className="font-medium">First Name:</span>{" "}
          {user?.firstName ?? "-"}
        </div>

        <div>
          <span className="font-medium">Last Name:</span>{" "}
          {user?.lastName ?? "-"}
        </div>
      </div>
    </section>
  );
}