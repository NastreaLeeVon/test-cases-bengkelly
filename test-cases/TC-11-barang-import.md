# TC-11: Barang/Sparepart - Import Data

## Deskripsi
Test case manual untuk memvalidasi bahwa Admin dapat mengimport data barang/sparepart dari file Excel. (Sesuai referensi TMA_0011).

## Pre-conditions
- Aplikasi dapat diakses dengan normal di staging.
- Admin sudah berhasil login.
- File Excel (.xlsx) dengan format data barang/sparepart sudah disiapkan.
## Skenario: Admin ingin mengimport data barang/sparepart dari luar aplikasi
Langkah-langkah:
1. Admin membuka halaman login.
2. Admin berhasil login.
3. Admin menavigasi ke menu Master Data > Barang/Sparepart.
4. Klik tombol Import.
5. Upload file Excel yang sudah disiapkan.

Expected Result:
- Bisa mengimport data dari excel.
- Data dari excel berhasil diterjemahkan menjadi data dalam aplikasi (muncul di tabel).
