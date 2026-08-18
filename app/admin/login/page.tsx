import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { loginAction } from "../actions";
import { adminPasswordConfigured, isAdmin } from "@/lib/admin-auth";

export const metadata: Metadata = {
  title: "Admin login",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  if (await isAdmin()) redirect("/admin");
  const configured = adminPasswordConfigured();

  return (
    <section className="px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-md">
        <p className="text-sm uppercase tracking-wider text-body">Admin</p>
        <h1 className="font-display mt-3 text-[2.5rem] font-semibold tracking-tighter text-ink">
          Sign in to see responses
        </h1>
        {!configured ? (
          <p className="mt-6 text-body">
            Set <code className="rounded bg-wash px-1.5 py-0.5 text-sm">ADMIN_PASSWORD</code> in the
            environment, then restart the app.
          </p>
        ) : (
          <form action={loginAction} className="mt-10 flex flex-col gap-5">
            {error === "1" ? <p className="text-sm text-brand">That password is not right.</p> : null}
            <label className="flex flex-col gap-2 text-sm text-body">
              Password
              <input
                required
                type="password"
                name="password"
                autoComplete="current-password"
                className="rounded-full border border-line bg-white px-4 py-3 text-ink outline-none focus:border-ink"
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-max items-center rounded-full bg-brand px-6 py-3 text-sm text-white hover:bg-brand-hover"
            >
              Sign in
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
