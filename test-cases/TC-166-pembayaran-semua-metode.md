# TC-166: Pembayaran Pelanggan Supplier Semua Metode

Admin melakukan proses pembayaran pelanggan dan supplier menggunakan semua metode pembayaran (Positive)

## Deskripsi

Test case manual untuk memvalidasi proses pembayaran di menu Riwayat Pembayaran untuk pelanggan dan supplier. (Sesuai referensi TCE_01).

## Pre-conditions

1. Admin Sudah Login
2. Modul Penjualan & Kasir (bisa diakses)
3. Menu Riwayat Pembayaran

## Test Data

Input Data:
1. Metode Pembayaran: Tunai, Transfer Bank, Kartu Kredit, Kartu Debit, Dompet Digital
2. Invoice Yang Perlu Dibayar: Rp 88.000
3. Jumlah Pembayaran: Rp 88.000

## Skenario: Admin ingin melakukan proses pembayaran pelanggan dan supplier , menggunakan semua metode pembayaran

Langkah-langkah:

1. Buka Modul (Penjualan & Kasir)
2. Pilih Menu Pembayaran
3. Klik "Terima Pembayaran"
4. Pilih pembayaran yang ingin dilakukan pelanggan, supplier, dan pekerja
5. Klik "Bayar"
6. Pilih metode pembayaran
7. Input Jumlah Pembayaran
8. Klik "Selesaikan Pembayaran"

Expected Result:

Pembayaran berhasil dibuat, dibayarkan dan riwayat pembayaran disimpan, Pembayaran yang telah lunas ditampilkan dihalaman Riwayat Pembayaran seperti:
- Tanggal
- No.Kwitansi
- Invoice/PKB
- Customer
- Cara bayar
- Jumlah

Actual Result: > Pembayaran berhasil dibuat, dibayarkan dan riwayat pembayaran disimpan, Pembayaran yang telah lunas ditampilkan dihalaman Riwayat Pembayaran seperti: Tanggal, No.Kwitansi, Invoice/PKB, Customer, Cara bayar, Jumlah
Status: PASS