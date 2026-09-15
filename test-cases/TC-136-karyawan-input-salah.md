# TC-136: Data Karyawan Input Salah

User menambah data karyawan baru dengan input yang salah (Failed)

## Deskripsi

Test case manual untuk memvalidasi bahwa sistem menolak penambahan data karyawan baru saat input salah. (Sesuai referensi TCA_02).

## Pre-conditions

1. Admin Sudah Login
2. Modul SDM & Akses (bisa akses)
3. Menu Karyawan Tersedia
User berada di halaman Karyawan https://app.bengkelly.co.id/employees

## Test Data

Input Data:
Nama: Irsan nasri
Nama Panggilan: Ilham
Tanggal Lahir: 08 juni 2050 (X)
Tempat Lahir: Bandung
jabatan: tidak diisi (X)
cabang penempatan: tidak diisi (X)
telepon: tidak mengunakan angka (X)
Alamat Lengkap: Jalan Braga Bandung Kota Bandung Provinsi: Jawa Barat
email: Email Tidak Valid (X)

## Skenario: User menambah data karyawan baru tapi dengan cara input yang salah

Langkah-langkah:

1. Buka Modul (SDM & Akses)
2. Pilih Menu Karyawan
3. Klik 'Tambah Karyawan'
4. Input Data salah
5. Klik Daftarkan Karyawan

Expected Result:

Data karyawan gagal untuk dibuat dan disimpan, sistem menampilkan adanya error pada saat meng-input dan meminta pengguna untuk memperbaiki kesalahan tersebut

Actual Result: > Data karyawan gagal untuk dibuat dan disimpan, sistem menampilkan adanya error pada saat meng-input dan meminta pengguna untuk memperbaiki kesalahan tersebut
Status: PASS