# TC-191: QC Odometer Keluar Lebih Kecil Inspeksi Bersyarat Gagal

Sebagai Admin atau Owner saya ingin melihat dan mengecek kondisi kendaraan yang telah melewati PKB sebelum bisa diberikan kepada pemilik kendaraan tersebut (Namun Bagaimana kalau Angka odometer keluar lebih kecil dari odometer masuk dengan inspeksi N/A atau Bersyarat) (Failed)

## Deskripsi

Test case manual untuk memvalidasi bahwa sistem menolak QC jika odometer keluar lebih kecil dari odometer masuk pada inspeksi Bersyarat. (Sesuai referensi TC_16).

## Pre-conditions

1. Pengguna Sudah Login
2. Modul service bengkel
3. Menu PKB dan QC (Bisa Diakses)

## Test Data

Tes Inspeksi QC
1. Pergantian Part (N/A)
2. Maintenance (N/A)
3. Kesimpulan Inspeksi (Bersyarat)
4. Odometer:
- masuk: 1946
- keluar: 1900 (selisih -46)

## Skenario: Sebagai Admin atau Owner saya ingin melihat dan mengecek kondisi kendaraan yang telah melewati PKB sebelum bisa diberikan kepada pemilik kendaraan tersebut (Namun Bagaimana kalau Angka odometer keluar lebih kecil dari odometer masuk dengan inspeksi N/A atau Bersyarat)

Langkah-langkah:

1. Buka Modul (Service dan bengkel)
2. Pilih menu PKB
3. Pilih PKB status Quality Control
4. Inspeksi N/A
5. Kesimpulan Bersyarat
6. Check Odometer kendaraan (masuk: 1946, keluar: 1900)
7. Klik Simpan & Selesaikan QC

Expected Result:

Data QC Kendaraan Customer gagal untuk dibuat karena odometer keluar berkurang daripada odometer masuk, dan sistem menampilkan pesan peringatan

Actual Result: > Data QC Kendaraan Customer gagal untuk di buat karna odometer keluar berkurang (selisih 46) daripada odometer masuk (1946) kendaraan pada saat belum diservice, dan sistem menampilkan pesan peringatan
Status: PASS