# TC-163: Invoice Service Tunai Uang Lebih

Admin melakukan proses pembayaran Invoice Service tunai dengan uang lebih (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa pembayaran Invoice Service tunai dengan uang lebih mengembalikan sisa uang kembalian. (Sesuai referensi TCD_02).

## Pre-conditions

1. Admin Sudah Login
2. Modul Penjualan & Kasir (bisa diakses)
3. Menu Invoice Service

## Test Data

Input Data:
1. Metode Pembayaran: Tunai
2. Invoice Yang Perlu dibayar: Rp 150.000
3. Jumlah Pembayaran: Rp 200.000

## Skenario: Admin ingin melakukan proses Pembayaran Invoice Service untuk pelanggan, tapi bagaimana jika kalau uang yang diberikan itu lebih dengan Invoice yang harus dibayarkan (mengunakan metode pembayaran tunai)

Langkah-langkah:

1. Buka Modul (Penjualan & Kasir)
2. Pilih Menu Invoice Service
3. Klik "Buat Invoice"
4. Pilih PKB yang telah selesai
5. Klik "Review PKB"
6. Klik "Buat Invoice sekarang"
7. Klik "Terima Pembayaran"
8. Pilih metode pembayaran Tunai
9. Input Jumlah Pembayaran Rp 200.000
10. Klik "Selesaikan Pembayaran"

Expected Result:

Invoice berhasil dibayarkan karena input pembayaran lebih daripada harga bayar maka sisa uang tersebut dikembalikan sebesar Rp 50.000 (hanya berlaku dengan metode pembayaran tunai) dan riwayat pembayaran disimpan, transaksi yang telah lunas ditampilkan dihalaman Invoice Service seperti: No.invoice, No.PKB, Pelanggan, Kendaraan, Tanggal, total, Status

Actual Result: > Invoice berhasil dibayarkan karena input pembayaran lebih daripada harga bayar maka sisa uang tersebut dikembalikan sebesar Rp 50.000 (hanya berlaku dengan metode pembayaran tunai) dan riwayat pembayaran disimpan, transaksi yang telah lunas ditampilkan dihalaman Invoice Service seperti: No.invoice, No.PKB, Pelanggan, Kendaraan, Tanggal, total, Status
Status: PASS