# TC-200: Invoice Service Pembayaran Kartu Kredit Nominal Tidak Valid

Sebagai Admin, Owner, cashier setelah PKB dan QC selesai selanjutnya saya ingin membuat Invoice Pembayaran untuk pelanggan (Namun bagaimana jika meng-input pembayaran dengan cara yang tidak valid (Minus/huruf) mengunakan metode Kartu Kredit) (Failed)

## Deskripsi

Test case manual untuk memvalidasi penolakan sistem pada nominal kartu kredit tidak valid. (Sesuai referensi TC_25).

## Pre-conditions

1. Pengguna Sudah Login
2. Service dan Bengkel dan Penjualan dan kasir (bisa diakses)
3. Menu PKB dan Invoice Service (Bisa Diakses)

## Test Data

Input Pembayaran:
- Metode pembayaran: Kartu Kredit
- Jumlah yang perlu dibayar: Rp 245.000
- Jumlah Pembayaran: Rp -250.000

## Skenario: Sebagai Admin, Owner, cashier setelah PKB dan QC selesai selanjutnya saya ingin membuat Invoice Pembayaran untuk pelanggan (Namun bagaimana jika meng-input pembayaran dengan cara yang tidak valid (Minus/huruf) mengunakan metode Kartu Kredit)

Langkah-langkah:

1. Buka Modul (Service dan bengkel)
2. Buat Invoice dan terima pembayaran Kartu Kredit
3. Input nominal minus Rp -250.000
4. Klik Selesaikan Pembayaran

Expected Result:

Transaksi Gagal dilakukan karena nominal yang dilakukan itu tidak valid (minus/huruf), sistem menampilkan pesan adanya error pada saat meng-input dan meminta pengguna untuk memperbaikinya

Actual Result: > Transaksi Gagal dilakukan karena nominal yang dilakukan itu tidak valid (minus/huruf), sistem menampilkan pesan adanya error pada saat meng-input dan meminta pengguna untuk memperbaikinya
Status: PASS