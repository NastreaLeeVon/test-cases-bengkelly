# TC-120: Mengedit Tipe Melalui Edit

User mengedit data tipe service melalui halaman Edit Tipe Service (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User mengedit data tipe service melalui halaman Edit Tipe Service.

## Pre-conditions

User berada di halaman https://app.bengkelly.co.id/service-types

## Test Data

Input Data:

Estimasi Durasi: 120 menit

## Skenario: User mengedit data tipe service melalui halaman Edit Tipe Service

Langkah-langkah:

Pilih baris data tipe service

Klik icon Edit pada kolom AKSI

Sistem mengarahkan ke halaman Edit Tipe Service (/service-types/{id}/edit)

Ubah data (misal: Estimasi Durasi / Deskripsi)

Klik button 'Simpan'

Expected Result:

Form Edit Tipe Service terbuka dengan seluruh data terisi otomatis

Data berhasil diperbarui ke database

Menampilkan Toast Notification hijau: 'Berhasil - Tipe service berhasil diupdate!'

Redirect kembali ke tabel /service-types

Actual Result: > Form Edit Tipe Service terbuka dengan seluruh data terisi otomatis

Data berhasil diperbarui ke database
Menampilkan Toast Notification hijau: 'Berhasil - Tipe service berhasil diupdate!'
Redirect kembali ke tabel /service-types
Status: PASS
Actual Result Baru: > Form Edit Tipe Service terbuka dengan seluruh data terisi otomatis
Data berhasil diperbarui ke database
Menampilkan Toast Notification hijau: 'Berhasil - Tipe service berhasil diupdate!'
Redirect kembali ke tabel /service-types

