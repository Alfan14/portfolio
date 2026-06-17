import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kenali Muhammad Alfan — Full Stack Developer dengan pengalaman membangun aplikasi web menggunakan Next.js, Express.js, dan PostgreSQL.",
  openGraph: {
    title: "About",
    description:
      "Kenali Muhammad Alfan — Full Stack Developer dengan pengalaman membangun aplikasi web menggunakan Next.js, Express.js, dan PostgreSQL.",
    url: siteConfig.url + "/about",
  },
};

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    category: "Backend & API",
    items: ["Node.js", "Express.js", "Laravel", "REST APIs", "Role-based Access Control"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MySQL", "Prisma", "Sequelize", "SQL"],
  },
  {
    category: "Tools & Cloud",
    items: ["Git", "GitHub", "Postman", "Vercel", "Render", "Railway", "AWS (basics)"],
  },
  {
    category: "AI / Data",
    items: ["Python", "Basic AI", "Data Science", "Data Visualization"],
  },
];

const experiences = [
  {
    role: "Software Developer Apprentice",
    company: "PT Marstech Global",
    period: "Jan 2026 – Mar 2026",
    location: "Madiun, East Java · On-site",
    points: [
      "Contributed to client-based web application development in a software house environment.",
      "Assisted frontend and backend feature implementation using JavaScript ecosystem and database technologies.",
      "Supported debugging, UI revisions, feature adjustments, and testing based on user and client requirements.",
      "Learned the practical software delivery workflow from requirement understanding to deployment preparation.",
    ],
    tech: "Next.js · MySQL · Git",
  },
  {
    role: "Web Developer",
    company: "Polsek Bendo",
    period: "Jun 2025 – Aug 2025",
    location: "Bendo, East Java · Freelance / Hybrid",
    points: [
      "Built a public information website to support publication and communication needs for Polsek Bendo.",
      "Developed content pages for articles, reports, and public information updates.",
      "Implemented frontend and backend structure to support maintainable information management.",
      "Improved the website structure so public information could be accessed and presented more professionally.",
    ],
    tech: "Next.js · Express.js · PostgreSQL · REST API",
  },
];

const certifications = [
  "Dicoding – Memulai Pemrograman dengan Python",
  "Dicoding – Belajar Dasar Visualisasi Data",
  "Dicoding – Belajar Dasar Structured Query Language",
  "Dicoding – Belajar Dasar AI",
  "Dicoding – Belajar Dasar Data Science",
  "Dicoding – AWS Cloud Practitioner Essentials",
  "Dicoding – Belajar Dasar Manajemen Proyek",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-16">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Muhammad Alfan Ibnu Septiyan</h1>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            Software Developer · Full Stack Web Developer
          </p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Magetan, East Java, Indonesia
          </p>
        </div>

        {/* Summary */}
        <section className="mt-8">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Informatics Engineering student and Software Developer focused on building practical web
            applications, dashboards, and SaaS products based on real user needs. Experienced in a
            software house apprenticeship, public-sector website development, and database-driven
            full-stack projects. Strong interest in full-stack engineering, API development,
            deployment, cloud fundamentals, and AI-enabled business solutions.
          </p>
        </section>

        {/* Download CV */}
        <div className="mt-6">
          <a
            href="/cv-muhammad-alfan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded bg-black px-5 py-2.5 text-sm font-medium text-white dark:bg-white dark:text-black"
          >
            Download CV (PDF)
          </a>
        </div>

        {/* Skills */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold">Technical Skills</h2>
          <div className="mt-4 space-y-4">
            {skills.map((group) => (
              <div key={group.category} className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                <span className="w-36 shrink-0 text-sm font-medium text-gray-500 dark:text-gray-400">
                  {group.category}
                </span>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded bg-black/5 px-3 py-1 text-sm dark:bg-white/10"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold">Work Experience</h2>
          <div className="mt-4 space-y-8">
            {experiences.map((exp) => (
              <div key={exp.company}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-semibold">
                    {exp.role}{" "}
                    <span className="font-normal text-gray-500 dark:text-gray-400">
                      · {exp.company}
                    </span>
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                </div>
                <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">{exp.location}</p>
                <ul className="mt-2 space-y-1">
                  {exp.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">{exp.tech}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold">Education</h2>
          <div className="mt-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-semibold">Bachelor&apos;s Degree in Informatics Engineering</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">Jul 2023 – Present</span>
            </div>
            <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
              Universitas PGRI Madiun
            </p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Coursework: software development, databases, computer networks, system security, and
              information technology.
            </p>
          </div>
        </section>

        {/* Certifications */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold">Licenses &amp; Certifications</h2>
          <ul className="mt-4 space-y-1">
            {certifications.map((cert) => (
              <li key={cert} className="flex gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                {cert}
              </li>
            ))}
          </ul>
        </section>

        {/* Volunteer */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold">Volunteer &amp; Organization</h2>
          <div className="mt-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-semibold">Documentation and Publications Committee</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">Aug 2025</span>
            </div>
            <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
              PORSENASMA UNIPMA 2025 · Universitas PGRI Madiun
            </p>
            <ul className="mt-2 space-y-1">
              {[
                "Supported live video technical operations for a national-scale campus event.",
                "Assisted technical coordination to help event documentation and live coverage run smoothly.",
                "Strengthened teamwork, field coordination, communication, and problem-solving under live event conditions.",
              ].map((point) => (
                <li key={point} className="flex gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
