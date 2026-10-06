import type { Metadata } from "next";
import Localfont from "next/font/local";
import "./globals.css";
import { cn } from "@/utils/cn";

/* Both faces are variable fonts, self-hosted from ../fonts so the page never
   waits on a third-party font host. */
const doto = Localfont({
  src: "../fonts/Doto.woff2",
  weight: "100 900",
  variable: "--font-doto",
  display: "swap",
});
const geistMono = Localfont({
  src: "../fonts/GeistMono.woff2",
  weight: "100 900",
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saad Koraiban · Full-stack developer",
  description:
    "Saad Koraiban, a full-stack developer in Casablanca building web and mobile products with Next.js, React, React Native and Node.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(doto.variable, geistMono.variable)}>
      {/* favicon.ico, icon.svg and apple-icon.png in app/ are linked by Next;
          regenerate them with `node scripts/brand-assets.mjs`. */}
      <body className="min-h-screen bg-ink font-mono text-ash antialiased">
        {children}
      </body>
    </html>
  );
}
