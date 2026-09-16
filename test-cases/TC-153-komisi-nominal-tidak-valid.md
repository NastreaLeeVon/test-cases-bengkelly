# TC-153: Komisi Pembayaran Tidak Valid

Admin melakukan proses pembayaran komisi dengan nominal tidak valid (Failed)

## Deskripsi

Test case manual untuk memvalidasi bahwa sistem menolak pembayaran komisi jika nominal yang dimasukkan minus atau menggunakan karakter huruf. (Sesuai referensi TCA_04).

## Pre-conditions

1. Admin Sudah Login
2. Modul Penjualan & Kasir (bisa diakses)
3. Menu Komisi
User berada di halaman Komisi https://staging.bengkelly.co.id/commissions

## Test Data

Melakukan Input Pembayaran Komisi Untuk Supplier Seharga: Rp. 370rb
Input Pembayaran: -500rb/lima ratus ribu
Metode Pembayaran: Semua Metode

## Skenario: Admin ingin melakukan proses pembayaran komisi untuk pekerja, tapi bagaimana jika kalau uang yang dibayarkan itu tidak valid (angka minus/mengunakan huruf)

Langkah-langkah:

1. Buka Modul (Penjualan & Kasir)
2. Pilih Menu Komisi
3. Klik "Proses Pembayaran Komisi"
4. Pilih komisi yang ingin dibayarkan
5. Input jumlah pembayaran (mengunakan angka minus atau huruf)
6. Memilih metode pembayaran
7. Klik "Selesaikan pembayaran"

Expected Result:

Komisi Gagal dibayarkan karena nominal yang dilakukan itu tidak valid (minus/huruf), menampilkan pesan adanya error pada saat meng-input dan meminta pengguna untuk memperbaikinya

Actual Result: > Komisi Gagal dibayarkan karena nominal yang dilakukan itu tidak valid (minus/huruf), menampilkan pesan adanya error pada saat meng-input dan meminta pengguna untuk memperbaikinya
Status: PASS