# TC-180: Mengerjakan PKB Service Dengan Alur Benar

Sebagai admin, owner, atau mechanic saya ingin mengerjakan PKB Service untuk kendaraan customer, Dengan Alur yang benar (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa pengerjaan PKB service dapat diselesaikan sesuai tahapan alur hingga status Quality Control. (Sesuai referensi TC_05).

## Pre-conditions

1. Pengguna Sudah Login
2. Modul service bengkel dan menu PKB (Bisa Diakses)

## Test Data

Mengerjakan PKB sesuai alurnya: menugaskan mekanik "Rian", pengerjaan bertahap dari menunggu -> dikerjakan -> selesai, ambil part jika ada, lalu status lanjut ke QC

## Skenario: Sebagai admin, owner, atau mechanic saya ingin mengerjakan PKB Service untuk kendaraan customer, Dengan Alur yang benar

Langkah-langkah:

1. Buka Modul (Service dan bengkel)
2. Pilih menu PKB
3. Pilih PKB yang telah dibuat
4. Tambahkan jasa, paket, atau sparepart (Opsional)
5. Tugaskan seorang mekanik untuk mengerjakan PKB
6. Mengubah status tahap per tahap pengerjaan
7. Klik "Mulai Pengerjaan"

Expected Result:

Data PKB kendaraan customer telah selesai dikerjakan, disimpan dan bisa dilanjutkan untuk melakukan QC, sistem menampilkan beberapa data PKB di menu PKB seperti:
- No.PKB
- Tanggal
- Customer
- Kendaraan
- Status (berubah menjadi QC)
- Prioritas
- Aksi

Actual Result: > Data PKB kendaraan customer telah selesai dikerjakan, disimpan dan bisa dilanjutkan untuk melakukan QC, sistem menampilkan beberapa data PKB di menu PKB seperti: No.PKB, Tanggal, Customer, Kendaraan, Status (berubah menjadi QC), Prioritas, Aksi
Status: PASS