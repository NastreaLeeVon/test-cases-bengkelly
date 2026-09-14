# TC-114: Jasa Secara Lengkap

User menambah data Layanan Jasa baru secara lengkap (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User menambah data Layanan Jasa baru secara lengkap.

## Pre-conditions

User berada di halaman Layanan https://app.bengkelly.co.id/services

## Test Data

Input Data:

Cabang: Cabang Utama Bandung

Nama Layanan: Balancing Roda (4 roda)

Kategori: Kaki-kaki & Ban

Harga: Rp 140.000

Durasi Estimasi: 60 menit

Komisi Persen: 5%

## Skenario: User menambah data Layanan Jasa baru secara lengkap

Langkah-langkah:

Klik button '+ Tambah Layanan'

Pada section Informasi Dasar: Pilih Cabang, Isi Nama Layanan, Kategori, Harga, Durasi Estimasi (menit), Deskripsi

Pada section Komisi: Isi Komisi Persen (%) atau Komisi Nominal (Rp)

Pada section Status & Aksi: Set Status Layanan (Aktif)

Klik button 'Simpan Layanan'

Expected Result:

Form Tambah Layanan Baru terbuka (/services/create)

Kode Layanan di-generate otomatis oleh sistem

Data layanan berhasil disimpan ke database

Menampilkan Toast Notification 'Berhasil - Layanan berhasil ditambahkan dengan kode…'

Redirect kembali ke tabel / services dan data baru tampil di daftar

Actual Result: > Form Tambah Layanan Baru terbuka (/services/create)

Kode Layanan di-generate otomatis oleh sistem
Data layanan berhasil disimpan ke database
Menampilkan Toast Notification 'Layanan berhasil ditambahkan dengan kode…'
Redirect kembali ke tabel / services dan data baru tampil di daftar
Status: PASS
Actual Result Baru: > Form Tambah Layanan Baru terbuka (/services/create)
Kode Layanan di-generate otomatis oleh sistem
Data layanan berhasil disimpan ke database
Menampilkan Toast Notification 'Layanan berhasil ditambahkan dengan kode…'
Redirect kembali ke tabel / services dan data baru tampil di daftar

