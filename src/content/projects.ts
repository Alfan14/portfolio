import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "polsek-bendo",
    title: "Polsek Bendo",
    description:
      "Situs web informasi publik untuk mendukung kebutuhan publikasi dan komunikasi Polsek Bendo. Mengembangkan halaman konten untuk artikel, laporan, dan pembaruan informasi publik. Menerapkan struktur frontend dan backend untuk mendukung pengelolaan informasi yang mudah dipelihara.",
    techStack: ["Next.js", "Express.js", "PostgreSQL"],
    coverImage: "/images/Polsek-Bendo-1.png",
    images: [
      "/images/Polsek-Bendo-1.png",
      "/images/Polsek-Bendo-2.png",
      "/images/Polsek-Bendo-3.png",
    ],
    isPrivate: true,
    repoUrl: null,
    liveUrl: "https://polsek-bendo.my.id/",
    featured: true,
  },
  {
    slug: "project-management",
    title: "Project Management",
    description:
      "Aplikasi web berbasis klien di lingkungan perusahaan pengembang perangkat lunak. Membantu implementasi fitur frontend dan backend dengan memanfaatkan ekosistem JavaScript dan teknologi basis data. Mendukung proses debugging, revisi antarmuka pengguna (UI), penyesuaian fitur, serta pengujian berdasarkan persyaratan pengguna dan klien.",
    techStack: ["Next.js", "Express.js", "MySQL"],
    coverImage: "/images/Project-Management-2.png",
    images: [
      "/images/Project-Management-1.png",
      "/images/Project-Management-2.png",
    ],
    demoVideo: "/videos/Project-Management-Demo.mp4",
    isPrivate: true,
    repoUrl: null,
    liveUrl: null,
    featured: false,
  },
  {
    slug: "skillpath-kids",
    title: "SkillpathKids",
    description:
      "SkillPath Kids adalah platform asesmen perkembangan anak yang membantu guru dan orang tua memantau kemampuan anak melalui berbagai kategori perkembangan seperti kognitif, bahasa, motorik, sosial-emosional, dan kemandirian. Aplikasi ini menyediakan sistem penilaian terstruktur, laporan perkembangan otomatis, worksheet pembelajaran, serta rekomendasi aktivitas yang dapat digunakan untuk mendukung proses belajar anak. Dirancang dengan pendekatan mobile-first dan antarmuka yang ramah pengguna, SkillPath Kids mempermudah proses observasi, dokumentasi, dan pelaporan perkembangan anak dalam satu platform terintegrasi.",
    techStack: [
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Prisma ORM",
      "PostgreSQL",
      "Auth.js",
      "Vercel",
    ],
    coverImage: "/images/SkillpathKids-3.png",
    images: [
      "/images/SkillpathKids-1.png",
      "/images/SkillpathKids-2.png",
      "/images/SkillpathKids-3.png",
      "/images/SkillpathKids-4.png",
    ],
    demoVideo: "/videos/SkillpathKids-Demo.mp4",
    isPrivate: false,
    repoUrl: "https://github.com/Alfan14/skillpath-kids-frontend",
    liveUrl: "https://skillpath-kids-frontend.vercel.app/",
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
