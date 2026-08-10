# Dokumentasi Sederhana Proyek Portofolio V2

Halo! Dokumen ini dibuat supaya kamu bisa paham proyek ini dengan bahasa yang simpel dan nyaman, seperti sedang diajari oleh teman yang sabar.

## Apa ini proyeknya?

Proyek ini adalah website portofolio pribadi. Tujuannya adalah untuk menampilkan:

- siapa orangnya
- skill yang dimiliki
- proyek yang pernah dibuat
- sertifikat dan pencapaian
- navigasi yang rapi dan modern

Jadi, ini seperti kartu nama digital yang lebih keren dan lebih hidup.

## Bagaimana cara kerjanya?

Bayangkan proyek ini punya dua bagian utama:

1. Bagian depan (frontend)
   - Bagian ini yang dilihat pengguna di browser.
   - Dibuat dengan React.
   - Tampilan dibuat dengan Tailwind CSS supaya terlihat bagus dan rapi.
   - Router dipakai supaya halaman bisa berpindah-pindah dengan halus.

2. Bagian belakang (backend)
   - Bagian ini membantu menyajikan data lewat API.
   - Dibuat dengan Express.
   - Kalau ada permintaan dari frontend, server akan memberi respons.

Jadi alurnya seperti ini:

- pengguna membuka website
- React menampilkan halaman
- tombol navigasi membawa pengguna ke bagian yang diinginkan
- kalau butuh data, frontend memanggil API dari server
- server mengirim balasan
- halaman pun berubah sesuai data tersebut

## Struktur folder

Berikut arti folder-folder penting di proyek ini:

- client/ : semua isi halaman depan
  - App.tsx : titik masuk aplikasi React
  - pages/ : halaman seperti home dan halaman not found
  - components/ : bagian-bagian UI seperti navbar, layout, tombol, card
  - global.css : style global dan tema visual

- server/ : bagian backend
  - index.ts : setup server Express
  - routes/ : file untuk endpoint API

- shared/ : file yang dipakai bersama oleh client dan server
  - api.ts : contoh type data yang bisa dibagi

- public/ : file statis seperti robots.txt

- netlify/ : file khusus untuk deployment di Netlify

## Teknologi yang dipakai

Berikut tech stack yang dipakai proyek ini:

- React : untuk membangun tampilan website
- TypeScript : supaya kode lebih aman dan lebih rapi
- Vite : untuk menjalankan proyek dengan cepat
- React Router : untuk navigasi antar halaman
- Tailwind CSS : untuk styling tampilan
- Express : untuk membuat server dan API
- TanStack Query : untuk manajemen data dari server
- Radix UI : untuk komponen UI yang bagus dan aksesibel
- Framer Motion : untuk animasi halus
- Lucide React : untuk ikon yang cantik
- Vitest : untuk testing
- pnpm : package manager

## Bagaimana cara menjalankan proyek

Kalau kamu mau lihat proyek ini berjalan di laptop, jalankan perintah ini:

```bash
pnpm install
pnpm dev
```

Setelah itu, browser biasanya akan membuka situsnya secara otomatis.

## Perintah penting

- pnpm dev : jalankan proyek di mode development
- pnpm build : buat versi siap dipakai untuk produksi
- pnpm start : jalankan versi produksi
- pnpm typecheck : cek type error
- pnpm test : jalankan test

## Inti proyek ini dalam satu kalimat

Proyek ini adalah website portofolio modern yang menampilkan diri, skill, project, dan pencapaian dengan tampilan menarik, dibangun dari React di depan dan Express di belakang.
