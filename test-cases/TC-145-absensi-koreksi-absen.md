# TC-145: Absensi Karyawan Koreksi Absen

User mengedit data absensi karyawan yang telah dibuat (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User dapat mengedit dan mengoreksi data absensi karyawan. (Sesuai referensi TCC_03).

## Pre-conditions

1. Admin sudah login
2. Modul SDM & Akses (bisa akses)
3. Menu Absensi Karyawan
User berada di halaman Absensi https://app.bengkelly.co.id/attendances

## Test Data

Edit Data:
nama Karyawan: Irnan Nasri
Cabang: Cakung Barat
Tanggal: 02/09/2026
Jenis Absen: Absen masuk (check in)
Status: Terlambat
waktu absen: 09:48
catatan: Kena Macet

## Skenario: User mengedit data absensi karyawan yang telah dibuat dikarenakan ada kesalahan dalam meng-input data

Langkah-langkah:

1. Buka Modul (SDM & Akses)
2. Pilih Menu Absensi Karyawan
3. Klik 'Koreksi Absen Karyawan'
4. Input perbaikan data absensi
5. Klik 'simpan Perubahan'

Expected Result:

Data absensi karyawan telah berhasil untuk di koreksi dan disimpan, dan menampilkan absensi tersebut di menu absensi karyawan seperti: Karyawan, Jabatan, Cabang, Jam Masuk & Keluar, Catatan

Actual Result: > Data absensi karyawan telah berhasil untuk di koreksi dan disimpan, dan menampilkan absensi tersebut di menu absensi karyawan seperti: Karyawan, Jabatan, Cabang, Jam Masuk & Keluar, Catatan
Status: PASS