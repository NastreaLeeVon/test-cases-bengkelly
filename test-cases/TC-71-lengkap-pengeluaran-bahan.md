# TC-71: Admin ingin melihat detail lengkap data Pengeluaran Bahan

## Deskripsi

Test case manual untuk memvalidasi bahwa Admin ingin melihat detail lengkap data Pengeluaran Bahan.

## Pre-conditions

- Admin sudah berhasil login

## Test Data

- Tidak ada data.

## Skenario: Admin ingin melihat detail lengkap data Pengeluaran Bahan

Langkah-langkah:

1. Admin membuka halaman dev.bengkelly.co.id
2. Input username          3.Input password
4. Memilih halaman stok menu dan pembelian di sidebar
5. Memilih sub-menu Pengeluaran Bahan

Expected Result:

- Menampilkan kolom Search dengan teks "Kode Sparepart"
- Menampilkan kolom Search dengan teks "Nama Sparepart"
- Menampilkan button Reset (Merah)
- Menampilkan tabel dengan kolom:
- Kode
- · Icon sort & filter (Anak panah ke atas dan ke bawah - Ascending & Descending)
- Nama
- · Icon sort & filter (Anak panah ke atas dan ke bawah - Ascending & Descending)
- Harga Beli
- · Icon sort & filter (Anak panah ke atas dan ke bawah - Ascending & Descending)
- Qty
- · Icon sort & filter (Anak panah ke atas dan ke bawah - Ascending & Descending)
- Satuan
- · Icon sort & filter (Anak panah ke atas dan ke bawah - Ascending & Descending)
- Cabang
- · Icon sort & filter (Anak panah ke atas dan ke bawah - Ascending & Descending)
- Menampilkan button Pagination:
- Menampilkan button Previous (disable - teks berwarna hitam)
- Menampilkan button 1 (enable - teks berwarna biru)
- Menampilkan button 2 (enable - teks berwarna biru)
- Menampilkan button Next (enable - teks berwarna biru)

Actual Result:
Menampilkan kolom Search dengan teks "Kode Sparepart"
Menampilkan kolom Search dengan teks "Nama Sparepart"
Menampilkan button Reset (Merah)
Menampilkan tabel dengan kolom:
  - Kode
     · Icon sort & filter (Anak panah ke atas dan ke bawah - Ascending & Descending)
  - Nama
     · Icon sort & filter (Anak panah ke atas dan ke bawah - Ascending & Descending)
  - Harga Beli
     · Icon sort & filter (Anak panah ke atas dan ke bawah - Ascending & Descending)
  - Qty
     · Icon sort & filter (Anak panah ke atas dan ke bawah - Ascending & Descending)
  - Satuan
     · Icon sort & filter (Anak panah ke atas dan ke bawah - Ascending & Descending)
  - Cabang
     · Icon sort & filter (Anak panah ke atas dan ke bawah - Ascending & Descending)
Menampilkan button Pagination:
  - Menampilkan button Previous (disable - teks berwarna hitam)
  - Menampilkan button 1 (enable - teks berwarna biru)
  - Menampilkan button 2 (enable - teks berwarna biru)
  - Menampilkan button Next (enable - teks berwarna biru)
Status: PASS
