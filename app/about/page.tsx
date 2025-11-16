// app/about/page.tsx
"use client";

import { useState } from "react";

export default function AboutPage() {
  const [ok, setOk] = useState<boolean | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: f.get("name"),
        email: f.get("email"),
        message: f.get("message"),
      }),
    });

    setOk(res.ok);
  }

  return (
    <section className="max-w-2xl space-y-8">
      {/* About section */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">About</h1>
        <p className="text-neutral-300">
          I’m Ro -- creator of pyrotex.dev, a software engineer.
        </p>
        <p className="text-neutral-300">
          I’m currently getting obsessed with dev work and building.
        </p>
      </div>

      {/* Contact section */}
      <div className="space-y-3 border-t border-neutral-800 pt-6">
        <h2 className="text-xl font-semibold">Get in touch</h2>
        <p className="text-neutral-300 text-sm">
          Want to chat about projects, collaborations, or roles? Send me a
          message here.
        </p>
        <form onSubmit={onSubmit} className="space-y-3">
          <input
            name="name"
            placeholder="Your name"
            className="w-full bg-neutral-900 border border-neutral-700 p-2 text-sm"
          />
          <input
            name="email"
            placeholder="Email"
            className="w-full bg-neutral-900 border border-neutral-700 p-2 text-sm"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Message"
            className="w-full bg-neutral-900 border border-neutral-700 p-2 text-sm"
          />
          <button
            className="px-4 py-2 border border-cyan-500/60 text-sm hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition"
          >
            Send
          </button>
        </form>
        {ok === true && (
          <p className="text-sm text-cyan-400">
            Thanks! I’ll get back to you.
          </p>
        )}
        {ok === false && (
          <p className="text-sm text-rose-400">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
}
