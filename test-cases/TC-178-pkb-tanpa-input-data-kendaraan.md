# TC-178: Buat PKB Tanpa Input Data Kendaraan

Sebagai admin, owner, atau mechanic saya ingin mengelola dan membuat data PKB Service untuk kendaraan customer, Namun Bagaimana Kalau Pengguna Tidak meng-input data PKB kendaraan Customer (Failed)

## Deskripsi

Test case manual untuk memvalidasi bahwa sistem menolak pembuatan PKB jika data kendaraan customer dikosongkan. (Sesuai referensi TC_03).

## Pre-conditions

1. Pengguna Sudah Login
2. Modul service bengkel dan menu PKB (Bisa Diakses)

## Test Data

Cabang: Cakung Barat
Mencoba satu per satu input-an untuk melihat reaksi mereka jika mencoba untuk "Buat PKB Sekarang" ketika kolom inputan tersebut kosong
Paket Layanan: maintanance
jasa service: Ganti Oli
Parts/sparepart: Oli

## Skenario: Sebagai admin, owner, atau mechanic saya ingin mengelola dan membuat data PKB Service untuk kendaraan customer, Namun Bagaimana Kalau Pengguna Tidak meng-input data PKB kendaraan Customer

Langkah-langkah:

1. Buka Modul (Service dan bengkel)
2. Pilih menu PKB
3. Pilih cabang
4. Klik "Buat PKB Baru"
5. Tidak meng-Input Data PKB kendaraan
6. Klik "Tambah Service" dan pilih service yang akan dilakukan
7. Klik "Buat PKB sekarang"

Expected Result:

Data PKB Kendaraan Customer gagal untuk di buat karna pengguna tidak meng-input data, dan sistem menampilkan pesan peringatan kolom wajib diisi

Actual Result: > Data PKB Kendaraan Customer gagal untuk di buat karna pengguna tidak meng-input data, dan sistem menampilkan pesan peringatan kolom wajib diisi
Status: PASS