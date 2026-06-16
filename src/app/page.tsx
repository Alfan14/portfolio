import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";

const featuredProjects = projects.filter((p) => p.featured);

const techItems = [
  "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS",
  "Node.js", "Express.js", "Laravel", "REST APIs",
  "PostgreSQL", "MySQL", "Prisma", "Sequelize",
  "Git", "GitHub", "Vercel", "Render", "Railway",
  "Python", "Basic AI", "Data Science",
];

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-4xl px-6 py-20">
          <div className="flex flex-col-reverse items-center gap-10 sm:flex-row sm:items-center sm:justify-between">
            {/* Text */}
            <div className="flex-1 text-center sm:text-left">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-50 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-950/30 dark:text-green-400">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                Open to opportunities
              </span>

              <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
                Hi, I&apos;m Muhammad Alfan
              </h1>
              <p className="mt-2 text-lg font-medium text-zinc-500 dark:text-zinc-400">
                Software Developer · Full Stack Web Developer
              </p>
              <p className="mx-auto mt-4 max-w-lg text-gray-600 dark:text-gray-400 sm:mx-0 leading-relaxed">
                Informatics Engineering student focused on building practical web applications,
                dashboards, and SaaS products. Experienced in full-stack development with a
                strong interest in API development, cloud fundamentals, and AI-enabled solutions.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3 sm:justify-start">
                <Link
                  href="/projects"
                  className="rounded bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-100"
                >
                  View Projects
                </Link>
                <a
                  href="/cv-muhammad-alfan.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border border-black/20 px-5 py-2.5 text-sm font-medium transition hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/5"
                >
                  Download CV
                </a>
              </div>

              <div className="mt-6 flex items-center justify-center gap-4 sm:justify-start">
                <a
                  href="https://github.com/Alfan14"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-zinc-400 transition hover:text-black dark:hover:text-white"
                >
                  <GitHubIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-alfan-86b737282/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-zinc-400 transition hover:text-black dark:hover:text-white"
                >
                  <LinkedInIcon className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Photo */}
            <div className="shrink-0">
              <Image
                src="/images/profiles/alfan-hero.png"
                alt="Muhammad Alfan"
                width={400}
                height={400}
                className="h-48 w-48 rounded-full object-cover ring-4 ring-black/5 sm:h-64 sm:w-64 dark:ring-white/10"
                priority
              />
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="border-t border-black/10 dark:border-white/10">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <h2 className="text-2xl font-bold">Featured Projects</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/projects"
                className="text-sm font-medium underline-offset-4 hover:underline"
              >
                View All Projects →
              </Link>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="border-t border-black/10 dark:border-white/10">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <h2 className="text-2xl font-bold">Tech Stack</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {techItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/10 bg-black/5 px-3 py-1.5 text-sm dark:border-white/10 dark:bg-white/5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-black/10 dark:border-white/10">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6">
            <p className="text-sm text-zinc-500">© 2026 Muhammad Alfan</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/Alfan14"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-zinc-400 transition hover:text-black dark:hover:text-white"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-alfan-86b737282/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-zinc-400 transition hover:text-black dark:hover:text-white"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
