# TC-149: Role Permission Tolak Permission

User menolak permission yang bisa dilakukan role (Failed)

## Deskripsi

Test case manual untuk memvalidasi bahwa User dapat menolak / uncheck permission fitur pada suatu role. (Sesuai referensi TCD_04).

## Pre-conditions

1. Admin sudah login
2. Modul SDM & Akses
3. Menu Role Permission
User berada di halaman Role Permission https://app.bengkelly.co.id/roles

## Test Data

Input Permission:
Dashboard: [x]
Pelanggan: [x]
Kendaraan: [x]
Master Data: [x]
Stok & Pembelian: [x]
Service Bengkel: [x]
Penjualan & Kasir: [x]
SDM & Akses: [x]
Pengaturan: [x]
Laporan: [x]

## Skenario: User menolak permission yang bisa dilakukan role

Langkah-langkah:

1. Buka Modul (SDM & Akses)
2. Pilih menu Role & Permission
3. Pilih salah satu role dan klik 'lihat permission'
4. Klik fitur-fitur apa saja yang tidak bisa dilakukan sang role (uncheck)
5. Permission disimpan

Expected Result:

Role permission untuk role selesai dilakukan, dan role tersebut tidak bisa untuk mengakses fitur-fitur yang ditolak

Actual Result: > Role permission untuk role selesai dilakukan, dan role tersebut tidak bisa untuk mengakses fitur-fitur yang ditolak
Status: PASS