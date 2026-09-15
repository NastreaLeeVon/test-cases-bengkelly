# TC-148: Role Permission Konfirmasi Permission

User menceklis/mengonfirmasi permission yang bisa dilakukan role (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User dapat menceklis dan mengonfirmasi hak akses permission suatu role. (Sesuai referensi TCD_03).

## Pre-conditions

1. Admin sudah login
2. Modul SDM & Akses
3. Menu Role Permission
User berada di halaman Role Permission https://app.bengkelly.co.id/roles

## Test Data

Input Permission:
Dashboard: [v]
Pelanggan: [v]
Kendaraan: [v]
Master Data: [v]
Stok & Pembelian: [v]
Service Bengkel: [v]
Penjualan & Kasir: [v]
SDM & Akses: [v]
Pengaturan: [v]
Laporan: [v]

## Skenario: User menceklis/mengonfirmasi permission yang bisa dilakukan role

Langkah-langkah:

1. Buka Modul (SDM & Akses)
2. Pilih menu Role & Permission
3. Pilih salah satu role dan klik 'lihat permission'
4. Klik fitur-fitur apa saja yang bisa dilakukan si role
5. Permission disimpan

Expected Result:

Role permission untuk role selesai dilakukan, dan role tersebut bisa mengelola fitur-fitur yang telah disetujui

Actual Result: > Role permission untuk role selesai dilakukan, dan role tersebut bisa mengelola fitur-fitur yang telah disetujui
Status: PASS