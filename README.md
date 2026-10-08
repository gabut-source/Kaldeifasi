# Kalkulator ZNT Multi Sampel

Situs statis untuk deployment ke Vercel. Perhitungan dan pemrosesan file Excel berjalan di browser; file Excel tidak dikirim ke server oleh aplikasi ini.

## Deploy

1. Push folder ini ke repository GitHub **Private**.
2. Import repository tersebut di Vercel.
3. Gunakan pengaturan build default tanpa perintah build atau direktori output khusus.

## Catatan keamanan

- Jangan menambahkan file survei, token, atau kredensial ke repository.
- Kode frontend dan rumus yang dikirim ke browser dapat dilihat oleh pengunjung situs. Repository Private melindungi akses repo, bukan kode yang dipublikasikan di browser.
- Untuk merahasiakan rumus, perhitungan perlu dipindahkan ke backend dan endpoint-nya perlu diberi autentikasi serta pembatasan permintaan.
