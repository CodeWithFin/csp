import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/siscom-logo.png";
import { logoutAction } from "@/app/admin/actions";
import { isAdmin } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const signedIn = await isAdmin();

  return (
    <div className="min-h-screen bg-cream">
      <header className="flex items-center justify-between border-b border-line px-6 py-4 md:px-12 lg:px-20">
        <Link href={signedIn ? "/admin" : "/admin/login"} className="flex items-center">
          <Image src={logo} alt="Siscom" className="h-8 w-auto" />
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/" className="text-body transition-colors hover:text-ink">
            View site
          </Link>
          {signedIn ? (
            <>
              <Link href="/admin" className="text-ink">
                Responses
              </Link>
              <form action={logoutAction}>
                <button type="submit" className="text-body transition-colors hover:text-ink">
                  Sign out
                </button>
              </form>
            </>
          ) : null}
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
