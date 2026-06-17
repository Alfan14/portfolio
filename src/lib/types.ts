export type Project = {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  coverImage: string;
  images?: string[];
  demoVideo?: string; 
  isPrivate: boolean; 
  repoUrl?: string | null;
  liveUrl?: string | null;
  featured?: boolean;
};
