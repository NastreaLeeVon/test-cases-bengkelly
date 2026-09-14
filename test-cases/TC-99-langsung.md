# TC-99: Admin ingin membuat Pembelian Langsung baru

## Deskripsi

Test case manual untuk memvalidasi bahwa Admin ingin membuat Pembelian Langsung baru.

## Pre-conditions

- Admin sudah berhasil login

## Test Data

- Tidak ada data.

## Skenario: Admin ingin membuat Pembelian Langsung baru

Langkah-langkah:

1. Admin membuka halaman dev.bengkelly.co.id
2. Input username          3.Input password
4. Memilih halaman stok menu dan pembelian di sidebar
5. Memilih sub-menu Pembelian Langsung

Expected Result:

- Menampilkan form select pemilihan invoice pembelian customer
- Menampilkan form informasi transfer:
- Tanggal retur
- Metode pembayaran
- Alasan retur
- Catatan
- Barang yang diretur
- Nilai retur
- Button retur

Actual Result:
Menampilkan form informasi transfer:
- Dari gudang -> gudang
- Tanggal transfer
- Estimasi tiba
- Alasan transfer
- Catatan
Barang yang ditransfer
Ringkasan
Button simpan
Status: PASS
