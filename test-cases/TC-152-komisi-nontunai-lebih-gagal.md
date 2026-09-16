# TC-152: Komisi Non Tunai Lebih Gagal

Admin melakukan proses pembayaran komisi non-tunai dengan nominal lebih dari yang harus dibayarkan (Failed)

## Deskripsi

Test case manual untuk memvalidasi bahwa sistem menolak pembayaran komisi jika menggunakan metode non-tunai dengan nominal lebih dari tagihan. (Sesuai referensi TCA_03).

## Pre-conditions

1. Admin Sudah Login
2. Modul Penjualan & Kasir (bisa diakses)
3. Menu Komisi
User berada di halaman Komisi https://staging.bengkelly.co.id/commissions

## Test Data

Melakukan Input Pembayaran Komisi Untuk Supplier Seharga: Rp. 370rb
Input Pembayaran: Rp. 500rb
Metode Pembayaran: non-Tunai

## Skenario: Admin ingin melakukan proses pembayaran komisi untuk pekerja, tapi bagaimana jika kalau uang yang diberikan itu lebih dengan komisi yang harus dibayarkan (mengunakan metode pembayaran selain tunai)

Langkah-langkah:

1. Buka Modul (Penjualan & Kasir)
2. Pilih Menu Komisi
3. Klik "Proses Pembayaran Komisi"
4. Pilih komisi yang ingin dibayarkan
5. Input jumlah pembayaran namun melebihi uang yang harus diberikan (mengunakan metode non-Tunai)
6. Klik "Selesaikan pembayaran"

Expected Result:

Komisi gagal dibayarkan karena nominal pembayaran yang dimasukkan untuk metode ini (non-tunai) harus pas dengan harga yang harus dibayar, dan memunculkan pesan bahwa nominal harus diperbaiki

Actual Result: > Komisi gagal dibayarkan karena nominal pembayaran yang dimasukkan untuk metode ini (non-tunai) harus pas dengan harga yang harus dibayar, dan memunculkan pesan bahwa nominal harus diperbaiki
Status: PASS