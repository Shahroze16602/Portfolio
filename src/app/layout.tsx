import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import Noise from "./components/Noise";

export const metadata: Metadata = {
  title: "Muhammad Shahroze",
  description: "Muhammad Shahroze Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground">
        <SmoothScroll>
          <Noise />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
