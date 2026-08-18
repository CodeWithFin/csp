"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  adminPasswordConfigured,
  checkPassword,
  clearAdminCookie,
  isAdmin,
  setAdminCookie,
} from "@/lib/admin-auth";
import { deleteInquiry, markInquiryRead } from "@/lib/inquiries";

export async function loginAction(formData: FormData) {
  if (!adminPasswordConfigured()) {
    redirect("/admin/login?error=config");
  }
  const password = String(formData.get("password") || "");
  if (!checkPassword(password)) {
    redirect("/admin/login?error=1");
  }
  await setAdminCookie();
  redirect("/admin");
}

export async function logoutAction() {
  await clearAdminCookie();
  redirect("/admin/login");
}

export async function markReadAction(formData: FormData) {
  if (!(await isAdmin())) redirect("/admin/login");
  const id = String(formData.get("id") || "");
  if (id) await markInquiryRead(id);
  revalidatePath("/admin");
}

export async function deleteInquiryAction(formData: FormData) {
  if (!(await isAdmin())) redirect("/admin/login");
  const id = String(formData.get("id") || "");
  if (id) await deleteInquiry(id);
  revalidatePath("/admin");
  redirect("/admin");
}
