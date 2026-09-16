# TC-172: Petty Cash Ubah Pengeluaran Benar

Admin mengedit data pengeluaran kecil di petty cash secara benar (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa Admin dapat mengubah data pengeluaran petty cash yang telah dibuat. (Sesuai referensi TCF_03).

## Pre-conditions

1. Admin Sudah Login
2. Modul Penjualan & Kasir (bisa diakses)
3. Menu Petty Cash

## Test Data

Ubah Data:
1. Tanggal: 07/09/2026
2. Metode Bayar: Transfer
3. Jumlah Pengeluaran: Rp 67.000
4. Kebutuhan/deskripsi: membeli cemilan
5. Foto
6. Catatan: opsional

## Skenario: Admin ingin melakukan pengeditan untuk data pencatatan pengeluaran kecil didalam bengkel dikarenakan adanya kesalahan data pada saat meng-input. Dengan Benar

Langkah-langkah:

1. Buka Modul (Penjualan & Kasir)
2. Pilih Menu Petty Cash
3. Klik "Ubah Pengeluaran"
4. Input perubahan data pengeluaran
5. Klik "Simpan Perubahan"

Expected Result:

Data Pengeluaran berhasil diperbarui dan disimpan, dan menampilkan beberapa data Pengeluaran di menu Pengeluaran seperti:
- Tanggal
- Nomor TRX
- Kebutuhan
- Jumlah
- Metode
- Bukti
- Oleh

Actual Result: > Data Pengeluaran berhasil diperbarui dan disimpan, dan menampilkan beberapa data Pengeluaran di menu Pengeluaran seperti: Tanggal, Nomor TRX, Kebutuhan, Jumlah, Metode, Bukti, Oleh
Status: PASS