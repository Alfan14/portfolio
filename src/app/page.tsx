import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex max-w-4xl flex-1 flex-col items-start justify-center px-6 py-24">
        <h1 className="text-4xl font-bold sm:text-5xl">
          Hi, I&apos;m Muhammad Alfan
        </h1>
        <p className="mt-4 max-w-xl text-lg text-gray-600 dark:text-gray-400">
          Short tagline / role description goes here. Replace with your own
          intro.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/projects"
            className="rounded bg-black px-5 py-2.5 text-sm font-medium text-white dark:bg-white dark:text-black"
          >
            View Projects
          </Link>
          <Link
            href="/about"
            className="rounded border border-black/20 px-5 py-2.5 text-sm font-medium dark:border-white/20"
          >
            About Me
          </Link>
        </div>
      </main>
    </>
  );
}
