# TC-179: Buat PKB Tanpa Menambahkan Service

Sebagai admin, owner, atau mechanic saya ingin mengelola dan membuat data PKB Service untuk kendaraan customer, Namun Bagaimana Kalau Pengguna Tidak menambahkan service untuk data PKB kendaraan Customer (Failed)

## Deskripsi

Test case manual untuk memvalidasi bahwa sistem menolak pembuatan PKB jika pengguna tidak menambahkan layanan service. (Sesuai referensi TC_04).

## Pre-conditions

1. Pengguna Sudah Login
2. Modul service bengkel dan menu PKB (Bisa Diakses)

## Test Data

Cabang: Cakung Barat
Gudang: Gudang Cakung Barat
Customer: budiono siregar
kendaraan: WULING
tipe Service: ganti oli
Prioritas: SEMUA
tanggal masuk: 11/09/2026
jam masuk: 11.35
tanggal janji selesai: 12/09/2026
jam janji selesai: 13.59
Odometer: 1750
keluhan: ingin ganti oli
Tidak Menambahkan service yang akan dilakukan

## Skenario: Sebagai admin, owner, atau mechanic saya ingin mengelola dan membuat data PKB Service untuk kendaraan customer, Namun Bagaimana Kalau Pengguna Tidak menambahkan service untuk data PKB kendaraan Customer

Langkah-langkah:

1. Buka Modul (Service dan bengkel)
2. Pilih menu PKB
3. Pilih cabang
4. Klik "Buat PKB Baru"
5. Input Data PKB kendaraan
6. Tidak menambahkan service yang akan dilakukan
7. Klik "Buat PKB sekarang"

Expected Result:

Data PKB Kendaraan Customer gagal untuk di buat karna pengguna Tidak Menambahkan service yang akan dilakukan, dan sistem menampilkan pesan peringatan

Actual Result: > Data PKB Kendaraan Customer gagal untuk di buat karna pengguna Tidak Menambahkan service yang akan dilakukan, dan sistem menampilkan pesan peringatan
Status: PASS