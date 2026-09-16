# TC-164: Invoice Service Non Tunai Lebih Gagal

Admin melakukan pembayaran Invoice Service non-tunai dengan uang lebih (Failed)

## Deskripsi

Test case manual untuk memvalidasi bahwa pembayaran invoice non-tunai harus pas dengan nominal tagihan. (Sesuai referensi TCD_03).

## Pre-conditions

1. Admin Sudah Login
2. Modul Penjualan & Kasir (bisa diakses)
3. Menu Invoice Service

## Test Data

Input Data:
1. Metode Pembayaran: Transfer Bank, Kartu Kredit, Kartu debit, Dompet digital
2. Invoice Yang Perlu dibayar: Rp 150.000
3. Jumlah Pembayaran: Rp 200.000

## Skenario: Admin ingin melakukan proses Transaksi Invoice service untuk pelanggan, tapi bagaimana jika kalau uang yang diberikan itu lebih dengan invoice yang harus dibayarkan (mengunakan metode pembayaran selain tunai)

Langkah-langkah:

1. Buka Modul (Penjualan & Kasir)
2. Pilih Menu Invoice Service
3. Klik "Buat Invoice"
4. Pilih PKB yang selesai dan buat invoice
5. Terima pembayaran dengan nominal lebih secara non-tunai
6. Klik "Selesaikan Pembayaran"

Expected Result:

Transaksi gagal dilakukan karena nominal pembayaran yang dimasukkan untuk metode ini (non-tunai) harus pas dengan harga yang harus dibayar, dan sistem menampilkan pesan bahwa nominal harus diperbaiki

Actual Result: > Transaksi gagal dilakukan karena nominal pembayaran yang dimasukkan untuk metode ini (non-tunai) harus pas dengan harga yang harus dibayar, dan sistem menampilkan pesan bahwa nominal harus diperbaiki
Status: PASS