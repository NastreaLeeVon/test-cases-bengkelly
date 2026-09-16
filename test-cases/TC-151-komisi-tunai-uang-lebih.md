# TC-151: Komisi Pembayaran Tunai Lebih Uang Kembali

Admin melakukan proses pembayaran komisi dengan uang lebih menggunakan metode tunai (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa jika pembayaran komisi dengan metode tunai melebihi nominal yang harus dibayarkan, sistem mengembalikan sisa uang kembalian. (Sesuai referensi TCA_02).

## Pre-conditions

1. Admin Sudah Login
2. Modul Penjualan & Kasir (bisa diakses)
3. Menu Komisi
User berada di halaman Komisi https://staging.bengkelly.co.id/commissions

## Test Data

Melakukan Input Pembayaran Komisi Untuk Supplier Seharga: Rp. 370rb
Input Pembayaran: Rp. 500rb
Metode Pembayaran: Tunai

## Skenario: Admin ingin melakukan proses pembayaran komisi untuk pekerja, tapi bagaimana jika kalau uang yang diberikan itu lebih dengan komisi yang harus dibayarkan (mengunakan metode pembayaran tunai)

Langkah-langkah:

1. Buka Modul (Penjualan & Kasir)
2. Pilih Menu Komisi
3. Klik "Proses Pembayaran Komisi"
4. Pilih komisi yang ingin dibayarkan
5. Input jumlah pembayaran namun melebihi uang yang harus diberikan
6. Pilih metode pembayaran (Tunai)
7. Klik "Selesaikan pembayaran"

Expected Result:

Komisi berhasil dibayarkan karena input pembayaran lebih daripada harga bayar maka sisa uang tersebut dikembalikan sebesar 130rb (hanya berlaku dengan metode pembayaran tunai) dan riwayat pembayaran disimpan, komisi yang telah lunas ditampilkan dihalaman komisi seperti: Tanggal, Mekanik, No.PKB, Layanan, Status, Komisi

Actual Result: > Komisi berhasil dibayarkan karena input pembayaran lebih daripada harga bayar maka sisa uang tersebut dikembalikan sebesar 130rb (hanya berlaku dengan metode pembayaran tunai) dan riwayat pembayaran disimpan, komisi yang telah lunas ditampilkan dihalaman komisi seperti: Tanggal, Mekanik, No.PKB, Layanan, Status, Komisi
Status: PASS