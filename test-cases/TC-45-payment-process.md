# TC-45: Pembayaran - Admin memproses pembayaran invoice service

## Deskripsi
Admin memproses pembayaran invoice service. (Sesuai referensi SBA_031).

## Pre-conditions
- Invoice sudah dibuat dan status pembayaran belum dibayar

## Skenario: Admin memproses pembayaran invoice service

Langkah-langkah:

1. Klik terima pembayaran
2. Periksa detail pelanggan dan tagihan
3. Isi jumlah pembayaran
4. Klik selesaikan pembayaran.

Test Data:

- Jumlah bayar sesuai total tagihan.

Expected Result:

- Pembayaran berhasil diproses dan sistem menampilkan bukti pembayaran.

Actual Result:

- Pembayaran berhasil di proses dan bukti pembayaran tampil.

**Status:** PASS
