# TC-181: Mengerjakan PKB Tanpa Memilih Mekanik

Sebagai admin, owner, atau mechanic saya ingin mengerjakan PKB Service untuk kendaraan customer, Namun Bagaimana jika mekanik belum dipilih untuk menyelesaikan PKB (Failed)

## Deskripsi

Test case manual untuk memvalidasi bahwa status PKB tidak dapat diubah ke tahap pengerjaan jika belum ada mekanik yang ditugaskan. (Sesuai referensi TC_06).

## Pre-conditions

1. Pengguna Sudah Login
2. Modul service bengkel dan menu PKB (Bisa Diakses)

## Test Data

Tidak memilih Mekanik Untuk mengerjakan PKB kendaraan
Tidak bisa mengubah status pengerjaan karena tidak ada mekanik yang mengerjakan PKB

## Skenario: Sebagai admin, owner, atau mechanic saya ingin mengerjakan PKB Service untuk kendaraan customer, Namun Bagaimana jika mekanik belum dipilih untuk menyelesaikan PKB

Langkah-langkah:

1. Buka Modul (Service dan bengkel)
2. Pilih menu PKB
3. Pilih PKB yang telah dibuat
4. Tambahkan jasa, paket, atau sparepart (Opsional)
5. Tidak menugaskan seorang mekanik untuk mengerjakan PKB
6. Tidak bisa mengubah status pengerjaan karena tidak ada mekanik yang ditugaskan untuk mengerjakan PKB

Expected Result:

Dikarenakan tidak memilih mekanik pada pengerjaan PKB menyebabkan alur terhenti pada status "menunggu" dan tidak bisa melanjutkan kepada alur selanjutnya, dan sistem menampilkan pesan peringatan "Status tidak dapat diubah. Belum ada mekanik yang ditugaskan untuk pekerjaan"

Actual Result: > Dikarenakan tidak memilih mekanik pada pengerjaan PKB menyebabkan alur terhenti pada status "menunggu" dan tidak bisa melanjutkan kepada alur selanjutnya, dan sistem menampilkan pesan peringatan "Status tidak dapat diubah. Belum ada mekanik yang ditugaskan untuk pekerjaan"
Status: PASS