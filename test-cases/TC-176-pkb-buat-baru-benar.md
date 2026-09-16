# TC-176: Buat PKB Baru Dengan Alur Benar

Sebagai admin, owner, atau mechanic saya ingin mengelola dan membuat data PKB Service untuk kendaraan customer, Dengan Alur yang benar (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa pengguna dapat membuat data PKB Service kendaraan customer dengan alur yang benar. (Sesuai referensi TC_01).

## Pre-conditions

1. Pengguna Sudah Login
2. Modul service bengkel dan menu PKB (Bisa Diakses)
User berada di halaman PKB https://staging.bengkelly.co.id/work-orders

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
Paket Layanan: maintanance
jasa service: Ganti Oli
Parts/sparepart: Oli

## Skenario: Sebagai admin, owner, atau mechanic saya ingin mengelola dan membuat data PKB Service untuk kendaraan customer, Dengan Alur yang benar

Langkah-langkah:

1. Buka Modul (Service dan bengkel)
2. Pilih menu PKB
3. Pilih cabang
4. Klik "Buat PKB Baru"
5. Input Data PKB kendaraan
6. Klik "Tambah Service" dan pilih service yang akan dilakukan
7. Klik "Buat PKB sekarang"

Expected Result:

Data PKB kendaraan customer baru telah berhasil dibuat dan disimpan, dan menampilkan beberapa data PKB di menu PKB seperti:
- No.PKB
- Tanggal
- Customer
- Kendaraan
- Status
- Prioritas
- Aksi

Actual Result: > Data PKB kendaraan customer baru telah berhasil dibuat dan disimpan, dan menampilkan beberapa data PKB di menu PKB seperti: No.PKB, Tanggal, Customer, Kendaraan, Prioritas, Aksi
Status: PASS