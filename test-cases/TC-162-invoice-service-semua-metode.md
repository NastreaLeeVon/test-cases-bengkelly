# TC-162: Invoice Service Semua Metode Pembayaran

Admin melakukan proses pembuatan dan pembayaran Invoice service pelanggan menggunakan semua metode pembayaran (Positive)

## Deskripsi

Test case manual untuk memvalidasi pembuatan dan pelunasan Invoice service setelah service PKB dan QC. (Sesuai referensi TCD_01).

## Pre-conditions

1. Admin Sudah Login
2. Modul Penjualan & Kasir (bisa diakses)
3. Menu Invoice Service

## Test Data

Input Data:
1. Metode Pembayaran: Tunai, Transfer Bank, Kartu Kredit, Kartu Debit, Dompet Digital
2. Jumlah Pembayaran: Rp 150.000

## Skenario: Admin ingin melakukan proses Invoice service pelanggan setelah melakukan service PKB dan QC, menggunakan semua metode pembayaran

Langkah-langkah:

1. Buka Modul (Penjualan & Kasir)
2. Pilih Menu Invoice Service
3. Klik "Buat Invoice"
4. Pilih PKB yang telah selesai
5. Klik "Review PKB"
6. Klik "Buat Invoice sekarang"
7. Klik "Terima Pembayaran"
8. Pilih metode pembayaran
9. Input Jumlah Pembayaran
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