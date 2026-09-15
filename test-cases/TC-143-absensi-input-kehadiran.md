# TC-143: Absensi Karyawan Input Kehadiran

User mengisi input kehadiran data karyawan secara benar (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User dapat menginput data absensi kehadiran karyawan secara valid. (Sesuai referensi TCC_01).

## Pre-conditions

1. Admin sudah login
2. Modul SDM & Akses (bisa akses)
3. Menu Absensi Karyawan
User berada di halaman Absensi https://app.bengkelly.co.id/attendances

## Test Data

Input Data:
nama Karyawan: Irnan Nasri
Cabang: Cakung Barat
Tanggal: 02/09/2026
Jenis Absen: Absen masuk (check in)
Status: Hadir
waktu absen: 09:02
catatan: (optional)

## Skenario: User mengisi input kehadiran data karyawan, mulai dari nama karyawan, cabang, tanggal, jenis absen, dan status absen

Langkah-langkah:

1. Buka Modul (SDM & Akses)
2. Pilih menu Absensi Karyawan
3. Klik 'Input Absen'
4. Menginput data absen
5. Klik 'simpan Absensi'

Expected Result:

Data absensi karyawan telah berhasil di-input dan disimpan, dan menampilkan absensi tersebut di menu absensi karyawan seperti: Karyawan, Jabatan, Cabang, Jam Masuk & Keluar, Catatan

Actual Result: > Data absensi karyawan telah berhasil di-input dan disimpan, dan menampilkan absensi tersebut di menu absensi karyawan seperti: Karyawan, Jabatan, Cabang, Jam Masuk & Keluar, Catatan
Status: PASS