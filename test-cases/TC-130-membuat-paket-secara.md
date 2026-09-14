# TC-130: Membuat Paket Secara Lengkap

User membuat Paket Layanan Baru (Bundling Jasa & Sparepart) secara lengkap (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User membuat Paket Layanan Baru (Bundling Jasa & Sparepart) secara lengkap.

## Pre-conditions

User berada di halaman Paket Layanan https://app.bengkelly.co.id/service-packages

## Test Data

Input Data:

Nama Paket: Paket Service Rem Komplit

Harga Paket: Rp 400.000

Diskon: 0%

Durasi Estimasi: 120 menit

Gudang: Gudang Utama

Included: Jasa Servis Rem + Kampas Rem Depan

## Skenario: User membuat Paket Layanan Baru (Bundling Jasa & Sparepart) secara lengkap

Langkah-langkah:

Klik button '+ Tambah Paket'

Pada Informasi Paket: Isi Nama Paket, Harga Paket, Diskon (%), Durasi Estimasi (menit), Pilih Gudang, dan Deskripsi

Pada section Layanan: Klik '+ Tambah Layanan' lalu pilih jasa yang termasuk dalam paket

Pada section Barang: Klik '+ Tambah Barang' lalu pilih sparepart yang termasuk

Periksa kalkulasi pada Ringkasan Biaya (Total Jasa, Total Barang, Selisih)

Klik button 'Simpan Paket'

Expected Result:

Form Tambah Paket Layanan terbuka (/service-packages/create)

Sistem membuat Kode Paket secara otomatis

Data paket bundling berhasil disimpan ke database

Menampilkan Toast Notification hijau: 'Berhasil - Paket layanan berhasil ditambahkan dengan kode: [KODE_PAKET]'

Redirect kembali ke tabel /service-packages

Actual Result: > Form Tambah Paket Layanan terbuka (/service-packages/create)

Sistem membuat Kode Paket secara otomatis
Data paket bundling berhasil disimpan ke database
Menampilkan Toast Notification hijau: 'Berhasil - Paket layanan berhasil ditambahkan dengan kode: [KODE_PAKET]'
Redirect kembali ke tabel /service-packages
Status: PASS
Actual Result Baru: > Form Tambah Paket Layanan terbuka (/service-packages/create)
Sistem membuat Kode Paket secara otomatis
Data paket bundling berhasil disimpan ke database
Menampilkan Toast Notification hijau: 'Berhasil - Paket layanan berhasil ditambahkan dengan kode: [KODE_PAKET]'
Redirect kembali ke tabel /service-packages

