import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Hubungi Muhammad Alfan untuk kolaborasi, peluang kerja, atau diskusi project.",
  openGraph: {
    title: "Contact",
    description: "Hubungi Muhammad Alfan untuk kolaborasi, peluang kerja, atau diskusi project.",
    url: siteConfig.url + "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
