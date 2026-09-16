# TC-189: QC Odometer Keluar Lebih Kecil Inspeksi Gagal

Sebagai Admin atau Owner saya ingin melihat dan mengecek kondisi kendaraan yang telah melewati PKB sebelum bisa diberikan kepada pemilik kendaraan tersebut (Namun Bagaimana kalau Angka odometer keluar lebih kecil dari odometer masuk dengan inspeksi NOT OK/Gagal) (Failed)

## Deskripsi

Test case manual untuk memvalidasi penolakan sistem saat odometer keluar lebih kecil dari odometer masuk pada inspeksi Not OK. (Sesuai referensi TC_14).

## Pre-conditions

1. Pengguna Sudah Login
2. Modul service bengkel
3. Menu PKB dan QC (Bisa Diakses)

## Test Data

Tes Inspeksi QC
1. Pergantian Part (NOT OK)
2. Maintenance (NOT OK)
3. Kesimpulan Inspeksi (Gagal)
4. Odometer:
- masuk: 1946
- keluar: 1900 (selisih -46)

## Skenario: Sebagai Admin atau Owner saya ingin melihat dan mengecek kondisi kendaraan yang telah melewati PKB sebelum bisa diberikan kepada pemilik kendaraan tersebut (Namun Bagaimana kalau Angka odometer keluar lebih kecil dari odometer masuk dengan inspeksi NOT OK/Gagal)

Langkah-langkah:

1. Buka Modul (Service dan bengkel)
2. Pilih menu PKB
3. Pilih PKB yang telah selesai dengan status "Quality Control"
4. Inspeksi Kondisi kendaraan (NOT OK)
5. Kesimpulan Inspeksi (Gagal)
6. Check Odometer kendaraan (masuk: 1946, keluar: 1900)
7. Klik Simpan & Selesaikan QC

Expected Result:

Data QC Kendaraan Customer gagal untuk dibuat karena odometer keluar berkurang daripada odometer masuk, dan sistem menampilkan pesan peringatan

Actual Result: > Data QC Kendaraan Customer gagal untuk di buat karna odometer keluar berkurang (selisih 46) daripada odometer masuk (1946) kendaraan pada saat belum diservice, dan sistem menampilkan pesan peringatan
Status: PASS