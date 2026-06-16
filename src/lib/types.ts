export type Project = {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  coverImage: string;
  images?: string[];
  demoVideo?: string; // path lokal atau URL embed (YouTube/Vimeo)
  isPrivate: boolean; // true = jangan tampilkan link repo
  repoUrl?: string | null;
  liveUrl?: string | null;
  featured?: boolean;
};
