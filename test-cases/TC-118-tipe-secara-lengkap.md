# TC-118: Tipe Secara Lengkap

User menambah data Tipe Service baru secara lengkap (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User menambah data Tipe Service baru secara lengkap.

## Pre-conditions

User berada di halaman Tipe Service https://app.bengkelly.co.id/service-types

## Test Data

Input Data:

Cabang: Cabang Utama Bandung

Nama Tipe Service: Service Berkala

Deskripsi: Servis rutin yang dilakukan berdasarkan jarak…

Estimasi Durasi: 120 menit

Icon: Wrench

Warna: Gray

## Skenario: User menambah data Tipe Service baru secara lengkap

Langkah-langkah:

Klik button '+ Tambah Tipe'

Pada form Tambah Tipe Service: Pilih Cabang, Isi Nama Tipe Service, Deskripsi, Estimasi Durasi (menit), pilih Icon (misal: Wrench), dan Warna (misal: Gray)

Klik button 'Simpan'

Expected Result:

Form Tambah Tipe Service terbuka (/service-types/create)

Data berhasil disimpan ke database

Menampilkan Toast Notification hijau: 'Berhasil - Tipe service berhasil ditambahkan!'

Redirect kembali ke tabel /service-types dan data baru tampil di daftar

Actual Result: > Form Tambah Tipe Service terbuka (/service-types/create)

Data berhasil disimpan ke database
Menampilkan Toast Notification hijau: 'Berhasil - Tipe service berhasil ditambahkan!'
Redirect kembali ke tabel /service-types dan data baru tampil di daftar
Status: PASS
Actual Result Baru: > Form Tambah Tipe Service terbuka (/service-types/create)
Data berhasil disimpan ke database
Menampilkan Toast Notification hijau: 'Berhasil - Tipe service berhasil ditambahkan!'
Redirect kembali ke tabel /service-types dan data baru tampil di daftar

