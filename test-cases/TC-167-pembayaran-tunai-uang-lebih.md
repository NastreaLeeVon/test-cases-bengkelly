# TC-167: Pembayaran Pelanggan Supplier Tunai Lebih

Admin melakukan proses pembayaran tunai dengan uang lebih (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa pembayaran tunai pada menu Pembayaran mengembalikan uang sisa kembalian dengan benar. (Sesuai referensi TCE_02).

## Pre-conditions

1. Admin Sudah Login
2. Modul Penjualan & Kasir (bisa diakses)
3. Menu Pembayaran

## Test Data

Input Data:
1. Metode Pembayaran: Tunai
2. Invoice Yang Perlu dibayar: Rp 88.000
3. Jumlah Pembayaran: Rp 100.000

## Skenario: Admin ingin melakukan proses Pembayaran untuk pelanggan dan supplier, tapi bagaimana jika kalau uang yang diberikan itu lebih dengan Pembayaran yang harus dibayarkan (mengunakan metode pembayaran tunai)

Langkah-langkah:

1. Buka Modul (Penjualan & Kasir)
2. Pilih Menu Pembayaran
3. Klik "Terima Pembayaran"
4. Pilih transaksi pembayaran
5. Klik "Bayar"
6. Pilih metode pembayaran Tunai
7. Input Jumlah Pembayaran Rp 100.000
8. Klik "Selesaikan Pembayaran"

Expected Result:

Pembayaran berhasil dibayarkan karena input pembayaran lebih daripada harga bayar maka sisa uang tersebut dikembalikan sebesar Rp 12.000 (hanya berlaku dengan metode pembayaran tunai) dan riwayat pembayaran disimpan, transaksi yang telah lunas ditampilkan dihalaman Riwayat Pembayaran seperti: Tanggal, No.Kwitansi, Invoice/PKB, Customer, Cara Bayar, Jumlah

Actual Result: > Pembayaran berhasil dibayarkan karena input pembayaran lebih daripada harga bayar maka sisa uang tersebut dikembalikan sebesar Rp 12.000 (hanya berlaku dengan metode pembayaran tunai) dan riwayat pembayaran disimpan, transaksi yang telah lunas ditampilkan dihalaman Riwayat Pembayaran seperti: Tanggal, No.Kwitansi, Invoice/PKB, Customer, Cara Bayar, Jumlah
Status: PASS