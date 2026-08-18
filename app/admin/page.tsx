import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { InquiryList } from "./inquiry-list";
import { logoutAction } from "./actions";
import { isAdmin } from "@/lib/admin-auth";
import { listInquiries } from "@/lib/inquiries";

export const metadata: Metadata = {
  title: "Responses",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!(await isAdmin())) redirect("/admin/login");

  const items = await listInquiries();
  const unread = items.filter((item) => !item.read).length;

  return (
    <section className="px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[82rem]">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-wider text-body">Admin</p>
            <h1 className="font-display mt-3 text-[2.5rem] font-semibold tracking-tighter text-ink md:text-[4rem]">
              Responses
            </h1>
            <p className="mt-3 text-body">
              {items.length} {items.length === 1 ? "message" : "messages"}
              {unread ? ` · ${unread} new` : ""}
            </p>
          </div>
          <form action={logoutAction}>
            <button
              type="submit"
              className="rounded-full border border-ink px-5 py-2 text-sm text-ink hover:bg-ink hover:text-white"
            >
              Sign out
            </button>
          </form>
        </div>
        <InquiryList items={items} />
      </div>
    </section>
  );
}
