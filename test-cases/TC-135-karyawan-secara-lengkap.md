# TC-135: Data Karyawan Secara Lengkap

User menambah data karyawan baru dengan informasi dasar, kontak, dan alamat yang benar (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User menambah data karyawan baru dengan informasi dasar, kontak, dan alamat yang benar. (Sesuai referensi TCA_01).

## Pre-conditions

1. Admin Sudah Login
2. Modul SDM & Akses (bisa akses)
3. Menu Karyawan Tersedia
User berada di halaman Karyawan https://app.bengkelly.co.id/employees

## Test Data

Input Data:
Nama: Irsan nasri
Nama Panggilan: Ilham
Tanggal Lahir: 08 juni 1998
Tempat Lahir: Bandung
jabatan: cashier
cabang penempatan: Cakung Barat
telepon: 0998867589
alamat lengkap: Jalan Braga Bandung
Kota: Bandung
Provinsi: Jawa barat
email: Ilham@gmail.com

## Skenario: User menambah data karyawan baru dengan informasi dasar, kontak, dan alamat yang benar

Langkah-langkah:

1. Buka Modul (SDM & Akses)
2. Pilih Menu Karyawan
3. Klik 'Tambah Karyawan'
4. Input Data (Nama, Kontak, Jabatan, Cabang, Alamat)
5. Klik Daftarkan Karyawan

Expected Result:

Data karyawan baru telah berhasil dibuat dan disimpan, dan menampilkan beberapa data karyawan di menu karyawan seperti:
- Kode Karyawan
- Nama Karyawan
- Jabatan
- Cabang
- Telepon
- Status

Actual Result: > Data karyawan berhasil dibuat dan disimpan, dan menampilkan beberapa data karyawan di menu karyawan seperti: Kode Karyawan, Nama Karyawan, Jabatan, Cabang, Telepon, Status
Status: PASS