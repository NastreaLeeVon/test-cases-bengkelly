# TC-190: QC Odometer Keluar Lebih Besar Inspeksi Bersyarat

Sebagai Admin atau Owner saya ingin melihat dan mengecek kondisi kendaraan yang telah melewati PKB sebelum bisa diberikan kepada pemilik kendaraan tersebut (Namun Bagaimana kalau Angka odometer keluar lebih besar dari odometer masuk dengan inspeksi N/A atau Bersyarat) (Positive)

## Deskripsi

Test case manual untuk memvalidasi pencatatan QC dengan odometer keluar valid dan inspeksi Bersyarat. (Sesuai referensi TC_15).

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
- keluar: 2000 (selisih 54)

## Skenario: Sebagai Admin atau Owner saya ingin melihat dan mengecek kondisi kendaraan yang telah melewati PKB sebelum bisa diberikan kepada pemilik kendaraan tersebut (Namun Bagaimana kalau Angka odometer keluar lebih besar dari odometer masuk dengan inspeksi N/A atau Gagal)

Langkah-langkah:

1. Buka Modul (Service dan bengkel)
2. Pilih menu PKB
3. Pilih PKB status Quality Control
4. Inspeksi Kondisi kendaraan (N/A)
5. Kesimpulan Inspeksi (Bersyarat)
6. Check Odometer kendaraan (masuk: 1946, keluar: 2000)
7. Klik Simpan & Selesaikan QC

Expected Result:

Data QC berhasil disimpan dengan hasil Bersyarat meskipun odometer keluar selisih 54 setelah service, dan unit harus diservice ulang serta re-inspect QC

Actual Result: > Data QC kendaraan customer yang telah diservice oleh mechanic berhasil dibuat dan disimpan dengan hasil Bersyarat meskipun dengan odometer keluar selisih 54 setelah service, Namun Meskipun bisa dibuat QC tersebut dinyatakan bersyarat karena itu harus diservice ulang dan re-inspect QC
Status: PASS