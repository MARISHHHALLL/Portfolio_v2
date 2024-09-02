import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import Localfont from "next/font/local";
import "./globals.css";
import { NavComponent } from "@/components/sections/nav";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { Icons } from "@/icons";

const Bricolage = Bricolage_Grotesque({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const base = Localfont({
  src: [
    {
      path: "../fonts/base.otf",
      weight: "black",
    },
  ],
  variable: "--font-base",
});
export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={"/avatar.svg"} sizes="any" />
      </head>
      <body
        className={cn(
          "relative scroll-smooth antialiased z-40",
          Bricolage.className,
          base.variable,
          inter.variable
        )}
      >
        <Image
          src={"/images/bg-01.png"}
          fill
          className="absolute top-0 left-0 h-full w-full  -z-10 opacity-20 object-cover object-center"
          alt="bg-01"
        />
        {/* <NavComponent /> */}
        <main className="z-50">{children}</main>
      </body>
    </html>
  );
}
