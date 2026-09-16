# TC-158: Penjualan Sparepart Semua Metode Pembayaran

Admin melakukan proses transaksi penjualan sparepart untuk pelanggan menggunakan semua metode pembayaran (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa transaksi penjualan sparepart berhasil diproses menggunakan semua metode pembayaran. (Sesuai referensi TCC_01).

## Pre-conditions

1. Admin Sudah Login
2. Modul Penjualan & Kasir (bisa diakses)
3. Menu Penjualan Sparepart

## Test Data

Input Data:
Gudang: Cakung
Pelanggan: Indra Lesmana
Item: Cairan Pembersih
Harga: Rp 20.000
Metode Pembayaran: Tunai, Transfer, Kartu Kredit, Kartu Debit, Qris

## Skenario: Admin ingin melakukan proses pembayaran Penjualan untuk pelanggan, Mengunakan semua metode pembayaran

Langkah-langkah:

1. Buka Modul (Penjualan & Kasir)
2. Pilih Menu penjualan sparepart
3. Klik "Transaksi baru"
4. Input Data Transaksi
5. Pilih metode pembayaran
6. Klik "Proses Transaksi"

Expected Result:

Data Transaksi Penjualan berhasil dibuat dan riwayat pembayaran disimpan, transaksi yang telah dibuat ditampilkan dihalaman Penjualan seperti:
- No.invoice
- Tanggal
- Pelanggan
- Cabang
- Total
- Status
- Kasir

Actual Result: > Data Transaksi Penjualan berhasil dibuat dan riwayat pembayaran disimpan, transaksi yang telah dibuat ditampilkan dihalaman Penjualan seperti: No.invoice, Tanggal, Pelanggan, Cabang, Total, Status, Kasir
Status: PASS