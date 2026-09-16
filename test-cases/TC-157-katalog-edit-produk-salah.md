# TC-157: Katalog Online Edit Data Produk Input Salah

Admin mengedit data produk di katalog namun dengan cara yang salah (Failed)

## Deskripsi

Test case manual untuk memvalidasi bahwa sistem menolak pembaruan data produk di katalog jika diisi dengan data tidak valid. (Sesuai referensi TCB_04).

## Pre-conditions

1. Admin Sudah Login
2. Modul Penjualan & Kasir (bisa diakses)
3. Menu Katalog Produk

## Test Data

Edit data:
1. Item/produk: Ban (didapat dari Barang/Sparepart)
2. Judul Produk: Tidak Meng-input
3. Deskripsi: Tidak meng-input
4. Gambar Produk
5. Harga: Rp -890.000
6. Tidak Memilih Tipe Layanan
7. Klik "Simpan"

## Skenario: Admin ingin mengedit data yang tersedia di katalog karena ada perubahan atau kesalahan dalam data, Namun dengan cara yang salah

Langkah-langkah:

1. Buka Modul (Penjualan & kasir)
2. Pilih Menu Katalog Produk
3. Klik "Edit Produk"
4. Input Edit Data salah/kosong
5. Klik "Simpan Produk"

Expected Result:

Data Katalog gagal untuk diedit dan disimpan, sistem menampilkan adanya error pada saat meng-input dan meminta pengguna untuk memperbaiki kesalahan tersebut

Actual Result: > Data Katalog gagal untuk diedit dan disimpan, sistem menampilkan adanya error pada saat meng-input dan meminta pengguna untuk memperbaiki kesalahan tersebut
Status: PASS