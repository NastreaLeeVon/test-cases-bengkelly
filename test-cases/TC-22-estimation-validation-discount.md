# TC-22: Estimasi - Validasi discount melebihi total tagihan

## Deskripsi
Validasi discount melebihi total tagihan. (Sesuai referensi SBA_008).

## Pre-conditions
- Estimasi memiliki total Rp.900.000.

## Skenario: Validasi discount melebihi total tagihan

Langkah-langkah:

1. Masukkan discount
2. Isi RP.950.000

Test Data:

- Total:Rp.900.000                           Discount:Rp.950.000

Expected Result:

- Sistem menolak discount dan menampilkan validasi bahwa potongan tdak boleh melebihi total tagihan.

Actual Result:

- Sistem menolak dan menampilkan validasu discount melebihi total.

**Status:** PASS
