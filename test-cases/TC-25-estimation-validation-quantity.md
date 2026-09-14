# Tc-25: Estimasi - Admin memastikan quantity sparepart tidak boleh 0

## Deskripsi
Admin memastikan quantity sparepart tidak boleh 0. (Sesuai referensi SBA_011).

## Pre-conditions
- Estimasi memiliki sparepart.

## Skenario: Admin memastikan quantity sparepart tidak boleh 0

Langkah-langkah:

1. Buka detail estimasi
2. Pilih sparepart
3. Ubah quantity menjadi 0
4. Klik simpan

Test Data:

- Quantity: 0

Expected Result:

- Sistem menolak penyimpanan dan menampilkan validasi untuk quantity 0.

Actual Result:

- Quantity 0 ditolak saat disimpan.

**Status:** PASS
