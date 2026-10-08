# Kaldeifasi

Kalkulator indikasi nilai tanah dengan rumus perhitungan yang dijalankan di Vercel Functions.

## Struktur

- `public/index.html` — tampilan aplikasi.
- `public/app.js` — interaksi halaman, input sampel, dan pembacaan Excel di browser.
- `api/calculate.mjs` — endpoint HTTP untuk permintaan perhitungan.
- `api/_lib/calculator.mjs` — rumus, tabel penyusutan, dan perhitungan deviasi di sisi server.
- `vercel.json` — header keamanan dan direktori file statis.

File Excel diproses di browser dan tidak dikirim atau disimpan oleh endpoint. Endpoint hanya menerima nilai yang diperlukan untuk menghitung, lalu mengembalikan hasilnya.

## Instalasi dan deployment

Tidak ada paket npm tambahan yang diperlukan untuk struktur ini. Vercel menyediakan runtime Node.js untuk file di dalam folder `api`. Ketika perubahan didorong ke branch GitHub yang terhubung ke Vercel, Vercel akan membangun deployment baru.

Untuk menjalankan proyek lokal dengan endpoint Vercel, pasang Node.js LTS dan Vercel CLI, lalu jalankan `vercel dev` dari folder proyek. Membuka `public/index.html` langsung dari file browser tidak menyediakan endpoint `/api/calculate`.