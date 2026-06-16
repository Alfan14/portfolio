"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isDisabled = status === "loading";

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setErrorMessage("Semua field wajib diisi.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Terjadi kesalahan. Coba lagi.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Gagal terhubung ke server. Coba lagi.");
    }
  }

  const inputClass =
    "w-full rounded border border-black/20 bg-transparent px-4 py-2.5 text-sm outline-none transition focus:border-black/50 focus:ring-2 focus:ring-black/10 disabled:opacity-50 dark:border-white/20 dark:focus:border-white/50 dark:focus:ring-white/10";

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-md px-6 py-20">
        <h1 className="text-3xl font-bold">Get In Touch</h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Punya pertanyaan atau ingin berkolaborasi? Kirim pesan dan saya akan
          membalas secepatnya.
        </p>

        {status === "success" ? (
          <div className="mt-10 rounded-lg border border-green-200 bg-green-50 px-6 py-8 text-center dark:border-green-800/40 dark:bg-green-950/30">
            <p className="text-lg font-semibold text-green-700 dark:text-green-400">
              Pesan terkirim!
            </p>
            <p className="mt-1 text-sm text-green-600 dark:text-green-500">
              Saya akan membalas secepatnya.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                disabled={isDisabled}
                value={formData.name}
                onChange={handleChange}
                className={inputClass}
                placeholder="Muhammad Alfan"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                disabled={isDisabled}
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                disabled={isDisabled}
                value={formData.message}
                onChange={handleChange}
                className={inputClass}
                placeholder="Tulis pesan Anda di sini..."
              />
            </div>

            {status === "error" && errorMessage && (
              <p className="text-sm text-red-600 dark:text-red-400">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={isDisabled}
              className="w-full rounded bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-black dark:hover:bg-zinc-100"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </main>
    </>
  );
}
