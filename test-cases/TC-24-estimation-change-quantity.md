# TC-24: Estimasi - Mengubah quantity sparepart

## Deskripsi
Mengubah quantity sparepart. (Sesuai referensi SBA_010).

## Pre-conditions
- Estimasi memiliki sparepart dengan harga satuan Rp.700.000.

## Skenario: Mengubah quantity sparepart

Langkah-langkah:

1. Buka sparepart
2. Ubah qty 1 menjadi 2
3. Periksa subtotal

Test Data:

- Harga satuan: Rp.700.000
- QTY: 2

Expected Result:

- Subtotal sparepart dihitung sesuai quantity, yaitu Rp.140.000.

Actual Result:

- Qty 2 menghasilkan total Rp.140.000.

**Status:** PASS
