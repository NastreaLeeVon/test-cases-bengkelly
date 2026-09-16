# TC-156: Katalog Online Edit Data Produk

Admin mengedit data produk yang tersedia di katalog secara benar (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa Admin dapat mengedit data produk yang tersedia di katalog secara valid. (Sesuai referensi TCB_03).

## Pre-conditions

1. Admin Sudah Login
2. Modul Penjualan & Kasir (bisa diakses)
3. Menu Katalog Produk

## Test Data

Edit data:
1. Item/produk: Ban (didapat dari Barang/Sparepart)
2. Judul Produk: Ban Mobil BYD
3. Deskripsi: Ban mobil berkualitas dengan daya cengkeram kuat, nyaman, dan aman untuk berbagai kondisi jalan.
4. Gambar Produk
5. Harga: Rp 890.000
6. Merubah Tipe Layanan
7. Klik "Simpan"

## Skenario: Admin ingin mengedit data yang tersedia di katalog karena ada perubahan atau kesalahan dalam data

Langkah-langkah:

1. Buka Modul (Penjualan & kasir)
2. Pilih Menu Katalog Produk
3. Klik "Edit Produk"
4. Input Edit Data
5. Pilih tipe layanan
6. Klik "Simpan Produk"

Expected Result:

Data Katalog Online telah berhasil untuk diedit dan disimpan, dan menampilkan beberapa data Produk di menu Katalog Online seperti:
- gambar
- Produk
- Item
- Harga
- Status
- Stats
- Aksi

Actual Result: > Data Katalog Online telah berhasil untuk diedit dan disimpan, dan menampilkan beberapa data Produk di menu Katalog Online seperti: gambar, Produk, Item, Harga, Status, Stats, Aksi
Status: PASS