import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL(site.url),
  icons: {
    icon: [{ url: "/favicon.webp", type: "image/webp" }],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" id="top" className={`${inter.variable} ${manrope.variable}`}>
      <body className="overflow-x-hidden bg-cream font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
