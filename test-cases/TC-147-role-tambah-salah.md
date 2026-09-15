# TC-147: Role Permission Tambah Role Input Salah

User menambahkan role baru namun dengan cara yang salah (Failed)

## Deskripsi

Test case manual untuk memvalidasi bahwa sistem menolak penambahan role baru jika form kosong atau nama duplikat. (Sesuai referensi TCD_02).

## Pre-conditions

1. Admin sudah login
2. Modul SDM & Akses
3. Menu Role Permission
User berada di halaman Role Permission https://app.bengkelly.co.id/roles

## Test Data

Input data:
Nama: (kosong)
Deskripsi: (kosong)
(Tidak meng-input data/data yang diinput itu sama dengan data Role yang sudah tersedia)

## Skenario: User menambahkan role baru berisi role dan deskripsi role, namun dengan cara yang salah

Langkah-langkah:

1. Buka Modul (SDM & Akses)
2. Pilih menu Role & Permission
3. Klik 'Tambah Jabatan' / Tambah Role
4. Submit form kosong
5. Klik 'Simpan Role Baru'

Expected Result:

Data Role & Permission gagal untuk dibuat dan disimpan, sistem menampilkan adanya error pada saat meng-input dan meminta pengguna untuk memperbaiki kesalahan tersebut

Actual Result: > Data Role & Permission gagal untuk dibuat dan disimpan, sistem menampilkan adanya error pada saat meng-input dan meminta pengguna untuk memperbaiki kesalahan tersebut
Status: PASS