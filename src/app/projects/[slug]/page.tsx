import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { getProjectBySlug, projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="mx-auto flex-1 max-w-4xl px-6 py-16">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold">{project.title}</h1>
          {project.isPrivate && (
            <span className="rounded bg-black/70 px-2 py-1 text-xs text-white">
              Private / Confidential
            </span>
          )}
        </div>

        <p className="mt-4 text-gray-600 dark:text-gray-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded bg-black/5 px-3 py-1 text-sm dark:bg-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links: hanya tampilkan repo jika TIDAK private */}
        <div className="mt-6 flex gap-4">
          {!project.isPrivate && project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-black/20 px-4 py-2 text-sm font-medium dark:border-white/20"
            >
              View Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-black px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-black"
            >
              Live Demo
            </a>
          )}
        </div>

        {/* Demo video */}
        {project.demoVideo && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold">Demo</h2>
            <video
              controls
              className="mt-3 w-full rounded-lg border border-black/10 dark:border-white/10"
              src={project.demoVideo}
            />
          </div>
        )}

        {/* Screenshots */}
        {project.images && project.images.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold">Screenshots</h2>
            <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.images.map((img) => (
                <div
                  key={img}
                  className="relative aspect-video overflow-hidden rounded-lg border border-black/10 dark:border-white/10"
                >
                  <Image src={img} alt={project.title} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </>
  );
}
