# TC-185: Inspeksi QC Hasil NA atau Bersyarat

Sebagai Admin atau Owner saya ingin melihat dan mengecek kondisi kendaraan yang telah melewati PKB sebelum bisa diberikan kepada pemilik kendaraan tersebut (Namun Bagaimana kalau hasil inspeksinya itu "N/A/No Answer" atau Bersyarat) (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa hasil inspeksi QC N/A menghasilkan status Bersyarat untuk ditindaklanjuti. (Sesuai referensi TC_10).

## Pre-conditions

1. Pengguna Sudah Login
2. Modul service bengkel
3. Menu PKB dan QC (Bisa Diakses)

## Test Data

Tes Inspeksi QC
1. Pergantian Part (N/A)
2. Maintenance (N/A)
3. Kesimpulan Inspeksi (Bersyarat)

## Skenario: Sebagai Admin atau Owner saya ingin melihat dan mengecek kondisi kendaraan yang telah melewati PKB sebelum bisa diberikan kepada pemilik kendaraan tersebut (Namun Bagaimana kalau hasil inspeksinya itu "N/A/No Answer" atau Bersyarat)

Langkah-langkah:

1. Buka Modul (Service dan bengkel)
2. Pilih menu PKB
3. Pilih PKB yang telah selesai dengan status "Quality Control"
4. Inspeksi Kondisi kendaraan (OK, NOT OK, N/A)
5. Catatan atau opsi pemeriksaan tambahan lainnya (Opsional)
6. Kesimpulan Inspeksi (Bersyarat)
7. Check Odometer kendaraan
8. Klik Simpan & Selesaikan QC

Expected Result:

Data QC kendaraan customer yang telah diservice oleh mechanic berhasil dibuat dan disimpan dengan hasil Bersyarat. Karena QC dinyatakan bersyarat, owner/admin meminta mechanic untuk diservice ulang dan dilakukan re-inspect QC

Actual Result: > Data QC kendaraan customer yang telah diservice berhasil dibuat dan disimpan dengan hasil Bersyarat. Karena QC dinyatakan bersyarat sang owner/admin meminta mechanic yang melakukan PKB/Service kepada kendaraan untuk diservice ulang dan setelah itu akan dilakukan re-inspect QC setelah diservice ulang
Status: PASS