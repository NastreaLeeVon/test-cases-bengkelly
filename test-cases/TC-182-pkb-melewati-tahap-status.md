# TC-182: Mengerjakan PKB Melewati Tahapan Status

Sebagai admin, owner, atau mechanic saya ingin mengerjakan PKB Service untuk kendaraan customer, Namun Bagaimana jika saya melewati tahap-tahap status (Failed)

## Deskripsi

Test case manual untuk memvalidasi bahwa sistem mencegah pembaruan status pengerjaan PKB jika melewati urutan status yang sah. (Sesuai referensi TC_07).

## Pre-conditions

1. Pengguna Sudah Login
2. Modul service bengkel dan menu PKB (Bisa Diakses)

## Test Data

Terdapat Mekanik yang mengerjakan PKB "Rian" namun Status yang diubah yang awalnya "menunggu" menjadi "selesai" melewati status "dikerjakan"

## Skenario: Sebagai admin, owner, atau mechanic saya ingin mengerjakan PKB Service untuk kendaraan customer, Namun Bagaimana jika saya melewati tahap-tahap status

Langkah-langkah:

1. Buka Modul (Service dan bengkel)
2. Pilih menu PKB
3. Pilih PKB yang telah dibuat
4. Tambahkan jasa, paket, atau sparepart (Opsional)
5. Tugaskan seorang mekanik untuk mengerjakan PKB
6. Mengubah status namun beberapa tahap ada yang dilewati

Expected Result:

Dikarenakan pada saat mengubah status itu melewati tahap per tahap pengerjaan menyebabkan status pengerjaan gagal untuk diperbarui dan sistem menampilkan pesan peringatan

Actual Result: > Dikarenakan pada saat mengubah status itu melewati tahap per tahap pengerjaan menyebabkan status pengerjaan gagal untuk diperbarui dan sistem menampilkan pesan peringatan
Status: PASS