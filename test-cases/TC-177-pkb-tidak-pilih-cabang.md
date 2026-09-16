# TC-177: Buat PKB Tanpa Memilih Cabang

Sebagai admin, owner, atau mechanic saya ingin mengelola dan membuat data PKB Service untuk kendaraan customer, Namun bagaimana kalau pengguna tidak memilih cabang (Failed)

## Deskripsi

Test case manual untuk memvalidasi bahwa pembuatan PKB tidak dapat dilanjutkan jika pengguna belum memilih cabang. (Sesuai referensi TC_02).

## Pre-conditions

1. Pengguna Sudah Login
2. Modul service bengkel dan menu PKB (Bisa Diakses)

## Test Data

alur PKB tidak bisa dilanjutkan karna pengguna tidak memilih cabang

## Skenario: Sebagai admin, owner, atau mechanic saya ingin mengelola dan membuat data PKB Service untuk kendaraan customer, Namun bagaimana kalau pengguna tidak memilih cabang

Langkah-langkah:

1. Buka Modul (Service dan bengkel)
2. Pilih menu PKB
3. Tidak memilih cabang
4. Alur PKB tidak bisa dilanjutkan karna pengguna tidak memilih cabang

Expected Result:

Data PKB Kendaraan Customer gagal untuk di buat karna pengguna tidak memilih cabang, dan sistem menampilkan pesan peringatan berkata "Harap pilih cabang terlebih dahulu sebelum membuat PKB"

Actual Result: > Data PKB Kendaraan Customer gagal untuk di buat karna pengguna tidak memilih cabang, dan sistem menampilkan pesan peringatan berkata "Harap pilih cabang terlebih dahulu sebelum membuat PKB"
Status: PASS