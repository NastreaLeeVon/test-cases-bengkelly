# TC-05: Login Feature (Negative - Empty Fields)

## Deskripsi
Test case manual untuk memvalidasi bahwa Admin tidak bisa login jika mengosongkan email dan password. (Sesuai referensi TMA_0005).

## Pre-conditions
- Aplikasi dapat diakses dengan normal di staging.
## Skenario: Admin Login dengan mengosongkan username dan password (Negative Case)
Langkah-langkah:
1. Admin membuka halaman login.
2. Input Data Username/Email: Dikosongkan.
3. Input Data Password: Dikosongkan.
4. Submit form login.

Expected Result:
- Login tidak berhasil.
- Menampilkan Error Message: **"Please fill out this field."** (Native HTML validation dari browser).
