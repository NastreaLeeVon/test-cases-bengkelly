# TC-159: Penjualan Sparepart Tunai Uang Lebih

Admin melakukan proses transaksi penjualan sparepart tunai dengan uang lebih (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa transaksi penjualan sparepart secara tunai dengan uang lebih mengembalikan uang kembalian secara tepat. (Sesuai referensi TCC_02).

## Pre-conditions

1. Admin Sudah Login
2. Modul Penjualan & Kasir (bisa diakses)
3. Menu Penjualan Sparepart

## Test Data

Input Data:
Gudang: Cakung
Pelanggan: Indra Lesmana
Item: Cairan Pembersih
Harga Item: Rp 20.000
Jumlah Pembayaran: Rp 50.000
Metode Pembayaran: Tunai

## Skenario: Admin ingin melakukan proses pembayaran Transaksi penjualan untuk pelanggan, tapi bagaimana jika kalau uang yang diberikan itu lebih dengan uang yang harus dibayarkan (mengunakan metode pembayaran tunai)

Langkah-langkah:

1. Buka Modul (Penjualan & Kasir)
2. Pilih Menu penjualan sparepart
3. Klik "Transaksi baru"
4. Input Data Transaksi
5. Pilih metode pembayaran (Tunai)
6. Klik "Proses Transaksi"

Expected Result:

Komisi berhasil dibayarkan karena input pembayaran lebih daripada harga bayar maka sisa uang tersebut dikembalikan sebesar Rp 30.000 (hanya berlaku dengan metode pembayaran tunai) dan riwayat pembayaran disimpan, transaksi yang telah lunas ditampilkan dihalaman komisi seperti: No.invoice, Tanggal, Pelanggan, Cabang, Total, Status, Kasir

Actual Result: > Komisi berhasil dibayarkan karena input pembayaran lebih daripada harga bayar maka sisa uang tersebut dikembalikan sebesar Rp 30.000 (hanya berlaku dengan metode pembayaran tunai) dan riwayat pembayaran disimpan, transaksi yang telah lunas ditampilkan dihalaman komisi seperti: No.invoice, Tanggal, Pelanggan, Cabang, Total, Status, Kasir
Status: PASS