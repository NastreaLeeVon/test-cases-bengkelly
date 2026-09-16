# TC-170: Petty Cash Catat Pengeluaran Benar

Admin melakukan pencatatan pengeluaran kecil (petty cash) di bengkel dengan benar (Positive)

## Deskripsi

Test case manual untuk memvalidasi pencatatan transaksi pengeluaran kecil (Petty Cash) dengan data valid. (Sesuai referensi TCF_01).

## Pre-conditions

1. Admin Sudah Login
2. Modul Penjualan & Kasir (bisa diakses)
3. Menu Petty Cash

## Test Data

Input Data:
1. Tanggal: 07/09/2026
2. Metode Bayar: Tunai
3. Jumlah Pengeluaran: Rp 50.000
4. Kebutuhan/deskripsi: membeli cemilan
5. Foto: (upload file)
6. Catatan: (opsional)

## Skenario: Admin ingin melakukan pencatatan pengeluaran kecil didalam bengkel Dengan Benar

Langkah-langkah:

1. Buka Modul (Penjualan & Kasir)
2. Pilih Menu Petty Cash
3. Klik "Catat Pengeluaran"
4. Input data pengeluaran
5. Klik "Simpan Transaksi"

Expected Result:

Pengeluaran berhasil dibuat dan disimpan, sistem menampilkan beberapa data pengeluaran tersebut di menu petty cash seperti:
- Tanggal
- Nomor TRX
- Kebutuhan
- Jumlah
- Metode
- Bukti
- Oleh

Actual Result: > Pengeluaran berhasil dibuat dan disimpan, sistem menampilkan beberapa data pengeluaran tersebut di menu petty cash seperti: Tanggal, Nomor TRX, Kebutuhan, Jumlah, Metode, Bukti, Oleh
Status: PASS