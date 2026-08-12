import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "@fontsource-variable/manrope/wght.css";
import "@fontsource-variable/dm-sans/wght.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/600.css";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://muhammadshahroze.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Muhammad Shahroze — Android Engineer", template: "%s — Muhammad Shahroze" },
  description: "Android engineer with 3+ years of experience building reliable Kotlin and Jetpack Compose products, production systems, billing, and monetization.",
  applicationName: "Muhammad Shahroze Portfolio",
  keywords: ["Android engineer", "Kotlin developer", "Jetpack Compose", "Android portfolio", "remote Android developer", "Pakistan Android engineer"],
  authors: [{ name: "Muhammad Shahroze", url: siteUrl }],
  creator: "Muhammad Shahroze",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Muhammad Shahroze — Android Engineer",
    title: "Muhammad Shahroze — Android Engineer",
    description: "I engineer Android products that survive the real world.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Muhammad Shahroze, Android Engineer" }],
  },
  twitter: { card: "summary_large_image", title: "Muhammad Shahroze — Android Engineer", description: "I engineer Android products that survive the real world.", images: ["/og.png"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
