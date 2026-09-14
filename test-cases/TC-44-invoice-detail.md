# TC-44: Invoice - Admin memastikan detail invoice service sesuai PKB

## Deskripsi
Admin memastikan detail invoice service sesuai PKB. (Sesuai referensi SBA_030).

## Pre-conditions
- Invoice service sudah berhasil dibuat.

## Skenario: Admin memastikan detail invoice service sesuai PKB

Langkah-langkah:

1. Buka detail invoice
2. Periksa customer dan kendaraan
3. Periksa jasa, sparepart, dan total tagihan
4. Periksa status pembayaran

Test Data:

- Data customer , kendaraan, jasa, sparepart dari PKB.

Expected Result:

- Detail invoice sesuai data PKB dan status awal pembayaran adalah belum dibayar.

Actual Result:

- Detail invoice sesuai dan status pembayaram tampik belum dibayar.

**Status:** PASS
