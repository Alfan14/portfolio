import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-lg border border-black/10 transition hover:shadow-md dark:border-white/10"
    >
      <div className="relative aspect-video w-full bg-gray-100 dark:bg-gray-900">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition group-hover:scale-105"
        />
        {project.isPrivate && (
          <span className="absolute right-2 top-2 rounded bg-black/70 px-2 py-1 text-xs text-white">
            Private
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{project.title}</h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded bg-black/5 px-2 py-1 text-xs dark:bg-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
