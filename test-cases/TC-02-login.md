# TC-02: Login Feature (Negative - Wrong Password)

## Deskripsi
Test case manual untuk memvalidasi bahwa Admin tidak bisa login jika memasukkan email yang benar tapi password salah. (Sesuai referensi TMA_0002).
*Catatan: Sesuai request, environment yang dituju adalah Staging, bukan Dev.*

## Pre-conditions
- Aplikasi dapat diakses dengan normal di staging (`staging.bengkelly.co.id`).
- Admin sudah memiliki email yang terdaftar.
## Skenario: Admin Login dengan email yang benar dan password yang salah (Negative Case)
Langkah-langkah:
1. Admin membuka halaman login (`https://staging.bengkelly.co.id/`).
2. Input Data Username/Email: Masukkan email yang valid.
3. Input Data Password: Masukkan password yang **salah** (contoh: `salahpassword123`).
4. Submit form login.

Expected Result:
- Login tidak berhasil.
- Menampilkan Error Message: **"Email atau Password Salah"**.
