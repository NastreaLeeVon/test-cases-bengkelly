# TC-160: Penjualan Sparepart Non Tunai Lebih Gagal

Admin melakukan transaksi penjualan sparepart non-tunai dengan nominal lebih dari harga bayar (Failed)

## Deskripsi

Test case manual untuk memvalidasi bahwa transaksi non-tunai penjualan sparepart harus tepat nominalnya dan menolak jika lebih. (Sesuai referensi TCC_03).

## Pre-conditions

1. Admin Sudah Login
2. Modul Penjualan & Kasir (bisa diakses)
3. Menu Penjualan Sparepart

## Test Data

Input Data:
Gudang: Cakung
Pelanggan: Indra Lesmana
Item: Cairan Pembersih
Harga Item: Rp 20.000
Jumlah Pembayaran: Rp 50.000
Metode Pembayaran: Transfer, Kartu Kredit, Kartu Debit, Qris

## Skenario: Admin ingin melakukan proses pembayaran Transaksi untuk pelanggan, tapi bagaimana jika kalau uang yang diberikan itu lebih dengan harga penjualan yang harus dibayarkan (mengunakan metode pembayaran selain tunai)

Langkah-langkah:

1. Buka Modul (Penjualan & Kasir)
2. Pilih Menu penjualan sparepart
3. Klik "Transaksi baru"
4. Input Data Transaksi
5. Pilih metode pembayaran non-tunai
6. Klik "Proses Transaksi"

Expected Result:

Transaksi gagal dilakukan karena nominal pembayaran yang dimasukkan untuk metode ini (non-tunai) harus pas dengan harga yang harus dibayar, dan sistem menampilkan pesan bahwa nominal harus diperbaiki

Actual Result: > Transaksi gagal dilakukan karena nominal pembayaran yang dimasukkan untuk metode ini (non-tunai) harus pas dengan harga yang harus dibayar, dan sistem menampilkan pesan bahwa nominal harus diperbaiki
Status: PASS