import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex-1 max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-bold">Projects</h1>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </main>
    </>
  );
}
