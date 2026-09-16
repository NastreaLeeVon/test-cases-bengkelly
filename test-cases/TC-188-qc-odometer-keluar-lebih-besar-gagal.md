# TC-188: QC Odometer Keluar Lebih Besar Inspeksi Gagal

Sebagai Admin atau Owner saya ingin melihat dan mengecek kondisi kendaraan yang telah melewati PKB sebelum bisa diberikan kepada pemilik kendaraan tersebut (Namun Bagaimana kalau Angka odometer keluar lebih besar dari odometer masuk dengan inspeksi NOT OK/Gagal) (Positive)

## Deskripsi

Test case manual untuk memvalidasi pencatatan QC dengan odometer keluar valid namun inspeksi Not OK/Gagal. (Sesuai referensi TC_13).

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
- keluar: 2000 (selisih 54)

## Skenario: Sebagai Admin atau Owner saya ingin melihat dan mengecek kondisi kendaraan yang telah melewati PKB sebelum bisa diberikan kepada pemilik kendaraan tersebut (Namun Bagaimana kalau Angka odometer keluar lebih besar dari odometer masuk dengan inspeksi NOT OK/ Gagal)

Langkah-langkah:

1. Buka Modul (Service dan bengkel)
2. Pilih menu PKB
3. Pilih PKB yang telah selesai dengan status "Quality Control"
4. Inspeksi Kondisi kendaraan (NOT OK)
5. Kesimpulan Inspeksi (Gagal)
6. Check Odometer kendaraan (masuk: 1946, keluar: 2000)
7. Klik Simpan & Selesaikan QC

Expected Result:

Data QC berhasil disimpan dengan status Gagal meskipun odometer valid, unit harus diservice ulang dan re-inspect QC

Actual Result: > Data QC kendaraan customer yang telah diservice oleh mechanic berhasil dibuat dan disimpan dengan hasil Gagal meskipun dengan odometer keluar selisih 54 setelah service, Namun Meskipun bisa dibuat QC tersebut dinyatakan gagal karena itu harus diservice ulang dan re-inspect QC
Status: PASS