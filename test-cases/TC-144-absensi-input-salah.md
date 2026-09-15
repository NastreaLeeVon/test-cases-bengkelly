# TC-144: Absensi Karyawan Input Salah

User mengisi input kehadiran data karyawan dengan cara yang salah (Failed)

## Deskripsi

Test case manual untuk memvalidasi bahwa sistem menolak penginputan absensi tanpa data wajib. (Sesuai referensi TCC_02).

## Pre-conditions

1. Admin sudah login
2. Modul SDM & Akses (bisa akses)
3. Menu Absensi Karyawan
User berada di halaman Absensi https://app.bengkelly.co.id/attendances

## Test Data

Input Data:
nama Karyawan: Tidak Memilih Karyawan
Cabang: Tidak Memilih Cabang
Tanggal: tidak mengisi tanggal
Status: Tidak Memilih
waktu absen: tidak meng-input waktu absen

## Skenario: User mengisi input kehadiran data karyawan namun dengan cara yang salah / tanpa memilih data wajib

Langkah-langkah:

1. Buka Modul (SDM & Akses)
2. Pilih Menu Absensi Karyawan
3. Klik 'Input Absen'
4. Submit form kosong
5. Klik 'simpan Absensi'

Expected Result:

Data Absensi gagal untuk dibuat dan disimpan, sistem menampilkan adanya error pada saat meng-input dan meminta pengguna untuk memperbaiki kesalahan tersebut

Actual Result: > Data Absensi gagal untuk dibuat dan disimpan, sistem menampilkan adanya error pada saat meng-input dan meminta pengguna untuk memperbaiki kesalahan tersebut
Status: PASS