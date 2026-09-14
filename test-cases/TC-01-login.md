# TC-01: Login Feature

## Deskripsi
Test case manual yang menjadi acuan untuk automated testing di `tests/TC-01-login.spec.ts`.
Target website: Bengkelly Staging.

## Pre-conditions
- Aplikasi dapat diakses dengan normal di staging.
- Data login (URL, Email, Password) ter-set di file `.env`.
## Skenario 1: Login Berhasil (Positive Case)
Langkah-langkah:
1. Navigasi ke halaman login (`https://staging.bengkelly.co.id/`).
2. Masukkan email yang valid (`nusantaramotors@gmail.com`).
3. Masukkan password yang valid (`123123123`).
4. Klik tombol "Login" atau submit.

Expected Result:
- Sistem mengarahkan user ke dalam dashboard aplikasi.
- Form login tidak lagi terlihat di layar.
