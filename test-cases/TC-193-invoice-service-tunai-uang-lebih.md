# TC-193: Invoice Service Pembayaran Tunai Uang Lebih

Sebagai Admin, Owner, cashier setelah PKB dan QC selesai selanjutnya saya ingin membuat Invoice Pembayaran untuk pelanggan (Namun bagaimana jika kondisi pembayaran dengan uang yang lebih mengunakan metode tunai) (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa pembayaran Invoice Service tunai dengan uang lebih mengembalikan uang sisa kembalian dengan benar. (Sesuai referensi TC_18).

## Pre-conditions

1. Pengguna Sudah Login
2. Service dan Bengkel dan Penjualan dan kasir (bisa diakses)
3. Menu PKB dan Invoice Service (Bisa Diakses)

## Test Data

Input Pembayaran:
- Metode pembayaran: Tunai
- Jumlah yang perlu dibayar: Rp 245.000
- Jumlah Pembayaran: Rp 250.000

## Skenario: Sebagai Admin, Owner, cashier setelah PKB dan QC selesai selanjutnya saya ingin membuat Invoice Pembayaran untuk pelanggan (Namun bagaimana jika kondisi pembayaran dengan uang yang lebih mengunakan metode tunai)

Langkah-langkah:

1. Buka Modul (Service dan bengkel)
2. Pilih menu PKB
3. Pilih PKB siap dibuat Invoice
4. Buat Invoice dan terima pembayaran tunai Rp 250.000
5. Selesaikan Pembayaran

Expected Result:

Invoice berhasil dibayarkan karena input pembayaran lebih daripada harga bayar maka sisa uang tersebut dikembalikan sebesar Rp 5.000 (hanya berlaku dengan metode pembayaran tunai) dan riwayat pembayaran disimpan, transaksi yang telah lunas ditampilkan dihalaman Invoice Service

Actual Result: > Invoice berhasil dibayarkan karena input pembayaran lebih daripada harga bayar maka sisa uang tersebut dikembalikan sebesar Rp 5.000 (hanya berlaku dengan metode pembayaran tunai) dan riwayat pembayaran disimpan, transaksi yang telah lunas ditampilkan dihalaman Invoice Service seperti: No.invoice, No.PKB, Pelanggan, Kendaraan, Tanggal, total, Status
Status: PASS