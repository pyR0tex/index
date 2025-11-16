// app/page.tsx
export default function HomePage() {
  return (
    <section className="space-y-5">
      <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
        Index
      </p>
      <h1 className="text-4xl md:text-5xl font-bold">
        Ro — Software Engineer
      </h1>
      <p className="max-w-2xl text-neutral-300">
        I code for fun. This is my dungeon of experiments & projects.
      </p>

      <div className="mt-6 flex gap-3">
        <a
          href="/about"
          className="px-4 py-2 border border-rose-500/60 text-sm hover:bg-rose-500/10 hover:shadow-[0_0_20px_rgba(244,63,94,0.4)] transition"
        >
          About Me
        </a>
        <a
          href="/projects"
          className="px-4 py-2 border border-cyan-500/60 text-sm hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition"
        >
          Projects
        </a>
      </div>
    </section>
  );
}
