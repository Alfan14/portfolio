import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  // Rate limiting by IP
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  const now = Date.now();
  const record = rateLimit.get(ip);

  if (record && now < record.resetAt) {
    if (record.count >= RATE_LIMIT_MAX) {
      return NextResponse.json(
        { error: "Terlalu banyak permintaan. Coba lagi dalam 10 menit." },
        { status: 429 }
      );
    }
    record.count++;
  } else {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
  }

  // Parse body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Request body tidak valid." },
      { status: 400 }
    );
  }

  const { name, email, message } = body as Record<string, unknown>;

  // Validate fields
  if (!name || typeof name !== "string" || name.trim() === "") {
    return NextResponse.json(
      { error: "Nama tidak boleh kosong." },
      { status: 400 }
    );
  }
  if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
    return NextResponse.json(
      { error: "Format email tidak valid." },
      { status: 400 }
    );
  }
  if (
    !message ||
    typeof message !== "string" ||
    message.trim().length < 10
  ) {
    return NextResponse.json(
      { error: "Pesan minimal 10 karakter." },
      { status: 400 }
    );
  }

  const cleanName = escapeHtml(name.trim());
  const cleanEmail = escapeHtml(email.trim());
  const cleanMessage = escapeHtml(message.trim());

  // Send via Resend
  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL_TO!,
      subject: `[Portfolio] Pesan dari ${cleanName}`,
      html: `
        <p><strong>Nama:</strong> ${cleanName}</p>
        <p><strong>Email:</strong> <a href="mailto:${cleanEmail}">${cleanEmail}</a></p>
        <p><strong>Pesan:</strong></p>
        <p style="white-space: pre-wrap; background:#f4f4f4; padding:12px; border-radius:4px;">${cleanMessage}</p>
      `,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: "Gagal mengirim pesan." },
        { status: 500 }
      );
    }
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "Gagal mengirim pesan." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
