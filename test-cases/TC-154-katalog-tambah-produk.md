# TC-154: Katalog Online Tambah Produk Baru

Admin membuat data produk baru di katalog online dengan benar (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa Admin dapat membuat data produk baru di katalog online secara lengkap dan valid. (Sesuai referensi TCB_01).

## Pre-conditions

1. Admin Sudah Login
2. Modul Penjualan & Kasir (bisa diakses)
3. Menu Katalog Produk
User berada di halaman Katalog Produk

## Test Data

Input Data:
1. Item/produk: Ban (didapat dari Barang/Sparepart)
2. Judul Produk: Ban karet
3. Deskripsi: Bulat
4. Gambar Produk
5. Harga: Rp 1.700.000
6. Memilih Tipe Layanan
7. Klik "Simpan"

## Skenario: Admin ingin membuat data produk baru di katalog, dengan benar

Langkah-langkah:

1. Buka Modul (Penjualan & kasir)
2. Pilih Menu Katalog Produk
3. Klik "Tambah Produk"
4. Input Data
5. Pilih tipe layanan
6. Klik "Simpan Produk"

Expected Result:

Data Katalog Online baru telah berhasil dibuat dan disimpan, dan menampilkan beberapa data Produk di menu Katalog Online seperti:
- gambar
- Produk
- Item
- Harga
- Status
- Stats
- Aksi

Actual Result: > Data Katalog Online baru telah berhasil dibuat dan disimpan, dan menampilkan beberapa data Produk di menu Katalog Online seperti: gambar, Produk, Item, Harga, Status, Stats, Aksi
Status: PASS