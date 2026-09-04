# Learnify Placement Test Engine

GitHub Repository: https://github.com/tasyaswantara/Learnify.git
Live Deployment: TBD

Mini project frontend untuk Multi-Step Placement Test Engine. Aplikasi ini
akan memandu pengguna dari biodata, pengerjaan kuis 15 soal, sampai halaman
hasil dan rekomendasi program belajar.

## Features

- Landing page dan form biodata responsif
- Validasi nama, email, WhatsApp, dan target program
- Penyimpanan biodata ke `localStorage`
- Quiz 15 soal pilihan ganda dari data JSON lokal
- Navigasi soal bebas dan progress bar real-time
- Auto-save jawaban dan posisi soal ke `localStorage`
- Submit confirmation dengan handling soal belum dijawab
- Result page dengan skor, level, detail performa, rekomendasi, dan WhatsApp CTA

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router

## Development

```bash
npm install
npm run dev
```

Build production:

```bash
npm run build
```

Lint:

```bash
npm run lint
```

## App Flow

1. User mengisi biodata di halaman landing.
2. Form divalidasi dan data disimpan ke `localStorage`.
3. User mengerjakan 15 soal quiz dengan progress otomatis tersimpan.
4. User submit quiz melalui confirmation modal.
5. Aplikasi menghitung skor, level, rekomendasi, dan membuat WhatsApp CTA.

## Level Rules

- `0-40%`: Beginner
- `41-75%`: Intermediate
- `76-100%`: Advanced

## AI Usage Log

- Initial prompt: setup frontend bertahap berdasarkan study case PDF dan konsep
  Multi-Step Placement Test Engine, dimulai dari project setup dan koneksi
  GitHub.
- Follow-up prompts: pengembangan bertahap untuk design system, brand assets,
  landing/biodata UI, validasi biodata, quiz state, quiz UI, autosave,
  submission flow, result scoring, rekomendasi, dan dokumentasi.
