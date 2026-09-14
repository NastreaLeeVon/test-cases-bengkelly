# TC-128: Mengedit Satuan Melalui Edit

User mengedit data satuan melalui halaman Edit Satuan (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User mengedit data satuan melalui halaman Edit Satuan.

## Pre-conditions

User berada di halaman https://app.bengkelly.co.id/units

## Test Data

Input Data:

Simbol

## Skenario: User mengedit data satuan melalui halaman Edit Satuan

Langkah-langkah:

Pilih baris data satuan

Klik icon Edit pada kolom AKSI

Sistem mengarahkan ke halaman Edit Satuan (/units/{id}/edit)

Ubah data (misal: Simbol / Nama Satuan)

Klik button 'Simpan Satuan'

Expected Result:

Form Edit Satuan terbuka dengan seluruh data terisi otomatis

Data berhasil diperbarui ke database

Menampilkan Toast Notification hijau: 'Berhasil - Satuan berhasil diperbarui!'

Redirect kembali ke tabel /units

Actual Result: > Form Edit Satuan terbuka dengan seluruh data terisi otomatis

Data berhasil diperbarui ke database
Menampilkan Toast Notification hijau: 'Berhasil - Satuan berhasil diperbarui!'
Redirect kembali ke tabel /units
Status: PASS
Actual Result Baru: > Form Edit Satuan terbuka dengan seluruh data terisi otomatis
Data berhasil diperbarui ke database
Menampilkan Toast Notification hijau: 'Berhasil - Satuan berhasil diperbarui!'
Redirect kembali ke tabel /units

