# TC-13: Barang/Sparepart - Search Bar

## Deskripsi
Test case manual untuk memvalidasi bahwa Admin dapat mencari barang/sparepart menggunakan kode, nama, atau merk. (Sesuai referensi TMA_0013).

## Pre-conditions
- Aplikasi dapat diakses dengan normal di staging.
- Admin sudah berhasil login.
- Terdapat data barang/sparepart di dalam sistem.
## Skenario: Admin ingin menggunakan search bar untuk mencari kode, nama, atau merk barang
Langkah-langkah:
1. Admin membuka halaman login.
2. Admin berhasil login.
3. Admin menavigasi ke menu Master Data > Barang/Sparepart.
4. Ketikkan kode, nama, atau merk barang di kolom Search.
5. Tekan Enter atau tombol Search.

Expected Result:
- Bisa menampilkan barang/sparepart dengan kode, nama, atau merk barang yang dicari di dalam tabel hasil pencarian.
