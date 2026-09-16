# TC-173: Petty Cash Ubah Pengeluaran Input Salah

Admin mengedit data pengeluaran kecil namun dengan cara yang salah (Failed)

## Deskripsi

Test case manual untuk memvalidasi bahwa sistem menolak pengeditan data petty cash jika kolom wajib dihapus. (Sesuai referensi TCF_04).

## Pre-conditions

1. Admin Sudah Login
2. Modul Penjualan & Kasir (bisa diakses)
3. Menu Petty Cash

## Test Data

Ubah Data:
1. Tanggal: Tidak Diisi
2. Metode Bayar: Tidak Disetel
3. Jumlah Pengeluaran: Tidak Meng-input/mengunakan huruf
4. Kebutuhan/deskripsi: Tidak Meng-Input
5. Foto
6. Catatan: opsional

## Skenario: Admin ingin melakukan pengeditan untuk data pencatatan pengeluaran kecil didalam bengkel dikarenakan adanya kesalahan data pada saat meng-input. Namun Dengan Cara Yang Salah

Langkah-langkah:

1. Buka Modul (Penjualan & Kasir)
2. Pilih Menu Petty Cash
3. Klik "Ubah Pengeluaran"
4. Hapus data isian wajib
5. Klik "Simpan Perubahan"

Expected Result:

Data Pengeluaran gagal untuk diperbarui dan disimpan, sistem menampilkan adanya error pada saat meng-input dan meminta pengguna untuk memperbaiki kesalahan tersebut

Actual Result: > Data Pengeluaran gagal untuk diperbarui dan disimpan, sistem menampilkan adanya error pada saat meng-input dan meminta pengguna untuk memperbaiki kesalahan tersebut
Status: PASS