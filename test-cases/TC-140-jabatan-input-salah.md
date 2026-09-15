# TC-140: Data Jabatan Input Salah

User menambahkan data jabatan baru dengan cara yang salah (Failed)

## Deskripsi

Test case manual untuk memvalidasi bahwa sistem menolak penambahan jabatan baru saat form kosong atau duplikat. (Sesuai referensi TCB_02).

## Pre-conditions

1. Admin Sudah Login
2. Modul SDM & Akses (bisa akses)
3. Menu Jabatan tersedia
User berada di halaman Jabatan https://app.bengkelly.co.id/positions

## Test Data

Input Data:
Nama Jabatan: (kosong)
Level Hierarki: (kosong)
Deskripsi: (kosong)
(Tidak Meng-input satupun/meng-input data yang sama dengan jabatan yang telah ada)

## Skenario: User menambahkan data jabatan baru namun dengan cara yang salah

Langkah-langkah:

1. Buka Modul (SDM & Akses)
2. Pilih Menu jabatan
3. Klik 'Tambah Jabatan'
4. Submit form kosong
5. Klik 'Simpan Jabatan'

Expected Result:

Data Jabatan gagal untuk dibuat dan disimpan, sistem menampilkan adanya error pada saat meng-input dan meminta pengguna untuk memperbaiki kesalahan tersebut

Actual Result: > Data Jabatan gagal untuk dibuat dan disimpan, sistem menampilkan adanya error pada saat meng-input dan meminta pengguna untuk memperbaiki kesalahan tersebut
Status: PASS