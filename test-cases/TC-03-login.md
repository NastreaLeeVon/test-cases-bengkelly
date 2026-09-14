# TC-03: Login Feature (Negative - Wrong Email)

## Deskripsi
Test case manual untuk memvalidasi bahwa Admin tidak bisa login jika memasukkan email yang salah tapi password benar. (Sesuai referensi TMA_0003).

## Pre-conditions
- Aplikasi dapat diakses dengan normal di staging (`staging.bengkelly.co.id`).
- Admin sudah memiliki password yang terdaftar.
## Skenario: Admin Login dengan email yang salah dan password yang benar (Negative Case)
Langkah-langkah:
1. Admin membuka halaman login.
2. Input Data Username/Email: Masukkan email yang **salah** (contoh: `invalid@email.com`).
3. Input Data Password: Masukkan password yang **valid**.
4. Submit form login.

Expected Result:
- Login tidak berhasil.
- Menampilkan Error Message: **"Email atau Password Salah"**.
