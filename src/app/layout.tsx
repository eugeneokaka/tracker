import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Organization Workflow",
  description: "Productivity application for organizational workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fafafa] min-h-screen text-zinc-800`}>
          <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white shadow-sm">
            <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-8">
              <Link href="/" className="flex items-center space-x-2">
                <span className="font-bold text-lg tracking-tight">Workflow<span className="text-zinc-400">Hub</span></span>
              </Link>
              <div className="flex items-center space-x-4">
                <UserButton />
              </div>
            </div>
          </header>
          <main className="container mx-auto px-4 md:px-8 py-8">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
