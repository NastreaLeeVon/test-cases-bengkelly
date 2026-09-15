# TC-139: Data Jabatan Secara Lengkap

User menambahkan data jabatan baru dengan informasi yang benar (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User menambahkan data jabatan baru dengan nama, level hierarki, dan deskripsi pekerjaan. (Sesuai referensi TCB_01).

## Pre-conditions

1. Admin Sudah Login
2. Modul SDM & Akses (bisa akses)
3. Menu Jabatan tersedia
User berada di halaman Jabatan https://app.bengkelly.co.id/positions

## Test Data

Input Data:
Nama Jabatan: Admin
Level Hierarki: 1
Deskripsi: Admin

## Skenario: User menambahkan data jabatan baru dengan nama, level hierarki, cakupan akses cabang, dan deskripsi pekerjaan

Langkah-langkah:

1. Buka Modul (SDM & Akses)
2. Pilih Menu jabatan
3. Klik 'Tambah Jabatan'
4. Input Data
5. Klik 'Simpan Jabatan'

Expected Result:

Data Jabatan baru telah berhasil dibuat dan disimpan, dan menampilkan data jabatan tersebut di menu jabatan seperti: Level, Nama, Deskripsi

Actual Result: > Data Jabatan baru telah berhasil dibuat dan disimpan, dan menampilkan data jabatan seperti: Level, Nama, Deskripsi
Status: PASS