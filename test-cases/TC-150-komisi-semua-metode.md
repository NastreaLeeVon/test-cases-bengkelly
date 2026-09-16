# TC-150: Komisi Pekerja Semua Metode Pembayaran

Admin melakukan proses pembayaran komisi untuk pekerja, Mengunakan semua metode pembayaran (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa Admin dapat melakukan proses pembayaran komisi untuk pekerja menggunakan semua metode pembayaran secara valid. (Sesuai referensi TCA_01).

## Pre-conditions

1. Admin Sudah Login
2. Modul Penjualan & Kasir (bisa diakses)
3. Menu Komisi
User berada di halaman Komisi https://staging.bengkelly.co.id/commissions

## Test Data

Melakukan Input Pembayaran Komisi Untuk Supplier Seharga: Rp. 370rb
Input Pembayaran: Rp. 370rb
metode pembayaran: tunai, transfer bank, kartu debit, kartu kredit, Qris

## Skenario: Admin ingin melakukan proses pembayaran komisi untuk pekerja, Mengunakan semua metode pembayaran

Langkah-langkah:

1. Buka Modul (Penjualan & Kasir)
2. Pilih Menu Komisi
3. Klik "Proses Pembayaran Komisi"
4. Pilih komisi yang ingin dibayarkan
5. Input jumlah pembayaran
6. Memilih metode pembayaran
7. Klik "Selesaikan pembayaran"

Expected Result:

Komisi berhasil dibayarkan dan riwayat pembayaran disimpan, komisi yang telah lunas ditampilkan dihalaman komisi seperti:
- Tanggal
- Mekanik
- No.PKB
- Layanan
- Status
- Komisi

Actual Result: > Komisi berhasil dibayarkan dan riwayat pembayaran disimpan, komisi yang telah lunas ditampilkan dihalaman komisi seperti: Tanggal, Mekanik, No.PKB, Layanan, Status, Komisi
Status: PASS