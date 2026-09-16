# TC-165: Invoice Service Nominal Tidak Valid

Admin melakukan pembayaran Invoice Service dengan nominal tidak valid (Failed)

## Deskripsi

Test case manual untuk memvalidasi bahwa sistem menolak pembayaran invoice jika nominal berupa huruf atau minus. (Sesuai referensi TCD_04).

## Pre-conditions

1. Admin Sudah Login
2. Modul Penjualan & Kasir (bisa diakses)
3. Menu Invoice Service

## Test Data

Input Data:
1. Metode Pembayaran: Tunai, Transfer Bank, Kartu Kredit, Kartu debit, Dompet digital
2. Invoice yang perlu dibayar: Rp 150.000
3. Jumlah Pembayaran: dua ratus ribu rupiah

## Skenario: Admin ingin melakukan proses Transaksi Invoice service untuk pelanggan, tapi bagaimana jika kalau uang yang dibayarkan itu tidak valid (angka minus/mengunakan huruf)

Langkah-langkah:

1. Buka Modul (Penjualan & Kasir)
2. Pilih Menu Invoice Service
3. Buat Invoice dan terima pembayaran
4. Masukkan nominal berupa huruf atau negatif
5. Klik "Selesaikan Pembayaran"

Expected Result:

Transaksi Gagal dilakukan karena nominal yang dilakukan itu tidak valid (minus/huruf), sistem menampilkan pesan adanya error pada saat meng-input dan meminta pengguna untuk memperbaikinya

Actual Result: > Transaksi Gagal dilakukan karena nominal yang dilakukan itu tidak valid (minus/huruf), sistem menampilkan pesan adanya error pada saat meng-input dan meminta pengguna untuk memperbaikinya
Status: PASS