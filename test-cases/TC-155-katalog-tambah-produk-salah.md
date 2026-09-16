# TC-155: Katalog Online Tambah Produk Input Salah

Admin membuat data produk baru di katalog dengan cara yang salah (Failed)

## Deskripsi

Test case manual untuk memvalidasi bahwa sistem menolak penambahan data produk baru di katalog jika field wajib tidak diisi atau salah format. (Sesuai referensi TCB_02).

## Pre-conditions

1. Admin Sudah Login
2. Modul Penjualan & Kasir (bisa diakses)
3. Menu Katalog Produk

## Test Data

Input Data:
1. Item/produk: tidak memilih item (yang didapat dari Barang/Sparepart)
2. Judul Produk: Tidak meng-input nama produk
3. Deskripsi: KOTAK
4. (Opsional)
5. Harga: Rp - 1.7jt
6. Tidak memilih Tipe Layanan
7. Mencoba meng-Klik "Simpan"

## Skenario: Admin ingin membuat data produk baru di katalog, Namun dengan cara yang salah

Langkah-langkah:

1. Buka Modul (Penjualan & kasir)
2. Pilih Menu Katalog Produk
3. Klik "Tambah Produk"
4. Input Data salah/kosong
5. Klik "Simpan Produk"

Expected Result:

Data Katalog gagal untuk dibuat dan disimpan, sistem menampilkan adanya error pada saat meng-input dan meminta pengguna untuk memperbaiki kesalahan tersebut

Actual Result: > Data Katalog gagal untuk dibuat dan disimpan, sistem menampilkan adanya error pada saat meng-input dan meminta pengguna untuk memperbaiki kesalahan tersebut
Status: PASS