# TC-80: Admin ingin mencetak laporan

## Deskripsi

Test case manual untuk memvalidasi bahwa Admin ingin mencetak laporan.

## Pre-conditions

- Admin sudah berhasil login

## Test Data

- Tidak ada data.

## Skenario: Admin ingin mencetak laporan

Langkah-langkah:

1. Admin membuka halaman dev.bengkelly.co.id
2. Input username          3.Input password
4. Memilih halaman stok menu dan pembelian di sidebar
5. Memilih sub-menu Mutasi Stok

Expected Result:

- Menampilkan data laporan mutasi stok dalam format PDF
- Menampilkan button download, print dan close
- Menyediakan 3 format bentuk laporan berupa A4 Layout, POS 58mm, dan POS 80mm
- Semua data bisa masuk ke storage lokal admin dan diubah menjadi PDF

Actual Result:
Menampilkan data laporan mutasi stok dalam format PDF
Menampilkan button download, print dan close
Menyediakan 3 format bentuk laporan berupa A4 Layout, POS 58mm, dan POS 80mm
Semua data bisa masuk ke storage lokal admin dan diubah menjadi PDF
Status: PASS
