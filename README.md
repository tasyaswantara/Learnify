# Learnify Placement Test Engine

Live Deployment: https://learnify-two-orcin.vercel.app/
GitHub Repository: https://github.com/tasyaswantara/Learnify.git

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

- Prompt 1: Bantu susun struktur data dummy untuk 15 soal placement test
  frontend. Pastikan setiap soal punya `id`, `category`, `question`, `options`,
  dan `correctAnswer` agar bisa dipakai untuk kalkulasi skor serta performa per
  kategori.
- Prompt 2: Review rancangan state quiz berbasis React Context dan custom hook.
  Saya ingin memisahkan state jawaban, nomor soal aktif, progress, navigasi, dan
  submit agar komponen UI tidak menyimpan logic quiz secara tersebar.
- Prompt 3: Bantu validasi edge case localStorage untuk quiz progress. Jika user
  refresh halaman, jawaban dan posisi soal harus bisa dipulihkan; jika data
  tersimpan rusak, aplikasi tidak boleh crash.
- Prompt 4: Bantu buat logic scoring placement test. Output yang dibutuhkan:
  jumlah benar, salah, total soal, persentase, level Beginner/Intermediate/
  Advanced, dan performa per kategori.
- Prompt 5: Bantu susun generator pesan WhatsApp dinamis dari biodata user,
  skor, level, dan rekomendasi program agar CTA hasil test terasa personal.
