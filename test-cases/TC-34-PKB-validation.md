# TC-34: PKB - Admin melakukan validasi field wajib

## Deskripsi
Admin melakukan validasi field wajib. (Sesuai referensi SBA_020).

## Pre-conditions
- Admin berada pada form buat PKB baru.

## Skenario: Admin melakukan validasi field wajib

Langkah-langkah:

1. Buka form PKB
2. Kosongkan field wajib
3. Klik buat PKB sekarang

Test Data:

- Field wajib dikosongkan.

Expected Result:

- Sistem menolak pembuatan PKB dan menampilkan validasi pada field wajib.

Actual Result:

- Pembuatan PKB tidak dilanjutkan saat field wajib belum diisi.

**Status:** PASS
