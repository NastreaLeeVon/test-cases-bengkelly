# TC-103: Toast Selamat Datang

## Deskripsi

Test case manual untuk memvalidasi bahwa user melihat toast notification dan banner selamat datang setelah berhasil login.

## Pre-conditions

- User berhasil melakukan login dengan akun terdaftar

## Test Data

- Tidak ada data.

## Skenario

Langkah-langkah:

1. Selesaikan proses login di https://app.bengkelly.co.id/
2. Sistem otomatis mengarahkan ke halaman Dashboard (/dashboard)

Expected Result:

- Menampilkan Toast Notification hijau di sudut kanan atas: "Berhasil - Selamat Datang, [nama_user]!"
- Menampilkan Banner Biru: "Selamat Datang, [nama_user]!" disertai badge role dan sub-teks "Kelola bengkel Anda dengan mudah dan efisien"

Actual Result:

- Menampilkan Toast Notification hijau di sudut kanan atas: "Berhasil - Selamat datang, [nama_user]!"
- Menampilkan Banner Biru: "Selamat Datang, [nama_user]!" disertai badge role dan sub-teks "Kelola bengkel Anda dengan mudah dan efisien"

Status: PASS
