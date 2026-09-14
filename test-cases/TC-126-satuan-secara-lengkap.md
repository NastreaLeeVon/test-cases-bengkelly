# TC-126: Satuan Secara Lengkap

User menambah data Satuan Barang baru secara lengkap (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User menambah data Satuan Barang baru secara lengkap.

## Pre-conditions

User berada di halaman Satuan https://app.bengkelly.co.id/units

## Test Data

Input Data:

Nama Satuan: Galon

Simbol

## Skenario: User menambah data Satuan Barang baru secara lengkap

Langkah-langkah:

Klik button '+ Tambah Satuan'

Pada form Tambah Satuan Baru: Isi Nama Satuan dan Simbol

Klik button 'Simpan Satuan'

Expected Result:

Form Tambah Satuan Baru terbuka (/units/create)

Data berhasil disimpan ke database

Menampilkan Toast Notification hijau: 'Berhasil - Satuan berhasil ditambahkan!'

Redirect kembali ke tabel /units dan data baru tampil di daftar

Actual Result: > Form Tambah Satuan Baru terbuka (/units/create)

Data berhasil disimpan ke database
Menampilkan Toast Notification hijau: 'Berhasil - Satuan berhasil ditambahkan!'
Redirect kembali ke tabel /units dan data baru tampil di daftar
Status: PASS
Actual Result Baru: > Form Tambah Satuan Baru terbuka (/units/create)
Data berhasil disimpan ke database
Menampilkan Toast Notification hijau: 'Berhasil - Satuan berhasil ditambahkan!'
Redirect kembali ke tabel /units dan data baru tampil di daftar

