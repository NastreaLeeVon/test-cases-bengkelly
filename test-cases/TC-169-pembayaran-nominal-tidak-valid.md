# TC-169: Pembayaran Nominal Tidak Valid

Admin melakukan transaksi pembayaran dengan nominal tidak valid (Failed)

## Deskripsi

Test case manual untuk memvalidasi bahwa sistem menolak transaksi pembayaran jika nominal diinput menggunakan karakter huruf atau minus. (Sesuai referensi TCE_04).

## Pre-conditions

1. Admin Sudah Login
2. Modul Penjualan & Kasir (bisa diakses)
3. Menu Riwayat Pembayaran

## Test Data

Input Data:
1. Metode Pembayaran: Tunai, Transfer Bank, Kartu Kredit, Kartu debit, Dompet digital
2. Invoice yang perlu dibayar: Rp 88.000
3. Jumlah Pembayaran: delapan puluh delapan rupiah

## Skenario: Admin ingin melakukan proses Transaksi Pembayaran untuk pelanggan dan supplier, tapi bagaimana jika kalau uang yang dibayarkan itu tidak valid (angka minus/mengunakan huruf)

Langkah-langkah:

1. Buka Modul (Penjualan & Kasir)
2. Pilih Menu Pembayaran
3. Klik "Terima Pembayaran"
4. Masukkan nominal berupa huruf/minus
5. Klik "Selesaikan Pembayaran"

Expected Result:

Transaksi Gagal dilakukan karena nominal yang dilakukan itu tidak valid (minus/huruf), sistem menampilkan pesan adanya error pada saat meng-input dan meminta pengguna untuk memperbaikinya

Actual Result: > Transaksi Gagal dilakukan karena nominal yang dilakukan itu tidak valid (minus/huruf), sistem menampilkan pesan adanya error pada saat meng-input dan meminta pengguna untuk memperbaikinya
Status: PASS