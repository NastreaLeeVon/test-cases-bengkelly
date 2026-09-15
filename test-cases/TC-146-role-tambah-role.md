# TC-146: Role Permission Tambah Role

User menambahkan role baru berisi role dan deskripsi dengan benar (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User dapat menambahkan role baru dengan nama role dan deskripsi yang benar. (Sesuai referensi TCD_01).

## Pre-conditions

1. Admin sudah login
2. Modul SDM & Akses
3. Menu Role Permission
User berada di halaman Role Permission https://app.bengkelly.co.id/roles

## Test Data

Input data:
Nama: Carrier
Deskripsi: Petugas yang bertugas mengangkut barang

## Skenario: User menambahkan role baru berisi role dan deskripsi role dengan benar

Langkah-langkah:

1. Buka Modul (SDM & Akses)
2. Pilih menu Role & Permission
3. Klik 'Tambah Jabatan' / Tambah Role
4. Input data
5. Klik 'Simpan Role Baru'

Expected Result:

Data Role & permission baru telah berhasil dibuat dan disimpan, lalu menampilkan role yang telah dibuat tersebut di halaman role & permission

Actual Result: > Data Role & permission baru telah berhasil dibuat dan disimpan, lalu menampilkan role yang telah dibuat tersebut di halaman role & permission
Status: PASS