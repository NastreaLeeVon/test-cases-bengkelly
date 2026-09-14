# TC-91: Admin ingin membuat data Stock Opname baru

## Deskripsi

Test case manual untuk memvalidasi bahwa Admin ingin membuat data Stock Opname baru.

## Pre-conditions

- Admin sudah berhasil login

## Test Data

- Tidak ada data.

## Skenario: Admin ingin membuat data Stock Opname baru

Langkah-langkah:

1. Admin membuka halaman dev.bengkelly.co.id
2. Input username          3.Input password
4. Memilih halaman stok menu dan pembelian di sidebar
5. Memilih sub-menu Stok Opname

Expected Result:

- Menampilkan button +Barang
- Menampilkan button +Import
- Menampilkan kolom Keterangan
- Menampilkan button dropdown Gudang
- Menampilkan tabel dengan kolom:
- Kode
- Nama Barang
- Stok
- Fisik
- Lokasi
- Harga Beli
- Harga Jual
- Kolom keterangan dengan teks "Masukkan Keterangan"
- Menampilkan button Batal (Merah)
- Menampilkan button Simpan (Hijau)
- Menampilkan data terbaru di dalam tabel

Actual Result:
Menampilkan button +Barang
Menampilkan button +Import
Menampilkan kolom Keterangan
Menampilkan button dropdown Gudang
Menampilkan tabel dengan kolom:
  - Kode
  - Nama Barang
  - Stok
  - Fisik
  - Lokasi
  - Harga Beli
  - Harga Jual
Kolom keterangan dengan teks "Masukkan Keterangan"
Menampilkan button Batal (Merah)
Menampilkan button Simpan (Hijau)
Menampilkan data terbaru di dalam tabel
Status: PASS
