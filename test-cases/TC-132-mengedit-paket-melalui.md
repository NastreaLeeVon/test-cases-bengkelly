# TC-132: Mengedit Paket Melalui Edit

User mengedit data paket layanan melalui halaman Edit Paket Layanan (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User mengedit data paket layanan melalui halaman Edit Paket Layanan.

## Pre-conditions

User berada di halaman https://app.bengkelly.co.id/service-packages

## Test Data

Input Data:

Harga Paket: Rp 450.000

## Skenario: User mengedit data paket layanan melalui halaman Edit Paket Layanan

Langkah-langkah:

Pilih baris data paket layanan

Klik icon Edit pada kolom AKSI

Sistem mengarahkan ke halaman Edit Paket Layanan (/service-packages/{id}/edit)

Ubah data (misal: Harga Paket / Item Layanan)

Klik button 'Simpan Paket'

Expected Result:

Form Edit Paket Layanan terbuka dengan seluruh data terisi otomatis

Data berhasil diperbarui ke database

Menampilkan Toast Notification hijau: 'Berhasil - Paket layanan berhasil diperbarui!'

Redirect kembali ke tabel /service-packages

Actual Result: > Form Edit Paket Layanan terbuka dengan seluruh data terisi otomatis

Data berhasil diperbarui ke database
Menampilkan Toast Notification hijau: 'Berhasil - Paket layanan berhasil diperbarui!'
Redirect kembali ke tabel /service-packages
Status: PASS
Actual Result Baru: > Form Edit Paket Layanan terbuka dengan seluruh data terisi otomatis
Data berhasil diperbarui ke database
Menampilkan Toast Notification hijau: 'Berhasil - Paket layanan berhasil diperbarui!'
Redirect kembali ke tabel /service-packages

