<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know
This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project: Muhammad Alfan Portfolio

## Stack
- Next.js (App Router, TypeScript, Tailwind CSS)
- Deployment target: Vercel

## Structure
- `src/content/projects.ts` — data source untuk daftar project
- `src/lib/types.ts` — type definitions
- `src/components/` — shared UI components
- `public/images/`, `public/videos/` — media assets

## Project Rules
- Project dengan `isPrivate: true` di projects.ts TIDAK BOLEH menampilkan tombol "View Code"/repoUrl di UI manapun. Hanya demo video + screenshot + deskripsi.
- Gunakan Next/Image untuk semua gambar.
- Video demo: public/videos/ ATAU embed YouTube/Vimeo unlisted jika >10MB.
- Jaga komponen kecil dan reusable; hindari logic kompleks di page.tsx.

## DO NOT ACCESS (folders/files off-limits)
Jangan baca, scan, edit, atau jalankan command apapun pada:
- `node_modules/`, `.next/`, `.git/`, `.vercel/`
- `.env`, `.env.local`, `.env*` (semua file env)
- `*.pem`, `*.key`, kredensial/secrets dalam bentuk apapun
- `private/` (folder dokumen pribadi non-kode, jika ada)
Jika butuh referensi dari salah satu di atas, TANYA dulu — jangan akses langsung.

## Token Efficiency Rules
- Sebelum edit, baca HANYA file yang relevan dengan task — jangan scan seluruh src/ atau repo.
- Jika user sebut nama file/path spesifik, langsung buka file itu, jangan grep dulu.
- Jangan baca ulang file yang sudah dibaca di sesi ini kecuali ada perubahan baru.
- Jangan jalankan `npm install` / `npm run build` berulang kali tanpa diminta — cukup sekali per fase setelah semua edit selesai.
- Ringkas laporan hasil kerja: cukup daftar file yang diubah + 1 baris status, jangan dump seluruh isi file kecuali diminta.
- Jika task selesai dan butuh fase baru, sarankan user untuk `/clear` sebelum lanjut.