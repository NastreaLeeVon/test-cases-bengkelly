# TC-137: Mengedit Data Karyawan Tersedia

User melakukan pengeditan data pada data karyawan yang telah tersedia (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User dapat melakukan pengeditan data karyawan yang tersedia secara valid. (Sesuai referensi TCA_03).

## Pre-conditions

1. Admin Sudah Login
2. Modul SDM & Akses (bisa akses)
3. Menu Karyawan Tersedia
User berada di halaman Karyawan https://app.bengkelly.co.id/employees

## Test Data

Edit Data:
Nama: Irsan nasri
Nama Panggilan: Ilham
Tanggal Lahir: 08 juni 1998
Tempat Lahir: Bandung
jabatan: cashier
cabang penempatan: Cakung Barat
telepon: 0998867589
alamat lengkap: Jalan wanaherang
Kota: Bogor
Provinsi: Jawa barat
email: Ilham@gmail.com

## Skenario: User melakukan pengeditan data pada data yang telah dibuat atau tersedia

Langkah-langkah:

1. Buka Modul (SDM & Akses)
2. Pilih Menu Karyawan
3. Klik 'Edit Karyawan'
4. Perbaiki Data Alamat, Kota
5. Klik Simpan Perubahan

Expected Result:

Data karyawan berhasil diperbarui dan disimpan, dan menampilkan beberapa data karyawan di menu karyawan seperti: Kode Karyawan, Nama Karyawan, Jabatan, Cabang, Telepon, Status

Actual Result: > Data karyawan berhasil diperbarui dan disimpan, dan menampilkan beberapa data karyawan di menu karyawan seperti: Kode Karyawan, Nama Karyawan, Jabatan, Cabang, Telepon, Status
Status: PASS