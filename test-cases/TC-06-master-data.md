# TC-06: Sub Menu Master Data

## Deskripsi
Test case manual untuk memvalidasi bahwa Admin dapat melihat sub-menu pada menu Master Data di sidebar sebelah kiri setelah berhasil login. (Sesuai referensi TMA_0006).
*Catatan: Environment yang dituju adalah Staging.*

## Pre-conditions
- Aplikasi dapat diakses dengan normal di staging (`staging.bengkelly.co.id`).
- Admin sudah berhasil login menggunakan kredensial yang valid.
## Skenario: Admin ingin melihat sub menu pada menu master data di sisi kiri sidebar
Langkah-langkah:
1. Admin membuka halaman login.
2. Admin berhasil login menggunakan email dan password yang valid.
3. (Opsional) Klik menu utama "Master Data" di sidebar jika sub-menu dalam keadaan tersembunyi (collapse).
4. Perhatikan daftar sub-menu yang muncul.

Expected Result:
- Menampilkan dashboard Performance.
- Menampilkan beberapa sub menu berikut:
  - Barang dan sparepart
  - Tipe servis
  - Layanan
  - Kategori
  - Satuan
  - Paket layanan
  - Merk kendaraan
  - Tipe kendaraan
  - Master QC
