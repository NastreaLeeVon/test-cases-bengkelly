# TC-183: Inspeksi QC Hasil OK atau Lulus

Sebagai Admin atau Owner saya ingin melihat dan mengecek kondisi kendaraan yang telah melewati PKB sebelum bisa diberikan kepada pemilik kendaraan tersebut (Hasil QC "Ok" atau Lulus) (Positive)

## Deskripsi

Test case manual untuk memvalidasi pencatatan hasil Quality Control dengan inspeksi OK dan kesimpulan Lulus. (Sesuai referensi TC_08).

## Pre-conditions

1. Pengguna Sudah Login
2. Modul service bengkel
3. Menu PKB dan QC (Bisa Diakses)

## Test Data

Tes Inspeksi QC
1. Pergantian Part (OK)
2. Maintenance (OK)
3. Kesimpulan Inspeksi (Lulus)

## Skenario: Sebagai Admin atau Owner saya ingin melihat dan mengecek kondisi kendaraan yang telah melewati PKB sebelum bisa diberikan kepada pemilik kendaraan tersebut (Hasil QC "Ok" atau Lulus)

Langkah-langkah:

1. Buka Modul (Service dan bengkel)
2. Pilih menu PKB
3. Pilih PKB yang telah selesai dengan status "Quality Control"
4. Inspeksi Kondisi kendaraan (OK, NOT OK, N/A)
5. Catatan atau opsi pemeriksaan tambahan lainnya (Opsional)
6. Kesimpulan Inspeksi (Lulus)
7. Check Odometer kendaraan
8. Klik Simpan & Selesaikan QC

Expected Result:

Data QC kendaraan customer yang telah diservice oleh mechanic berhasil dibuat dan disimpan dengan hasil lulus, dan menampilkan beberapa data QC tersebut di menu QC yang telah selesai seperti:
- No.PKB
- Pelanggan
- Kendaraan
- Tanggal
- Status QC
- Aksi

Actual Result: > Data QC kendaraan customer yang telah diservice berhasil dibuat dan disimpan, dan menampilkan beberapa data QC tersebut di menu QC yang telah selesai seperti: No.PKB, Pelanggan, Kendaraan, Tanggal, Status QC, Aksi
Status: PASS