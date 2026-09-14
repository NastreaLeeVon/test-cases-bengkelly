# TC-124: Mengedit Kategori Melalui Edit

User mengedit data kategori melalui halaman Edit Kategori (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User mengedit data kategori melalui halaman Edit Kategori.

## Pre-conditions

User berada di halaman https://app.bengkelly.co.id/categories

## Test Data

Input Data:

Deskripsi: Kategori komponen fast moving

## Skenario: User mengedit data kategori melalui halaman Edit Kategori

Langkah-langkah:

Pilih baris data kategori

Klik icon Edit pada kolom AKSI

Sistem mengarahkan ke halaman Edit Kategori (/categories/{id}/edit)

Ubah data (misal: Deskripsi / Nama Kategori)

Klik button 'Simpan Kategori'

Expected Result:

Form Edit Kategori terbuka dengan seluruh data terisi otomatis

Data berhasil diperbarui ke database

Menampilkan Toast Notification hijau: 'Berhasil - Kategori berhasil diperbarui!'

Redirect kembali ke tabel /categories

Actual Result: > Form Edit Kategori terbuka dengan seluruh data terisi otomatis

Data berhasil diperbarui ke database
Menampilkan Toast Notification hijau: 'Berhasil - Kategori berhasil diperbarui!'
Redirect kembali ke tabel /categories
Status: PASS
Actual Result Baru: > Form Edit Kategori terbuka dengan seluruh data terisi otomatis
Data berhasil diperbarui ke database
Menampilkan Toast Notification hijau: 'Berhasil - Kategori berhasil diperbarui!'
Redirect kembali ke tabel /categories

