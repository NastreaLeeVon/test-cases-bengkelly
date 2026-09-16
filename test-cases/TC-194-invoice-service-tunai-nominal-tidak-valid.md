# TC-194: Invoice Service Pembayaran Tunai Nominal Tidak Valid

Sebagai Admin, Owner, cashier setelah PKB dan QC selesai selanjutnya saya ingin membuat Invoice Pembayaran untuk pelanggan (Namun bagaimana jika meng-input pembayaran dengan cara yang tidak valid (Minus/huruf) mengunakan metode tunai) (Failed)

## Deskripsi

Test case manual untuk memvalidasi bahwa sistem menolak pembayaran tunai jika nominal yang dimasukkan tidak valid (minus/huruf). (Sesuai referensi TC_19).

## Pre-conditions

1. Pengguna Sudah Login
2. Service dan Bengkel dan Penjualan dan kasir (bisa diakses)
3. Menu PKB dan Invoice Service (Bisa Diakses)

## Test Data

Input Pembayaran:
- Metode pembayaran: Tunai
- Jumlah yang perlu dibayar: Rp 245.000
- Jumlah Pembayaran: Rp -250.000

## Skenario: Sebagai Admin, Owner, cashier setelah PKB dan QC selesai selanjutnya saya ingin membuat Invoice Pembayaran untuk pelanggan (Namun bagaimana jika meng-input pembayaran dengan cara yang tidak valid (Minus/huruf) mengunakan metode tunai)

Langkah-langkah:

1. Buka Modul (Service dan bengkel)
2. Pilih menu PKB
3. Buat Invoice dan buka pembayaran tunai
4. Input jumlah pembayaran negatif (-250.000) atau huruf
5. Klik "Selesaikan Pembayaran"

Expected Result:

Transaksi Gagal dilakukan karena nominal yang dilakukan itu tidak valid (minus/huruf), sistem menampilkan pesan adanya error pada saat meng-input dan meminta pengguna untuk memperbaikinya

Actual Result: > Transaksi Gagal dilakukan karena nominal yang dilakukan itu tidak valid (minus/huruf), sistem menampilkan pesan adanya error pada saat meng-input dan meminta pengguna untuk memperbaikinya
Status: PASS