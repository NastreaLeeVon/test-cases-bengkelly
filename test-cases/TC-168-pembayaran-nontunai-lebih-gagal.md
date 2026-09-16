# TC-168: Pembayaran Non Tunai Lebih Gagal

Admin melakukan pembayaran non-tunai dengan nominal lebih dari yang harus dibayarkan (Failed)

## Deskripsi

Test case manual untuk memvalidasi bahwa sistem menolak pembayaran non-tunai jika nominal lebih dari tagihan. (Sesuai referensi TCE_03).

## Pre-conditions

1. Admin Sudah Login
2. Modul Penjualan & Kasir (bisa diakses)
3. Menu Riwayat Pembayaran

## Test Data

Input Data:
1. Metode Pembayaran: Transfer Bank, Kartu Kredit, Kartu debit, Dompet digital
2. Invoice Yang Perlu dibayar: Rp 88.000
3. Jumlah Pembayaran: Rp 100.000

## Skenario: Admin ingin melakukan proses Transaksi Pembayaran untuk pelanggan dan supplier, tapi bagaimana jika kalau uang yang diberikan itu lebih dengan Pembayaran yang harus dibayarkan (mengunakan metode pembayaran selain tunai)

Langkah-langkah:

1. Buka Modul (Penjualan & Kasir)
2. Pilih Menu Pembayaran
3. Klik "Terima Pembayaran"
4. Pilih transaksi dan klik "Bayar"
5. Pilih metode non-tunai dan input nominal lebih
6. Klik "Selesaikan Pembayaran"

Expected Result:

Transaksi gagal dilakukan karena nominal pembayaran yang dimasukkan untuk metode ini (non-tunai) harus pas dengan harga yang harus dibayar, dan sistem menampilkan pesan bahwa nominal harus diperbaiki

Actual Result: > Transaksi gagal dilakukan karena nominal pembayaran yang dimasukkan untuk metode ini (non-tunai) harus pas dengan harga yang harus dibayar, dan sistem menampilkan pesan bahwa nominal harus diperbaiki
Status: PASS