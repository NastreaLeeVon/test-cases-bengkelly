# TC-184: Inspeksi QC Hasil Not OK atau Gagal

Sebagai Admin atau Owner saya ingin melihat dan mengecek kondisi kendaraan yang telah melewati PKB sebelum bisa diberikan kepada pemilik kendaraan tersebut (Namun Bagaimana kalau hasil inspeksinya itu "Not Ok" atau Gagal) (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa hasil inspeksi QC yang Not OK menghasilkan status Gagal dan instruksi service ulang. (Sesuai referensi TC_09).

## Pre-conditions

1. Pengguna Sudah Login
2. Modul service bengkel
3. Menu PKB dan QC (Bisa Diakses)

## Test Data

Tes Inspeksi QC
1. Pergantian Part (NOT OK)
2. Maintenance (NOT OK)
3. Kesimpulan Inspeksi (Gagal)

## Skenario: Sebagai Admin atau Owner saya ingin melihat dan mengecek kondisi kendaraan yang telah melewati PKB sebelum bisa diberikan kepada pemilik kendaraan tersebut (Namun Bagaimana kalau hasil inspeksinya itu "Not Ok" atau Gagal)

Langkah-langkah:

1. Buka Modul (Service dan bengkel)
2. Pilih menu PKB
3. Pilih PKB yang telah selesai dengan status "Quality Control"
4. Inspeksi Kondisi kendaraan (OK, NOT OK, N/A)
5. Catatan atau opsi pemeriksaan tambahan lainnya (Opsional)
6. Kesimpulan Inspeksi (Gagal)
7. Check Odometer kendaraan
8. Klik Simpan & Selesaikan QC

Expected Result:

Data QC kendaraan customer yang telah diservice oleh mechanic berhasil dibuat dan disimpan dengan hasil Gagal. Karena QC dinyatakan Gagal, owner/admin meminta mechanic untuk diservice ulang dan setelah itu dilakukan re-inspect QC

Actual Result: > Data QC kendaraan customer yang telah diservice berhasil dibuat dan disimpan dengan hasil gagal. Karena QC dinyatakan Gagal, owner/admin meminta mechanic yang melakukan PKB/Service kepada kendaraan untuk diservice ulang dan setelah itu akan dilakukan re-inspect QC setelah diservice ulang
Status: PASS