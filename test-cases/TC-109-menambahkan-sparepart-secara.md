# TC-109: Menambahkan Barang/Sparepart Secara Lengkap

User menambahkan data Barang/Sparepart baru secara lengkap (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User menambahkan data Barang/Sparepart baru secara lengkap.

## Pre-conditions

User berada di halaman Barang/Sparepart https://app.bengkelly.co.id/items

## Test Data

Input Data:

Cabang: Cabang Utama Bandung

Gudang: Gudang Utama

Nama Barang: Oli Mesin Synth 10W-40 (4L)

Kategori: Service Rutin

Satuan: Galon

Merk: Castrol

Part Number: 15400-PLM-A02

Harga Beli: Rp 300.000

Harga Jual: RP 360.000

Stok Minimum: 5 | Stok Awal: 10

Tipe: Spare Part

## Skenario: User menambahkan data Barang/Sparepart baru secara lengkap

Langkah-langkah:

Klik button '+ Tambah Barang'

Pada section Informasi Dasar: Pilih Cabang, Gudang, isi Nama Barang, Kategori, Satuan, Merk/Brand, Part Number, Deskripsi

Pada section Harga & Stok: Isi Harga Beli, Harga Jual, Stok Minimum, Stok Awal

Pada section Status & Aksi: Set Status Barang (Aktif), Tipe Barang (Spare Part/Consumables)

Klik button 'Simpan Barang'

Expected Result:

Form Tambah Barang Baru terbuka (/items/create)

Data barang berhasil disimpan ke database

Menampikan Toast Notification sukses 'Data Barang Berhasil Ditambahkan'

Redirect kembali ke tabel /items dan data baru tampil di daftar

Actual Result: > Form Tambah Barang Baru terbuka (/items/create)

Data barang berhasil disimpan ke database
Menampikan Toast Notification sukses 'Data Barang Berhasil Ditambahkan'
Redirect kembali ke tabel /items dan data baru tampil di daftar
Status: PASS
Actual Result Baru: > Form Tambah Barang Baru terbuka (/items/create)
Data barang berhasil disimpan ke database
Menampikan Toast Notification sukses 'Data Barang Berhasil Ditambahkan'
Redirect kembali ke tabel /items dan data baru tampil di daftar

