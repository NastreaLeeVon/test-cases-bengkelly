# TC-199: Invoice Service Pembayaran Kartu Kredit Uang Lebih Gagal

Sebagai Admin, Owner, cashier setelah PKB dan QC selesai selanjutnya saya ingin membuat Invoice Pembayaran untuk pelanggan (Namun bagaimana jika kondisi pembayaran dengan uang yang lebih mengunakan metode Kartu Kredit) (Failed)

## Deskripsi

Test case manual untuk memvalidasi bahwa sistem menolak pembayaran kartu kredit jika nominal melebihi tagihan. (Sesuai referensi TC_24).

## Pre-conditions

1. Pengguna Sudah Login
2. Service dan Bengkel dan Penjualan dan kasir (bisa diakses)
3. Menu PKB dan Invoice Service (Bisa Diakses)

## Test Data

Input Pembayaran:
- Metode pembayaran: Kartu Kredit
- Jumlah yang perlu dibayar: Rp 245.000
- Jumlah Pembayaran: Rp 250.000

## Skenario: Sebagai Admin, Owner, cashier setelah PKB dan QC selesai selanjutnya saya ingin membuat Invoice Pembayaran untuk pelanggan (Namun bagaimana jika kondisi pembayaran dengan uang yang lebih mengunakan metode Kartu Kredit)

Langkah-langkah:

1. Buka Modul (Service dan bengkel)
2. Buat Invoice dari PKB selesai
3. Terima Pembayaran pilih Kartu Kredit
4. Input nominal lebih Rp 250.000
5. Klik Selesaikan Pembayaran

Expected Result:

Transaksi gagal dilakukan karena nominal pembayaran yang dimasukkan untuk metode ini (non-tunai) harus pas dengan harga yang harus dibayar, dan sistem menampilkan pesan bahwa nominal harus diperbaiki

Actual Result: > Transaksi gagal dilakukan karena nominal pembayaran yang dimasukkan untuk metode ini (non-tunai) harus pas dengan harga yang harus dibayar, dan sistem menampilkan pesan bahwa nominal harus diperbaiki
Status: PASS