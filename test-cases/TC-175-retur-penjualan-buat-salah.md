# TC-175: Retur Penjualan Buat Retur Input Salah

Admin membuat data retur penjualan namun dengan cara yang salah (Failed)

## Deskripsi

Test case manual untuk memvalidasi bahwa sistem menolak pembuatan retur penjualan jika field wajib tidak diisi. (Sesuai referensi TCG_02).

## Pre-conditions

1. Admin Sudah Login
2. Modul Penjualan & Kasir (bisa diakses)
3. Menu Retur Penjualan

## Test Data

Input Retur:
1. Tidak memasukkan Invoice dari Penjualan
2. Gudang asal: Tidak Meng-input
3. Item yang diretur: Tidak Meng-input
4. Alasan retur: Tidak mengisi

## Skenario: Admin ingin membuat data retur penjualan didalam bengkel Namun Dengan Cara Yang Salah

Langkah-langkah:

1. Buka Modul (Penjualan & Kasir)
2. Pilih Menu Retur Penjualan
3. Klik "Retur Baru"
4. Biarkan data kosong
5. Klik "Proses Retur" Dengan Cara Yang salah

Expected Result:

Data Retur gagal untuk dibuat dan disimpan, sistem menampilkan adanya error pada saat meng-input dan meminta pengguna untuk memperbaiki kesalahan tersebut

Actual Result: > Data Retur gagal untuk dibuat dan disimpan, sistem menampilkan adanya error pada saat meng-input dan meminta pengguna untuk memperbaiki kesalahan tersebut
Status: PASS