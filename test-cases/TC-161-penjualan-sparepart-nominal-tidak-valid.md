# TC-161: Penjualan Sparepart Nominal Tidak Valid

Admin melakukan transaksi penjualan sparepart dengan nominal tidak valid (Failed)

## Deskripsi

Test case manual untuk memvalidasi bahwa sistem menolak transaksi penjualan sparepart jika nominal diisi huruf atau angka negatif. (Sesuai referensi TCC_04).

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
Jumlah Pembayaran: lima puluh ribu rupiah
Metode Pembayaran: Transfer, Kartu Kredit, Kartu Debit, Qris

## Skenario: Admin ingin melakukan proses pembayaran Transaksi untuk pelanggan, tapi bagaimana jika kalau uang yang dibayarkan itu tidak valid (angka minus/mengunakan huruf)

Langkah-langkah:

1. Buka Modul (Penjualan & Kasir)
2. Pilih Menu penjualan sparepart
3. Klik "Transaksi baru"
4. Input Data Transaksi dengan nominal huruf/minus
5. Pilih metode pembayaran
6. Klik "Proses Transaksi"

Expected Result:

Transaksi Gagal dilakukan karena nominal yang dilakukan itu tidak valid (minus/huruf), sistem menampilkan pesan adanya error pada saat meng-input dan meminta pengguna untuk memperbaikinya

Actual Result: > Transaksi Gagal dilakukan karena nominal yang dilakukan itu tidak valid (minus/huruf), sistem menampilkan pesan adanya error pada saat meng-input dan meminta pengguna untuk memperbaikinya
Status: PASS