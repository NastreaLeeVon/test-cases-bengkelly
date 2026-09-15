# TC-141: Mengedit Data Jabatan Tersedia

User melakukan pengeditan data jabatan yang telah tersedia (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User dapat mengedit data jabatan yang tersedia secara valid. (Sesuai referensi TCB_03).

## Pre-conditions

1. Admin Sudah Login
2. Modul SDM & Akses (bisa akses)
3. Menu Jabatan tersedia
User berada di halaman Jabatan https://app.bengkelly.co.id/positions

## Test Data

Edit Data:
Nama Jabatan: Admin
Level Hierarki: 100
Deskripsi: Mengelola dan mengawasi data, pengguna, serta seluruh aktivitas dalam website.

## Skenario: User melakukan pengeditan data tersedia jika terdapat kesalahan atau pembaruan pada data

Langkah-langkah:

1. Buka Modul (SDM & Akses)
2. Pilih Menu jabatan
3. Klik 'Edit Data'
4. Mengedit level hierarki 100 dan deskripsi
5. Klik 'Update jabatan'

Expected Result:

Data Jabatan berhasil diperbarui dan disimpan, dan menampilkan data jabatan tersebut di menu jabatan seperti: Level, Nama Jabatan, Deskripsi

Actual Result: > Data Jabatan berhasil diperbarui dan disimpan, dan menampilkan data jabatan seperti: Level, Nama Jabatan, Deskripsi
Status: PASS