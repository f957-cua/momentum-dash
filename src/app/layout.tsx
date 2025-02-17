import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import MenuBar from "@/components/MenuBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Momentum",
  description: "CRM for the future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <aside className="fixed top-0 left-0 z-50 w-full h-16 bg-white dark:bg-black">
          <header className="flex items-center justify-between h-full max-w-7xl mx-auto px-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              <Link href="/">
                <Image
                  src="/logo_001_v1.svg"
                  alt="momentum logo"
                  width={50}
                  height={50}
                />
              </Link>
            </h1>
            <MenuBar />
          </header>
        </aside>
        <br />
        <main className="mt-16">{children}</main>
      </body>
    </html>
  );
}
