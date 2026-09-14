# TC-112: Mengedit Tabel

User mengedit data barang pada tabel (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User mengedit data barang pada tabel.

## Pre-conditions

User berada di halaman daftar barang https://app.bengkelly.co.id/items

## Test Data

Input Data:

Harga Jual: Rp 380.000

## Skenario: User mengedit data barang pada tabel

Langkah-langkah:

Buka halaman Barang/Sparepart

Pilih baris data barang

Klik ikon Edit pada kolom AKSI

Sistem mengarahkan ke halaman Edit Barang (/items/{id}/edit)

Ubah data yang diinginkan (misal: Harga Jual / Deskripsi)

Klik button 'Simpan Barang'

Expected Result:

Halaman Edit Barang Baru terbuka (/items/{id}/edit) dengan seluruh data form terisi otomatis

Data berhasil diperbarui ke database

Menampilkan Toast Notification sukses 'Data Barang Berhasil Diperbarui' / 'Update Success'

Redirect kembali ke tabel /items dan data ter-update di daftar

Actual Result: > Halaman Edit Barang Baru terbuka (/items/{id}/edit) dengan seluruh data form terisi otomatis

Data berhasil diperbarui ke database
Menampilkan Toast Notification sukses 'Data Barang Berhasil Diperbarui' / 'Update Success'
Redirect kembali ke tabel /items dan data ter-update di daftar
Status: PASS
Actual Result Baru: > Halaman Edit Barang Baru terbuka (/items/{id}/edit) dengan seluruh data form terisi otomatis
Data berhasil diperbarui ke database
Menampilkan Toast Notification sukses 'Data Barang Berhasil Diperbarui' / 'Update Success'
Redirect kembali ke tabel /items dan data ter-update di daftar

