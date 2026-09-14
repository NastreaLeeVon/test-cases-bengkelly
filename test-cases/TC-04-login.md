# TC-04: Login Feature (Negative - Wrong Email & Password)

## Deskripsi
Test case manual untuk memvalidasi bahwa Admin tidak bisa login jika memasukkan email dan password yang salah. (Sesuai referensi TMA_0004).

## Pre-conditions
- Aplikasi dapat diakses dengan normal di staging.
- Admin sudah memiliki akun yang terdaftar.
## Skenario: Admin Login dengan email dan password yang salah (Negative Case)
Langkah-langkah:
1. Admin membuka halaman login.
2. Input Data Username/Email: Masukkan email yang **salah**.
3. Input Data Password: Masukkan password yang **salah**.
4. Submit form login.

Expected Result:
- Login tidak berhasil.
- Menampilkan Error Message: **"Email atau Password Salah"**.
