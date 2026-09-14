# TC-116: Mengedit Melalui Edit

User mengedit data layanan melalui halaman Edit Layanan (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User mengedit data layanan melalui halaman Edit Layanan.

## Pre-conditions

User berada di halaman https://app.bengkelly.co.id/services

## Test Data

Input Data:

Harga: Rp 150.000

## Skenario: User mengedit data layanan melalui halaman Edit Layanan

Langkah-langkah:

Pilih baris data layanan

Klik icon Edit pada kolom AKSI

Sistem mengarahkan ke halaman Edit Layanan (/services/{id}/edit)

Ubah data (misal: Harga / Durasi Estimasi)

Klik button 'Simpan Layanan'

Expected Result:

Halaman Edit Layanan terbuka dengan seluruh data form terisi otomatis

Data berhasil diperbarui ke database

Menampilkan Toast Notification 'Berhasil - Layanan berhasil diperbarui!'

Redirect kembali ke tabel / services

Actual Result: > Halaman Edit Layanan terbuka dengan seluruh data form terisi otomatis

Data berhasil diperbarui ke database
Menampilkan Toast Notification 'Layanan berhasil diperbarui!'
Redirect kembali ke tabel / services
Status: PASS
Actual Result Baru: > Halaman Edit Layanan terbuka dengan seluruh data form terisi otomatis
Data berhasil diperbarui ke database
Menampilkan Toast Notification 'Layanan berhasil diperbarui!'
Redirect kembali ke tabel / services

