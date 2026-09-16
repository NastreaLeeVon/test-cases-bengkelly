# TC-174: Retur Penjualan Buat Retur Benar

Admin membuat data retur penjualan di bengkel dengan benar (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa Admin dapat membuat transaksi retur penjualan secara valid. (Sesuai referensi TCG_01).

## Pre-conditions

1. Admin Sudah Login
2. Modul Penjualan & Kasir (bisa diakses)
3. Menu Retur Penjualan

## Test Data

Input Retur:
1. Masukkan Invoice dari Penjualan
2. Gudang Asal: cakung barat
3. Item yang diretur: cairan pembersih 1x
4. Alasan retur: barang bocor

## Skenario: Admin ingin membuat data retur penjualan didalam bengkel Dengan Benar

Langkah-langkah:

1. Buka Modul (Penjualan & Kasir)
2. Pilih Menu Retur Penjualan
3. Klik "Retur Baru"
4. Input data pengembalian
5. Klik "Proses Retur" Dengan Benar

Expected Result:

Retur telah berhasil dibuat dan disimpan, sistem menampilkan beberapa data pengeluaran tersebut di menu retur penjualan seperti:
- No.Retur
- Tanggal
- Invoice Asal
- Pelanggan
- Total
- Status

Actual Result: > Retur telah berhasil dibuat dan disimpan, sistem menampilkan beberapa data pengeluaran tersebut di menu retur penjualan seperti: No.Retur, Tanggal, Invoice Asal, Pelanggan, Total, Status
Status: PASS