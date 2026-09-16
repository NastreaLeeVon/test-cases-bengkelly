# TC-171: Petty Cash Catat Pengeluaran Input Salah

Admin melakukan pencatatan pengeluaran kecil namun dengan cara yang salah (Failed)

## Deskripsi

Test case manual untuk memvalidasi bahwa sistem menolak pencatatan petty cash jika form kosong atau nominal salah. (Sesuai referensi TCF_02).

## Pre-conditions

1. Admin Sudah Login
2. Modul Penjualan & Kasir (bisa diakses)
3. Menu Petty Cash

## Test Data

Input Data:
1. Tanggal: Tidak Diisi
2. Metode Bayar: Tidak Disetel
3. Jumlah Pengeluaran: Tidak Meng-input/mengunakan huruf
4. Kebutuhan/deskripsi: Tidak Meng-Input
5. Foto
6. Catatan: opsional

## Skenario: Admin ingin melakukan pencatatan pengeluaran kecil didalam bengkel. Namun Dengan cara yang salah

Langkah-langkah:

1. Buka Modul (Penjualan & Kasir)
2. Pilih Menu Petty Cash
3. Klik "Catat Pengeluaran"
4. Biarkan field kosong / salah input
5. Klik "Simpan Transaksi"

Expected Result:

Data Pengeluaran gagal untuk dibuat dan disimpan, sistem menampilkan adanya error pada saat meng-input dan meminta pengguna untuk memperbaiki kesalahan tersebut

Actual Result: > Data Pengeluaran gagal untuk dibuat dan disimpan, sistem menampilkan adanya error pada saat meng-input dan meminta pengguna untuk memperbaiki kesalahan tersebut
Status: PASS