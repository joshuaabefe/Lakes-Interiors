import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-serif" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: { siteName: "Lakes Interiors", locale: "en_NG", type: "website" },
  title: { default: "Lakes Interiors | Interior design in Maryland, Lagos", template: "%s | Lakes Interiors" },
  description: "Interior design, finishing and furnishing for residential and commercial spaces in Maryland, Lagos, Nigeria.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:bg-charcoal focus:px-4 focus:py-2 focus:text-ivory">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
