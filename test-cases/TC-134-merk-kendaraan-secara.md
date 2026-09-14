# TC-134: Merk Kendaraan Secara Lengkap

User menambah data Merk Kendaraan baru secara lengkap (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User menambah data Merk Kendaraan baru secara lengkap.

## Pre-conditions

User berada di halaman Merk Kendaraan https://app.bengkelly.co.id/vehicle-brands

## Test Data

Input Data:

Nama Merk: Toyota

Logo: logo_toyota.png (opsional)

## Skenario: User menambah data Merk Kendaraan baru secara lengkap

Langkah-langkah:

Klik button '+ Tambah Merk'

Pada form Tambah Merk Kendaraan: Isi Nama Merk dan upload Logo Merk (opsional)

Klik button 'Simpan Merk'

Expected Result:

Form Tambah Merk Kendaraan terbuka (/vehicle-brands/create)

Data berhasil disimpan ke database

Menampilkan Toast Notification hijau: 'Berhasil - Merk kendaraan berhasil ditambahkan'

Redirect kembali ke tabel /vehicle-brands dan data baru tampil di daftar

Actual Result: > Form Tambah Merk Kendaraan terbuka (/vehicle-brands/create)

Data berhasil disimpan ke database
Menampilkan Toast Notification hijau: 'Berhasil - Merk kendaraan berhasil ditambahkan'
Redirect kembali ke tabel /vehicle-brands dan data baru tampil di daftar
Status: PASS
Actual Result Baru: > Form Tambah Merk Kendaraan terbuka (/vehicle-brands/create)
Data berhasil disimpan ke database
Menampilkan Toast Notification hijau: 'Berhasil - Merk kendaraan berhasil ditambahkan'
Redirect kembali ke tabel /vehicle-brands dan data baru tampil di daftar
