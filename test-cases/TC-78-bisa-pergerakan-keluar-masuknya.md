# TC-78: Admin bisa melihat pergerakan keluar dan masuknya stok barang dari gabungan halaman yang ada di dalam aplikasi seperti stock opname, transfer stock, dan penyesuaian stock

## Deskripsi

Test case manual untuk memvalidasi bahwa Admin bisa melihat pergerakan keluar dan masuknya stok barang dari gabungan halaman yang ada di dalam aplikasi seperti stock opname, transfer stock, dan penyesuaian stock.

## Pre-conditions

- Admin sudah berhasil login

## Test Data

- Tidak ada data.

## Skenario: Admin bisa melihat pergerakan keluar dan masuknya stok barang dari gabungan halaman yang ada di dalam aplikasi seperti stock opname, transfer stock, dan penyesuaian stock

Langkah-langkah:

1. Admin membuka halaman dev.bengkelly.co.id
2. Input username          3.Input password
4. Memilih halaman stok menu dan pembelian di sidebar
5. Memilih sub-menu Mutasi Stok

Expected Result:

- Menampilkan data pergerakan keluar dan masuk stok gudang sesuai dengan stok yang dikeluarkan pada halaman stock opname, transfer stock, dan penyesuaian stok dengan format:
- Tanggal
- Item
- Gudang
- Tipe
- Referensi
- Quantity
- Sebelum
- Sesudah
- User

Actual Result:
Menampilkan data pergerakan keluar dan masuk stok gudang sesuai dengan stok yang dikeluarkan pada halaman stock opname, transfer stock, dan penyesuaian stok dengan format:
- Tanggal
- Item
- Gudang
- Tipe
- Referensi
- Quantity
- Sebelum
- Sesudah
- User
Status: PASS
