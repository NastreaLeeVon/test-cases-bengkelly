# TC-186: QC Odometer Keluar Lebih Besar Inspeksi Lulus

Sebagai Admin atau Owner saya ingin melihat dan mengecek kondisi kendaraan yang telah melewati PKB sebelum bisa diberikan kepada pemilik kendaraan tersebut (Namun Bagaimana kalau Angka odometer keluar lebih besar dari odometer masuk dengan inspeksi OK/Lulus) (Positive)

## Deskripsi

Test case manual untuk memvalidasi penerimaan QC ketika odometer keluar lebih besar dari odometer masuk dengan inspeksi Lulus. (Sesuai referensi TC_11).

## Pre-conditions

1. Pengguna Sudah Login
2. Modul service bengkel
3. Menu PKB dan QC (Bisa Diakses)

## Test Data

Tes Inspeksi QC
1. Pergantian Part (OK)
2. Maintenance (OK)
3. Kesimpulan Inspeksi (Lulus)
4. Odometer:
- masuk: 1946
- keluar: 2000 (selisih 54)

## Skenario: Sebagai Admin atau Owner saya ingin melihat dan mengecek kondisi kendaraan yang telah melewati PKB sebelum bisa diberikan kepada pemilik kendaraan tersebut (Namun Bagaimana kalau Angka odometer keluar lebih besar dari odometer masuk dengan inspeksi OK/Lulus)

Langkah-langkah:

1. Buka Modul (Service dan bengkel)
2. Pilih menu PKB
3. Pilih PKB yang telah selesai dengan status "Quality Control"
4. Inspeksi Kondisi kendaraan (OK)
5. Kesimpulan Inspeksi (Lulus)
6. Check Odometer kendaraan (masuk: 1946, keluar: 2000)
7. Klik Simpan & Selesaikan QC

Expected Result:

Data QC kendaraan customer yang telah diservice oleh mechanic berhasil dibuat dan disimpan dengan hasil lulus meskipun dengan odometer keluar selisih 54 setelah service, dan menampilkan data QC di menu QC selesai

Actual Result: > Data QC kendaraan customer yang telah diservice oleh mechanic berhasil dibuat dan disimpan dengan hasil lulus meskipun dengan odometer keluar selisih 54 setelah service, dan menampilkan beberapa data QC tersebut di menu QC yang telah selesai seperti: No.PKB, Pelanggan, Kendaraan, Tanggal, Status QC, Aksi
Status: PASS