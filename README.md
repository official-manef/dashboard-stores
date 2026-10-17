# Dashboard Stores

Dashboard berbasis Next.js untuk menampilkan dan mengelola widget. Repositori ini berisi antarmuka dashboard, kumpulan widget, alat pengaturan widget, serta panduan pengembangan.

## Mulai

Prasyarat: Node.js dan npm.

```bash
npm install
npm run dev
```

Buka <http://localhost:3000/dashboard> untuk melihat dashboard. Halaman utama `/` saat ini kosong.

Perintah lain yang tersedia:

```bash
npm run build
npm run start
```

`npm run start` menjalankan server produksi Next.js; jalankan `npm run build` terlebih dahulu.

## Cakupan saat ini

- Halaman dashboard dengan layout dan sidebar.
- Widget terdaftar, termasuk Analytics, Code Editor, Data Display, Menu, dan Status.
- Antarmuka marketplace widget dengan pencarian, filter kategori, dan alur untuk menambahkan widget.
- Komponen untuk grid, pencarian, alat pengembang, editor widget, serta pengaturan tema.
- Hook dan konteks untuk konfigurasi, status, penyimpanan widget, dashboard, dan tema.

Keberadaan komponen tidak berarti seluruh fungsi lanjutan telah selesai. Rencana proyek masih mencantumkan pekerjaan yang belum tuntas, termasuk validasi widget, pengujian dan analisis performa, impor/ekspor, serta pengelolaan pengguna.

## Struktur repositori

- `src/app/` — halaman dan layout Next.js; dashboard berada di `src/app/dashboard/page.tsx`.
- `src/components/dashboard/` — layout dashboard, sidebar, grid, marketplace, pencarian, dan alat pengembang.
- `src/components/widget-editor/` — komponen editor dan tester widget.
- `src/lib/` — konteks, hook, dan utilitas bersama.
- `src/widgets/` — widget dan registrinya.
- `docs/` — panduan pengembangan widget dan widget Menu.
- `PLAN.md` — rencana pengembangan.
- `PROJECT.md` — ringkasan proyek dan pedoman pengembangan.

## Catatan batasan

- Halaman `/` kosong; gunakan `/dashboard`.
- Proyek mendokumentasikan penggunaan penyimpanan lokal browser untuk preferensi dan konfigurasi. Jangan menganggapnya sebagai penyimpanan bersama atau backend.
- `PLAN.md` menandai sejumlah kemampuan sebagai belum selesai. Periksa status di sana sebelum mengandalkan fitur yang direncanakan.
- `package.json` tidak mendefinisikan skrip pengujian.

## Verifikasi

Perintah pengembangan, build, dan start tersedia di `package.json`. Tidak ada hasil eksekusi perintah atau pengujian yang dinyatakan di sini.
