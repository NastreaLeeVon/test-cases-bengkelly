# TC-192: Invoice Service Pembayaran Tunai Uang Pas

Sebagai Admin, Owner, cashier setelah PKB dan QC selesai selanjutnya saya ingin membuat Invoice Pembayaran untuk pelanggan (Dengan kondisi pembayaran dengan uang pas mengunakan metode tunai) (Positive)

## Deskripsi

Test case manual untuk memvalidasi pembuatan dan pelunasan Invoice Service dengan uang pas menggunakan metode tunai. (Sesuai referensi TC_17).

## Pre-conditions

1. Pengguna Sudah Login
2. Service dan Bengkel dan Penjualan dan kasir (bisa diakses)
3. Menu PKB dan Invoice Service (Bisa Diakses)

## Test Data

Input Pembayaran:
- Metode pembayaran: Tunai
- Jumlah yang perlu dibayar: Rp 245.000
- Jumlah Pembayaran: Rp 245.000

## Skenario: Sebagai Admin, Owner, cashier setelah PKB dan QC selesai selanjutnya saya ingin membuat Invoice Pembayaran untuk pelanggan (Dengan kondisi pembayaran dengan uang pas mengunakan metode tunai)

Langkah-langkah:

1. Buka Modul (Service dan bengkel)
2. Pilih menu PKB
3. Pilih PKB yang sudah siap untuk dibuat Invoice
4. Klik "Buat Invoice"
5. Klik "Buat Invoice Sekarang"
6. Dipindahkan Ke Modul Penjualan & kasir, menu Invoice Service
7. Klik "Terima Pembayaran"
8. Pilih Cara Bayar Tunai
9. Input jumlah Pembayaran Rp 245.000
10. Klik "Selesaikan Pembayaran"

Expected Result:

Invoice berhasil dibuat, dibayarkan dan riwayat pembayaran disimpan, Invoice yang telah lunas ditampilkan dihalaman Invoice service seperti:
- No.Invoice
- No.PKB
- Customer
- Kendaraan
- Tanggal
- Total
- Status

Actual Result: > Invoice berhasil dibuat, dibayarkan dan riwayat pembayaran disimpan, Invoice yang telah lunas ditampilkan dihalaman Invoice service seperti: No.Invoice, No.PKB, Customer, Kendaraan, Tanggal, Total, Status
Status: PASS