# TC-122: Kategori Secara Lengkap

User menambah data Kategori Baru secara lengkap (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User menambah data Kategori Baru secara lengkap.

## Pre-conditions

User berada di halaman Kategori https://app.bengkelly.co.id/categories

## Test Data

Input Data:

Nama Kategori: Fast Moving

Parent Kategori: Tidak ada parent (Kategori Utama)

Deskripsi: (oli, filter oli, filter udara, kampas rem, busi)

## Skenario: User menambah data Kategori Baru secara lengkap

Langkah-langkah:

Klik button '+ Tambah Kategori'

Pada form Tambah Kategori Baru: Isi Nama Kategori, pilih Parent Kategori (misal: Tidak ada parent [Kategori Utama]), dan isi Deskripsi

Klik button 'Simpan Kategori'

Expected Result:

Form Tambah Kategori Baru terbuka (/categories/create)

Data berhasil disimpan ke database

Menampilkan Toast Notification hijau: 'Berhasil - Kategori berhasil ditambahkan!'

Redirect kembali ke tabel /categories dan data baru tampil di daftar

Actual Result: > Form Tambah Kategori Baru terbuka (/categories/create)

Data berhasil disimpan ke database
Menampilkan Toast Notification hijau: 'Berhasil - Kategori berhasil ditambahkan!'
Redirect kembali ke tabel /categories dan data baru tampil di daftar
Status: PASS
Actual Result Baru: > Form Tambah Kategori Baru terbuka (/categories/create)
Data berhasil disimpan ke database
Menampilkan Toast Notification hijau: 'Berhasil - Kategori berhasil ditambahkan!'
Redirect kembali ke tabel /categories dan data baru tampil di daftar

