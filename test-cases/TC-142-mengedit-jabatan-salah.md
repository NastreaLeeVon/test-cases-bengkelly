# TC-142: Mengedit Data Jabatan Input Salah

User melakukan pengeditan data jabatan namun dengan cara yang salah (Failed)

## Deskripsi

Test case manual untuk memvalidasi bahwa sistem menolak pengeditan data jabatan saat kolom wajib dihapus. (Sesuai referensi TCB_04).

## Pre-conditions

1. Admin Sudah Login
2. Modul SDM & Akses (bisa akses)
3. Menu Jabatan tersedia
User berada di halaman Jabatan https://app.bengkelly.co.id/positions

## Test Data

Edit Data:
Nama Jabatan: (kosong)
Level Hierarki: (kosong)
Deskripsi: (kosong)
(tidak mengedit atau memperbarui data tapi menghapus data yang ada)

## Skenario: User melakukan pengeditan data jabatan namun dengan cara yang salah

Langkah-langkah:

1. Buka Modul (SDM & Akses)
2. Pilih Menu jabatan
3. Klik 'Edit Data'
4. Hapus isi data wajib
5. Klik 'Update jabatan'

Expected Result:

Data Jabatan Gagal untuk diperbarui dan disimpan, sistem menampilkan error pada saat mengedit dan meminta pengguna untuk memperbaiki kesalahan tersebut

Actual Result: > Data Jabatan Gagal untuk diperbarui dan disimpan, sistem menampilkan error pada saat mengedit dan meminta pengguna untuk memperbaiki kesalahan tersebut
Status: PASS