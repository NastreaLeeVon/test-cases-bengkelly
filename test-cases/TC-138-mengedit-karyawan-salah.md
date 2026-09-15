# TC-138: Mengedit Data Karyawan Input Salah

User melakukan pengeditan data karyawan dengan cara yang salah (Failed)

## Deskripsi

Test case manual untuk memvalidasi bahwa sistem menolak pengeditan data karyawan dengan input tidak valid. (Sesuai referensi TCA_04).

## Pre-conditions

1. Admin Sudah Login
2. Modul SDM & Akses (bisa akses)
3. Menu Karyawan Tersedia
User berada di halaman Karyawan https://app.bengkelly.co.id/employees

## Test Data

Edit Data:
Tanggal Lahir: 08 juni 2050 (X)
jabatan: tidak diisi (X)
cabang penempatan: tidak diisi (X)
telepon: tidak mengunakan angka (X)
email: Email Tidak Valid (X)

## Skenario: User melakukan pengeditan data karyawan namun dengan cara yang salah

Langkah-langkah:

1. Buka Modul (SDM & Akses)
2. Pilih Menu Karyawan
3. Klik 'Edit Karyawan'
4. Ubah Data dengan nilai salah
5. Klik Simpan Perubahan

Expected Result:

Data karyawan gagal untuk diperbarui dan disimpan, sistem menampilkan adanya error pada saat meng-input dan meminta pengguna untuk memperbaiki kesalahan tersebut

Actual Result: > Data karyawan gagal untuk diperbarui dan disimpan, sistem menampilkan adanya error pada saat meng-input dan meminta pengguna untuk memperbaiki kesalahan tersebut
Status: PASS