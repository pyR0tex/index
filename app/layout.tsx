// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ro — Software Engineer",
  description: "Projects, writing, and experiments.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${jetbrains.className} min-h-screen bg-neutral-950 text-neutral-100 antialiased`}
      >
        <header className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <a href="/" className="font-semibold tracking-tight">
            pyR0tex.dev
          </a>
          <nav className="flex gap-5 text-sm text-neutral-400">
            <a href="/projects" className="hover:text-cyan-400">
              Projects
            </a>
            <a href="/about" className="hover:text-cyan-400">
              About
            </a>
          </nav>
        </header>
        <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
        <footer className="mx-auto max-w-5xl px-6 py-10 text-sm text-neutral-500">
            © {new Date().getFullYear()} pyrotex.dev · Built by Ro
        </footer>
      </body>
    </html>
  );
}
