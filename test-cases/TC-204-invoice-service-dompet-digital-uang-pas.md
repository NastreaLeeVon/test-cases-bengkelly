# TC-204: Invoice Service Pembayaran Dompet Digital Uang Pas

Sebagai Admin, Owner, cashier setelah PKB dan QC selesai selanjutnya saya ingin membuat Invoice Pembayaran untuk pelanggan (Dengan kondisi pembayaran dengan uang pas mengunakan metode Dompet Digital) (Positive)

## Deskripsi

Test case manual untuk memvalidasi pembayaran invoice service pas dengan dompet digital / e-wallet. (Sesuai referensi TC_29).

## Pre-conditions

1. Pengguna Sudah Login
2. Service dan Bengkel dan Penjualan dan kasir (bisa diakses)
3. Menu PKB dan Invoice Service (Bisa Diakses)

## Test Data

Input Pembayaran:
- Metode pembayaran: Dompet Digital
- Jumlah yang perlu dibayar: Rp 245.000
- Jumlah Pembayaran: Rp 245.000

## Skenario: Sebagai Admin, Owner, cashier setelah PKB dan QC selesai selanjutnya saya ingin membuat Invoice Pembayaran untuk pelanggan (Dengan kondisi pembayaran dengan uang pas mengunakan metode Dompet Digital)

Langkah-langkah:

1. Buka Modul (Service dan bengkel)
2. Buat Invoice dari PKB selesai
3. Terima Pembayaran pilih Dompet Digital
4. Input nominal pas Rp 245.000
5. Klik Selesaikan Pembayaran

Expected Result:

Invoice berhasil dibuat, dibayarkan dan riwayat pembayaran disimpan, Invoice yang telah lunas ditampilkan dihalaman Invoice service seperti: No.Invoice, No.PKB, Customer, Kendaraan, Tanggal, Total, Status

Actual Result: > Invoice berhasil dibuat, dibayarkan dan riwayat pembayaran disimpan, Invoice yang telah lunas ditampilkan dihalaman Invoice service seperti: No.Invoice, No.PKB, Customer, Kendaraan, Tanggal, Total, Status
Status: PASS