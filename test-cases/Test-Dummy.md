# BKL_006: User melihat ucapan selamat datang dan Toast Notification saat berhasil login (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User melihat ucapan selamat datang dan Toast Notification saat berhasil login.

## Pre-conditions

User berhasil melakukan login dengan akun terdaftar

## Test Data

Tidak ada data.

## Skenario: User melihat ucapan selamat datang dan Toast Notification saat berhasil login

Langkah-langkah:

Selesaikan proses login di https://app.bengkelly.co.id/

Sistem otomatis mengarahkan ke halaman Dashboard (/dashboard)

Expected Result:

Menampilkan Toast Notification hijau di sudut kanan atas: 'Berhasil - Selamat Datang, [nama_user]!'

Menampilkan Banner Biru: 'Selamat Datang, [nama_user]!' disertai badge role (misal: OWNER) dan sub-teks 'Kelola bengkel Anda dengan mudah dan efisien'

Actual Result (Excel): > Menampilkan Toast Notification hijau di sudut kanan atas: 'Berhasil - Selamat datang, [nama_user]!'

Menampilkan Banner Banner Biru: 'Selamat Datang, [nama_user]!' disertai badge role (misal: OWNER) dan sub-teks 'Kelola bengkel Anda dengan mudah dan efisien'
Status (Excel): PASS
Actual Result Baru: > Menampilkan Toast Notification hijau di sudut kanan atas: 'Berhasil - Selamat datang, [nama_user]!'
Menampilkan Banner Banner Biru: 'Selamat Datang, [nama_user]!' disertai badge role (misal: OWNER) dan sub-teks 'Kelola bengkel Anda dengan mudah dan efisien'

# BKL_007: User melihat ringkasan card statistik di section 'RINGKASAN HARI INI' (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User melihat ringkasan card statistik di section 'RINGKASAN HARI INI'.

## Pre-conditions

User berada di halaman Dashboard https://app.bengkelly.co.id/dashboard

## Test Data

Tidak ada data.

## Skenario: User melihat ringkasan card statistik di section 'RINGKASAN HARI INI'

Langkah-langkah:

Perhatikan bagian section 'RINGKASAN HARI INI' pada halaman Dashboard

Expected Result:

Menampilkan 4 Card Statistik Utama:

BOOKING HARI INI (dengan indikator perbandingan dari kemarin)

UNIT DIKERJAKAN (dengan info jumlah mekanik aktif)

PKB AKTIF (dengan info jumlah menunggu QC)

OMSET HARI INI (dengan nominal Rp dan % perbandingan dari kemarin)

Actual Result (Excel): > Menampilkan 4 Card Statistik Utama:

BOOKING HARI INI (dengan indikator perbandingan dari kemarin)

UNIT DIKERJAKAN (dengan info jumlah mekanik aktif)

PKB AKTIF (dengan info jumlah menunggu QC)

OMSET HARI INI (dengan nominal Rp dan % perbandingan dari kemarin)
Status (Excel): PASS
Actual Result Baru: > Menampilkan 4 Card Statistik Utama:

BOOKING HARI INI (dengan indikator perbandingan dari kemarin)

UNIT DIKERJAKAN (dengan info jumlah mekanik aktif)

PKB AKTIF (dengan info jumlah menunggu QC)

OMSET HARI INI (dengan nominal Rp dan % perbandingan dari kemarin)

# BKL_008: User melihat grafik dan distribusi data pada section 'ANALISIS & TREND' (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User melihat grafik dan distribusi data pada section 'ANALISIS & TREND'.

## Pre-conditions

User berada di halaman Dashboard https://app.bengkelly.co.id/dashboard

## Test Data

Tidak ada data.

## Skenario: User melihat grafik dan distribusi data pada section 'ANALISIS & TREND'

Langkah-langkah:

Scroll bagian 'ANALISIS & TREND'

Perhatikan grafik Omset Mingguan & Status PKB

Expected Result:

Menampilkan Grafik Line 'Omset Mingguan' (dengan filter dropdown rentang waktu, misal: 7 Hari Terakhir)

Menampilkan Diagram/Chart 'Status PKB' (Distribusi status work order beserta indikator Total PKB)

Actual Result (Excel): > Menampilkan Grafik Line 'Omset Mingguan' (dengan filter dropdown rentang waktu, misal: 7 Hari Terakhir)

Menampilkan Diagram/Chart 'Status PKB' (Distribusi status work order beserta indikator Total PKB)
Status (Excel): PASS
Actual Result Baru: > Menampilkan Grafik Line 'Omset Mingguan' (dengan filter dropdown rentang waktu, misal: 7 Hari Terakhir)
Menampilkan Diagram/Chart 'Status PKB' (Distribusi status work order beserta indikator Total PKB)

# BKL_009: User melihat widget informasi pada section 'AKTIVITAS TERKINI' (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User melihat widget informasi pada section 'AKTIVITAS TERKINI'.

## Pre-conditions

User berada di halaman Dashboard https://app.bengkelly.co.id/dashboard

## Test Data

Tidak ada data.

## Skenario: User melihat widget informasi pada section 'AKTIVITAS TERKINI'

Langkah-langkah:

Scroll bagian paling bawah Dashboard pada section 'AKTIVITAS TERKINI'

Expected Result:

Menampilkan Widget 'Booking Hari Ini' dilengkapi button 'LIHAT SEMUA ->'

Menampilkan Widget Alert 'Stok Menipis' dilengkapi button 'LIHAT SEMUA ->'

Actual Result (Excel): > Menampilkan Widget 'Booking Hari Ini' dilengkapi button 'LIHAT SEMUA ->'

Menampilkan Widget Alert 'Stok Menipis' dilengkapi button 'LIHAT SEMUA ->'
Status (Excel): PASS
Actual Result Baru: > Menampilkan Widget 'Booking Hari Ini' dilengkapi button 'LIHAT SEMUA ->'
Menampilkan Widget Alert 'Stok Menipis' dilengkapi button 'LIHAT SEMUA ->'

# BKL_010: User menggunakan elemen Top Bar (Search Menu, Filter Cabang, Profil User) (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User menggunakan elemen Top Bar (Search Menu, Filter Cabang, Profil User).

## Pre-conditions

User berada di halaman Dashboard https://app.bengkelly.co.id/dashboard

## Test Data

Dropdown: 'Semua Cabang'

## Skenario: User menggunakan elemen Top Bar (Search Menu, Filter Cabang, Profil User)

Langkah-langkah:

Amati bagian Top Bar atas

Cek kolom Cari Menu (Ctrl+K), Dropdown Cabang, Notifikasi Lonceng, dan Profil User

Expected Result:

Menampilkan Kolom 'Cari menu... [Ctrl+K]' di sidebar

Menampilkan Dropdown Cabang (default: 'Semua Cabang')

Menampilkan Icon Notifikasi Lonceng

Menampilkan Nama & Email User yang sedang aktif serta Avatar Profil

Actual Result (Excel): > Menampilkan Kolom 'Cari menu... [Ctrl+K]' di sidebar

Menampilkan Dropdown Cabang (default: 'Semua Cabang')
Menampilkan Icon Notifikasi Lonceng
Menampilkan Nama & Email User yang sedang aktif serta Avatar Profil
Status (Excel): PASS
Actual Result Baru: > Menampilkan Kolom 'Cari menu... [Ctrl+K]' di sidebar
Menampilkan Dropdown Cabang (default: 'Semua Cabang')
Menampilkan Icon Notifikasi Lonceng
Menampilkan Nama & Email User yang sedang aktif serta Avatar Profil

# BKL_011: User melihat daftar data barang dan summary  card pada halaman Barang/Sparepart (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User melihat daftar data barang dan summary  card pada halaman Barang/Sparepart.

## Pre-conditions

User berhasil Login dan berada di Dashboard https://app.bengkelly.co.id/dashboard

## Test Data

Tidak ada data.

## Skenario: User melihat daftar data barang dan summary  card pada halaman Barang/Sparepart

Langkah-langkah:

Klik dropdown Master Data di sidebar

Klik sub menu Barang/Sparepart

Expected Result:

Halaman Barang/Sparepart terbuka (/items)

Menampilkan 4 Card Summary: TOTAL, SPARE PART, CONSUMABLES, STOK TIPIS

Menampilkan tabel barang dengan kolom: CABANG, BARANG, KATEGORI, TIPE, HARGA, STATUS, AKSI (Icon Detail, Edit, Hapus)

Actual Result (Excel): > Halaman Barang/Sparepart terbuka (/items)

Menampilkan 4 Card Summary: TOTAL, SPARE PART, CONSUMABLES, STOK TIPIS
Menampilkan tabel barang dengan kolom: CABANG, BARANG, KATEGORI, TIPE, HARGA, STATUS, AKSI (Icon Detail, Edit, Hapus)
Status (Excel): PASS
Actual Result Baru: > Halaman Barang/Sparepart terbuka (/items)
Menampilkan 4 Card Summary: TOTAL, SPARE PART, CONSUMABLES, STOK TIPIS
Menampilkan tabel barang dengan kolom: CABANG, BARANG, KATEGORI, TIPE, HARGA, STATUS, AKSI (Icon Detail, Edit, Hapus)

# BKL_012: User menambahkan data Barang/Sparepart baru secara lengkap (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User menambahkan data Barang/Sparepart baru secara lengkap.

## Pre-conditions

User berada di halaman Barang/Sparepart https://app.bengkelly.co.id/items

## Test Data

Input Data:

Cabang: Cabang Utama Bandung

Gudang: Gudang Utama

Nama Barang: Oli Mesin Synth 10W-40 (4L)

Kategori: Service Rutin

Satuan: Galon

Merk: Castrol

Part Number: 15400-PLM-A02

Harga Beli: Rp 300.000

Harga Jual: RP 360.000

Stok Minimum: 5 | Stok Awal: 10

Tipe: Spare Part

## Skenario: User menambahkan data Barang/Sparepart baru secara lengkap

Langkah-langkah:

Klik button '+ Tambah Barang'

Pada section Informasi Dasar: Pilih Cabang, Gudang, isi Nama Barang, Kategori, Satuan, Merk/Brand, Part Number, Deskripsi

Pada section Harga & Stok: Isi Harga Beli, Harga Jual, Stok Minimum, Stok Awal

Pada section Status & Aksi: Set Status Barang (Aktif), Tipe Barang (Spare Part/Consumables)

Klik button 'Simpan Barang'

Expected Result:

Form Tambah Barang Baru terbuka (/items/create)

Data barang berhasil disimpan ke database

Menampikan Toast Notification sukses 'Data Barang Berhasil Ditambahkan'

Redirect kembali ke tabel /items dan data baru tampil di daftar

Actual Result (Excel): > Form Tambah Barang Baru terbuka (/items/create)

Data barang berhasil disimpan ke database
Menampikan Toast Notification sukses 'Data Barang Berhasil Ditambahkan'
Redirect kembali ke tabel /items dan data baru tampil di daftar
Status (Excel): PASS
Actual Result Baru: > Form Tambah Barang Baru terbuka (/items/create)
Data barang berhasil disimpan ke database
Menampikan Toast Notification sukses 'Data Barang Berhasil Ditambahkan'
Redirect kembali ke tabel /items dan data baru tampil di daftar

# BKL_013: User menyimpan barang sebagai draft menggunakan button 'Simpan Draft' (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User menyimpan barang sebagai draft menggunakan button 'Simpan Draft'.

## Pre-conditions

User berada di form Tambah Barang Baru https://app.bengkelly.co.id/items/create

## Test Data

Input Data:

Nama Barang: Kampas Rem Depan (Draft)

Status: Draft

## Skenario: User menyimpan barang sebagai draft menggunakan button 'Simpan Draft'

Langkah-langkah:

Isi beberapa data dasar barang

Klik Button 'Simpan Draft'

Expected Result:

Data tersimpan dengan status Draft

Menampilkan Toast Notification 'Draft Berhasil Disimpan'

Actual Result (Excel): > Data tersimpan dengan status Draft

Menampilkan Toast Notification 'Draft Berhasil Disimpan'
Status (Excel): PASS
Actual Result Baru: > Data tersimpan dengan status Draft
Menampilkan Toast Notification 'Draft Berhasil Disimpan'

# BKL_014: User mencari data barang menggunakan kolom Search 'Cari kode, nama, atau merk barang…' (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User mencari data barang menggunakan kolom Search 'Cari kode, nama, atau merk barang…'.

## Pre-conditions

User berada di halaman daftar barang https://app.bengkelly.co.id/items

## Test Data

Search: 'Air Radiator' / 'Prestone'

## Skenario: User mencari data barang menggunakan kolom Search 'Cari kode, nama, atau merk barang…'

Langkah-langkah:

Ketik kata kunci pada kolom 'Cari kode, nama, atau merk barang…'

Klik ikon Kaca Pembesar / tekan Enter

Expected Result:

Tabel memperbarui data secara otomatis

Hanya menampilkan baris barang yang sesuai dengan kata kunci pencarian

Actual Result (Excel): > Tabel memperbarui data secara otomatis

Hanya menampilkan baris barang yang sesuai dengan kata kunci pencarian
Status (Excel): PASS
Actual Result Baru: > Tabel memperbarui data secara otomatis
Hanya menampilkan baris barang yang sesuai dengan kata kunci pencarian

# BKL_015: User mengedit data barang pada tabel (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User mengedit data barang pada tabel.

## Pre-conditions

User berada di halaman daftar barang https://app.bengkelly.co.id/items

## Test Data

Input Data:

Harga Jual: Rp 380.000

## Skenario: User mengedit data barang pada tabel

Langkah-langkah:

Buka halaman Barang/Sparepart

Pilih baris data barang

Klik ikon Edit pada kolom AKSI

Sistem mengarahkan ke halaman Edit Barang (/items/{id}/edit)

Ubah data yang diinginkan (misal: Harga Jual / Deskripsi)

Klik button 'Simpan Barang'

Expected Result:

Halaman Edit Barang Baru terbuka (/items/{id}/edit) dengan seluruh data form terisi otomatis

Data berhasil diperbarui ke database

Menampilkan Toast Notification sukses 'Data Barang Berhasil Diperbarui' / 'Update Success'

Redirect kembali ke tabel /items dan data ter-update di daftar

Actual Result (Excel): > Halaman Edit Barang Baru terbuka (/items/{id}/edit) dengan seluruh data form terisi otomatis

Data berhasil diperbarui ke database
Menampilkan Toast Notification sukses 'Data Barang Berhasil Diperbarui' / 'Update Success'
Redirect kembali ke tabel /items dan data ter-update di daftar
Status (Excel): PASS
Actual Result Baru: > Halaman Edit Barang Baru terbuka (/items/{id}/edit) dengan seluruh data form terisi otomatis
Data berhasil diperbarui ke database
Menampilkan Toast Notification sukses 'Data Barang Berhasil Diperbarui' / 'Update Success'
Redirect kembali ke tabel /items dan data ter-update di daftar

# BKL_016: User melihat daftar data layanan jasa dan summary card pada halaman Layanan (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User melihat daftar data layanan jasa dan summary card pada halaman Layanan.

## Pre-conditions

User berhasil Login dan berada di Dashboard https://app.bengkelly.co.id/dashboard

## Test Data

Tidak ada data.

## Skenario: User melihat daftar data layanan jasa dan summary card pada halaman Layanan

Langkah-langkah:

Klik dropdown Master Data di sidebar

Klik sub menu Layanan

Expected Result:

Halaman Layanan terbuka (/services)

Menampilkan 4 Card Summary: TOTAL, AKTIF, NONAKTIF, KATEGORI

Menampilkan button '+ Tambah Layanan'

Menampilkan tabel layanan dengan kolom: LAYANAN, CABANG, KATEGORI, HARGA, DURASI, STATUS, AKSI (Icon Detail, Edit, Hapus)

Actual Result (Excel): > Halaman Layanan terbuka (/services)

Menampilkan 4 Card Summary: TOTAL, AKTIF, NONAKTIF, KATEGORI
Menampilkan button '+ Tambah Layanan'
Menampilkan tabel layanan dengan kolom: LAYANAN, CABANG, KATEGORI, HARGA, DURASI, STATUS, AKSI (Icon Detail, Edit, Hapus)
Status (Excel): PASS
Actual Result Baru: > Halaman Layanan terbuka (/services)
Menampilkan 4 Card Summary: TOTAL, AKTIF, NONAKTIF, KATEGORI
Menampilkan button '+ Tambah Layanan'
Menampilkan tabel layanan dengan kolom: LAYANAN, CABANG, KATEGORI, HARGA, DURASI, STATUS, AKSI (Icon Detail, Edit, Hapus)

# BKL_017: User menambah data Layanan Jasa baru secara lengkap (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User menambah data Layanan Jasa baru secara lengkap.

## Pre-conditions

User berada di halaman Layanan https://app.bengkelly.co.id/services

## Test Data

Input Data:

Cabang: Cabang Utama Bandung

Nama Layanan: Balancing Roda (4 roda)

Kategori: Kaki-kaki & Ban

Harga: Rp 140.000

Durasi Estimasi: 60 menit

Komisi Persen: 5%

## Skenario: User menambah data Layanan Jasa baru secara lengkap

Langkah-langkah:

Klik button '+ Tambah Layanan'

Pada section Informasi Dasar: Pilih Cabang, Isi Nama Layanan, Kategori, Harga, Durasi Estimasi (menit), Deskripsi

Pada section Komisi: Isi Komisi Persen (%) atau Komisi Nominal (Rp)

Pada section Status & Aksi: Set Status Layanan (Aktif)

Klik button 'Simpan Layanan'

Expected Result:

Form Tambah Layanan Baru terbuka (/services/create)

Kode Layanan di-generate otomatis oleh sistem

Data layanan berhasil disimpan ke database

Menampilkan Toast Notification 'Berhasil - Layanan berhasil ditambahkan dengan kode…'

Redirect kembali ke tabel / services dan data baru tampil di daftar

Actual Result (Excel): > Form Tambah Layanan Baru terbuka (/services/create)

Kode Layanan di-generate otomatis oleh sistem
Data layanan berhasil disimpan ke database
Menampilkan Toast Notification 'Layanan berhasil ditambahkan dengan kode…'
Redirect kembali ke tabel / services dan data baru tampil di daftar
Status (Excel): PASS
Actual Result Baru: > Form Tambah Layanan Baru terbuka (/services/create)
Kode Layanan di-generate otomatis oleh sistem
Data layanan berhasil disimpan ke database
Menampilkan Toast Notification 'Layanan berhasil ditambahkan dengan kode…'
Redirect kembali ke tabel / services dan data baru tampil di daftar

# BKL_018: User mencari data layanan menggunakan kolom Search 'Cari nama atau kode layanan…' (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User mencari data layanan menggunakan kolom Search 'Cari nama atau kode layanan…'.

## Pre-conditions

User berada di halaman https://app.bengkelly.co.id/services

## Test Data

Search: 'Balancing' / 'Bubut'

## Skenario: User mencari data layanan menggunakan kolom Search 'Cari nama atau kode layanan…'

Langkah-langkah:

Ketik kata kunci pada kolom 'Cari nama atau kode layanan…'

Klik ikon Kaca Pembesar / tekan Enter

Expected Result:

Tabel memperbarui data secara otomatis

Hanya menampilkan baris layanan yang sesuai dengan kata kunci pencarian

Actual Result (Excel): > Tabel memperbarui data secara otomatis

Hanya menampilkan baris layanan yang sesuai dengan kata kunci pencarian
Status (Excel): PASS
Actual Result Baru: > Tabel memperbarui data secara otomatis
Hanya menampilkan baris layanan yang sesuai dengan kata kunci pencarian

# BKL_019: User mengedit data layanan melalui halaman Edit Layanan (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User mengedit data layanan melalui halaman Edit Layanan.

## Pre-conditions

User berada di halaman https://app.bengkelly.co.id/services

## Test Data

Input Data:

Harga: Rp 150.000

## Skenario: User mengedit data layanan melalui halaman Edit Layanan

Langkah-langkah:

Pilih baris data layanan

Klik icon Edit pada kolom AKSI

Sistem mengarahkan ke halaman Edit Layanan (/services/{id}/edit)

Ubah data (misal: Harga / Durasi Estimasi)

Klik button 'Simpan Layanan'

Expected Result:

Halaman Edit Layanan terbuka dengan seluruh data form terisi otomatis

Data berhasil diperbarui ke database

Menampilkan Toast Notification 'Berhasil - Layanan berhasil diperbarui!'

Redirect kembali ke tabel / services

Actual Result (Excel): > Halaman Edit Layanan terbuka dengan seluruh data form terisi otomatis

Data berhasil diperbarui ke database
Menampilkan Toast Notification 'Layanan berhasil diperbarui!'
Redirect kembali ke tabel / services
Status (Excel): PASS
Actual Result Baru: > Halaman Edit Layanan terbuka dengan seluruh data form terisi otomatis
Data berhasil diperbarui ke database
Menampilkan Toast Notification 'Layanan berhasil diperbarui!'
Redirect kembali ke tabel / services

# BKL_020: User melihat daftar data tipe service dan summary card pada halaman Tipe Service (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User melihat daftar data tipe service dan summary card pada halaman Tipe Service.

## Pre-conditions

User berhasil Login dan berada di Dashboard https://app.bengkelly.co.id/dashboard

## Test Data

Tidak ada data.

## Skenario: User melihat daftar data tipe service dan summary card pada halaman Tipe Service

Langkah-langkah:

Klik dropdown Master Data di sidebar

Klik sub menu Tipe Service

Expected Result:

Halaman Tipe Service terbuka (/service-types)

Menampilkan 3 Card Summary: TOTAL, AKTIF, NONAKTIF

Menampilkan button '+ Tambah Tipe'

Menampilkan tabel tipe service dengan kolom: TIPE SERVICE, CABANG, DESKRIPSI, ESTIMASI, STATUS, AKSI (Icon Edit, Hapus)

Actual Result (Excel): > Halaman Tipe Service terbuka (/service-types)

Menampilkan 3 Card Summary: TOTAL, AKTIF, NONAKTIF
Menampilkan button '+ Tambah Tipe'
Menampilkan tabel tipe service dengan kolom: TIPE SERVICE, CABANG, DESKRIPSI, ESTIMASI, STATUS, AKSI (Icon Edit, Hapus)
Status (Excel): PASS
Actual Result Baru: > Halaman Tipe Service terbuka (/service-types)
Menampilkan 3 Card Summary: TOTAL, AKTIF, NONAKTIF
Menampilkan button '+ Tambah Tipe'
Menampilkan tabel tipe service dengan kolom: TIPE SERVICE, CABANG, DESKRIPSI, ESTIMASI, STATUS, AKSI (Icon Edit, Hapus)

# BKL_021: User menambah data Tipe Service baru secara lengkap (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User menambah data Tipe Service baru secara lengkap.

## Pre-conditions

User berada di halaman Tipe Service https://app.bengkelly.co.id/service-types

## Test Data

Input Data:

Cabang: Cabang Utama Bandung

Nama Tipe Service: Service Berkala

Deskripsi: Servis rutin yang dilakukan berdasarkan jarak…

Estimasi Durasi: 120 menit

Icon: Wrench

Warna: Gray

## Skenario: User menambah data Tipe Service baru secara lengkap

Langkah-langkah:

Klik button '+ Tambah Tipe'

Pada form Tambah Tipe Service: Pilih Cabang, Isi Nama Tipe Service, Deskripsi, Estimasi Durasi (menit), pilih Icon (misal: Wrench), dan Warna (misal: Gray)

Klik button 'Simpan'

Expected Result:

Form Tambah Tipe Service terbuka (/service-types/create)

Data berhasil disimpan ke database

Menampilkan Toast Notification hijau: 'Berhasil - Tipe service berhasil ditambahkan!'

Redirect kembali ke tabel /service-types dan data baru tampil di daftar

Actual Result (Excel): > Form Tambah Tipe Service terbuka (/service-types/create)

Data berhasil disimpan ke database
Menampilkan Toast Notification hijau: 'Berhasil - Tipe service berhasil ditambahkan!'
Redirect kembali ke tabel /service-types dan data baru tampil di daftar
Status (Excel): PASS
Actual Result Baru: > Form Tambah Tipe Service terbuka (/service-types/create)
Data berhasil disimpan ke database
Menampilkan Toast Notification hijau: 'Berhasil - Tipe service berhasil ditambahkan!'
Redirect kembali ke tabel /service-types dan data baru tampil di daftar

# BKL_022: User mencari data tipe service menggunakan kolom Search 'Cari tipe service…' (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User mencari data tipe service menggunakan kolom Search 'Cari tipe service…'.

## Pre-conditions

User berada di halaman https://app.bengkelly.co.id/service-types

## Test Data

Search: 'Emergency' / 'Berkala'

## Skenario: User mencari data tipe service menggunakan kolom Search 'Cari tipe service…'

Langkah-langkah:

Ketik kata kunci pada kolom 'Cari tipe service…'

Klik ikon Kaca Pembesar / tekan Enter

Expected Result:

Tabel memperbarui data secara otomatis

Hanya menampilkan baris tipe service yang sesuai dengan kata kunci pencarian

Actual Result (Excel): > Tabel memperbarui data secara otomatis

Hanya menampilkan baris tipe service yang sesuai dengan kata kunci pencarian
Status (Excel): PASS
Actual Result Baru: > Tabel memperbarui data secara otomatis
Hanya menampilkan baris tipe service yang sesuai dengan kata kunci pencarian

# BKL_023: User mengedit data tipe service melalui halaman Edit Tipe Service (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User mengedit data tipe service melalui halaman Edit Tipe Service.

## Pre-conditions

User berada di halaman https://app.bengkelly.co.id/service-types

## Test Data

Input Data:

Estimasi Durasi: 120 menit

## Skenario: User mengedit data tipe service melalui halaman Edit Tipe Service

Langkah-langkah:

Pilih baris data tipe service

Klik icon Edit pada kolom AKSI

Sistem mengarahkan ke halaman Edit Tipe Service (/service-types/{id}/edit)

Ubah data (misal: Estimasi Durasi / Deskripsi)

Klik button 'Simpan'

Expected Result:

Form Edit Tipe Service terbuka dengan seluruh data terisi otomatis

Data berhasil diperbarui ke database

Menampilkan Toast Notification hijau: 'Berhasil - Tipe service berhasil diupdate!'

Redirect kembali ke tabel /service-types

Actual Result (Excel): > Form Edit Tipe Service terbuka dengan seluruh data terisi otomatis

Data berhasil diperbarui ke database
Menampilkan Toast Notification hijau: 'Berhasil - Tipe service berhasil diupdate!'
Redirect kembali ke tabel /service-types
Status (Excel): PASS
Actual Result Baru: > Form Edit Tipe Service terbuka dengan seluruh data terisi otomatis
Data berhasil diperbarui ke database
Menampilkan Toast Notification hijau: 'Berhasil - Tipe service berhasil diupdate!'
Redirect kembali ke tabel /service-types

# BKL_024: User melihat daftar data kategori barang & layanan serta summary card pada halaman Kategori (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User melihat daftar data kategori barang & layanan serta summary card pada halaman Kategori.

## Pre-conditions

User berhasil Login dan berada di Dashboard https://app.bengkelly.co.id/dashboard

## Test Data

Tidak ada data.

## Skenario: User melihat daftar data kategori barang & layanan serta summary card pada halaman Kategori

Langkah-langkah:

Klik dropdown Master Data di sidebar

Klik sub menu Kategori

Expected Result:

Halaman Kategori Barang & Layanan terbuka (/categories)

Menampilkan 3 Card Summary: TOTAL, INDUK, SUB-KATEGORI

Menampilkan button '+ Tambah Kategori'

Menampilkan tabel kategori dengan kolom: KATEGORI, INDUK, DESKRIPSI, AKSI (Icon Detail, Edit, Hapus)

Actual Result (Excel): > Halaman Kategori Barang & Layanan terbuka (/categories)

Menampilkan 3 Card Summary: TOTAL, INDUK, SUB-KATEGORI
Menampilkan button '+ Tambah Kategori'
Menampilkan tabel kategori dengan kolom: KATEGORI, INDUK, DESKRIPSI, AKSI (Icon Detail, Edit, Hapus)
Status (Excel): PASS
Actual Result Baru: > Halaman Kategori Barang & Layanan terbuka (/categories)
Menampilkan 3 Card Summary: TOTAL, INDUK, SUB-KATEGORI
Menampilkan button '+ Tambah Kategori'
Menampilkan tabel kategori dengan kolom: KATEGORI, INDUK, DESKRIPSI, AKSI (Icon Detail, Edit, Hapus)

# BKL_025: User menambah data Kategori Baru secara lengkap (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User menambah data Kategori Baru secara lengkap.

## Pre-conditions

User berada di halaman Kategori https://app.bengkelly.co.id/categories

## Test Data

Input Data:

Nama Kategori: Fast Moving

Parent Kategori: Tidak ada parent (Kategori Utama)

Deskripsi: (oli, filter oli, filter udara, kampas rem, busi)

## Skenario: User menambah data Kategori Baru secara lengkap

Langkah-langkah:

Klik button '+ Tambah Kategori'

Pada form Tambah Kategori Baru: Isi Nama Kategori, pilih Parent Kategori (misal: Tidak ada parent [Kategori Utama]), dan isi Deskripsi

Klik button 'Simpan Kategori'

Expected Result:

Form Tambah Kategori Baru terbuka (/categories/create)

Data berhasil disimpan ke database

Menampilkan Toast Notification hijau: 'Berhasil - Kategori berhasil ditambahkan!'

Redirect kembali ke tabel /categories dan data baru tampil di daftar

Actual Result (Excel): > Form Tambah Kategori Baru terbuka (/categories/create)

Data berhasil disimpan ke database
Menampilkan Toast Notification hijau: 'Berhasil - Kategori berhasil ditambahkan!'
Redirect kembali ke tabel /categories dan data baru tampil di daftar
Status (Excel): PASS
Actual Result Baru: > Form Tambah Kategori Baru terbuka (/categories/create)
Data berhasil disimpan ke database
Menampilkan Toast Notification hijau: 'Berhasil - Kategori berhasil ditambahkan!'
Redirect kembali ke tabel /categories dan data baru tampil di daftar

# BKL_026: User mencari data kategori menggunakan kolom Search 'Cari nama kategori…' (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User mencari data kategori menggunakan kolom Search 'Cari nama kategori…'.

## Pre-conditions

User berada di halaman https://app.bengkelly.co.id/categories

## Test Data

Search: 'Service Rutin' / 'Sistem Pengereman'

## Skenario: User mencari data kategori menggunakan kolom Search 'Cari nama kategori…'

Langkah-langkah:

Ketik kata kunci pada kolom 'Cari nama kategori...'

Klik ikon Kaca Pembesar / tekan Enter

Expected Result:

Tabel memperbarui data secara otomatis

Hanya menampilkan baris kategori yang sesuai dengan kata kunci pencarian

Actual Result (Excel): > Tabel memperbarui data secara otomatis

Hanya menampilkan baris kategori yang sesuai dengan kata kunci pencarian
Status (Excel): PASS
Actual Result Baru: > Tabel memperbarui data secara otomatis
Hanya menampilkan baris kategori yang sesuai dengan kata kunci pencarian

# BKL_027: User mengedit data kategori melalui halaman Edit Kategori (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User mengedit data kategori melalui halaman Edit Kategori.

## Pre-conditions

User berada di halaman https://app.bengkelly.co.id/categories

## Test Data

Input Data:

Deskripsi: Kategori komponen fast moving

## Skenario: User mengedit data kategori melalui halaman Edit Kategori

Langkah-langkah:

Pilih baris data kategori

Klik icon Edit pada kolom AKSI

Sistem mengarahkan ke halaman Edit Kategori (/categories/{id}/edit)

Ubah data (misal: Deskripsi / Nama Kategori)

Klik button 'Simpan Kategori'

Expected Result:

Form Edit Kategori terbuka dengan seluruh data terisi otomatis

Data berhasil diperbarui ke database

Menampilkan Toast Notification hijau: 'Berhasil - Kategori berhasil diperbarui!'

Redirect kembali ke tabel /categories

Actual Result (Excel): > Form Edit Kategori terbuka dengan seluruh data terisi otomatis

Data berhasil diperbarui ke database
Menampilkan Toast Notification hijau: 'Berhasil - Kategori berhasil diperbarui!'
Redirect kembali ke tabel /categories
Status (Excel): PASS
Actual Result Baru: > Form Edit Kategori terbuka dengan seluruh data terisi otomatis
Data berhasil diperbarui ke database
Menampilkan Toast Notification hijau: 'Berhasil - Kategori berhasil diperbarui!'
Redirect kembali ke tabel /categories

# BKL_028: User melihat daftar data satuan barang dan summary card pada halaman Satuan (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User melihat daftar data satuan barang dan summary card pada halaman Satuan.

## Pre-conditions

User berhasil Login dan berada di Dashboard https://app.bengkelly.co.id/dashboard

## Test Data

Tidak ada data.

## Skenario: User melihat daftar data satuan barang dan summary card pada halaman Satuan

Langkah-langkah:

Klik dropdown Master Data di sidebar

Klik sub menu Satuan

Expected Result:

Halaman Data Satuan Barang terbuka (/units)

Menampilkan 3 Card Summary: TOTAL, AKTIF, NONAKTIF

Menampilkan button '+ Tambah Satuan'

Menampilkan tabel satuan dengan kolom: SATUAN, SIMBOL, STATUS, AKSI (Icon Edit, Hapus)

Actual Result (Excel): > Halaman Data Satuan Barang terbuka (/units)

Menampilkan 3 Card Summary: TOTAL, AKTIF, NONAKTIF
Menampilkan button '+ Tambah Satuan'
Menampilkan tabel satuan dengan kolom: SATUAN, SIMBOL, STATUS, AKSI (Icon Edit, Hapus)
Status (Excel): PASS
Actual Result Baru: > Halaman Data Satuan Barang terbuka (/units)
Menampilkan 3 Card Summary: TOTAL, AKTIF, NONAKTIF
Menampilkan button '+ Tambah Satuan'
Menampilkan tabel satuan dengan kolom: SATUAN, SIMBOL, STATUS, AKSI (Icon Edit, Hapus)

# BKL_029: User menambah data Satuan Barang baru secara lengkap (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User menambah data Satuan Barang baru secara lengkap.

## Pre-conditions

User berada di halaman Satuan https://app.bengkelly.co.id/units

## Test Data

Input Data:

Nama Satuan: Galon

Simbol

## Skenario: User menambah data Satuan Barang baru secara lengkap

Langkah-langkah:

Klik button '+ Tambah Satuan'

Pada form Tambah Satuan Baru: Isi Nama Satuan dan Simbol

Klik button 'Simpan Satuan'

Expected Result:

Form Tambah Satuan Baru terbuka (/units/create)

Data berhasil disimpan ke database

Menampilkan Toast Notification hijau: 'Berhasil - Satuan berhasil ditambahkan!'

Redirect kembali ke tabel /units dan data baru tampil di daftar

Actual Result (Excel): > Form Tambah Satuan Baru terbuka (/units/create)

Data berhasil disimpan ke database
Menampilkan Toast Notification hijau: 'Berhasil - Satuan berhasil ditambahkan!'
Redirect kembali ke tabel /units dan data baru tampil di daftar
Status (Excel): PASS
Actual Result Baru: > Form Tambah Satuan Baru terbuka (/units/create)
Data berhasil disimpan ke database
Menampilkan Toast Notification hijau: 'Berhasil - Satuan berhasil ditambahkan!'
Redirect kembali ke tabel /units dan data baru tampil di daftar

# BKL_030: User mencari data satuan menggunakan kolom Search 'Cari nama atau simbol satuan…' (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User mencari data satuan menggunakan kolom Search 'Cari nama atau simbol satuan…'.

## Pre-conditions

User berada di halaman https://app.bengkelly.co.id/units

## Test Data

Search: 'Galon' / 'GL'

## Skenario: User mencari data satuan menggunakan kolom Search 'Cari nama atau simbol satuan…'

Langkah-langkah:

Ketik kata kunci pada kolom 'Cari nama atau simbol satuan...'

Klik ikon Kaca Pembesar / tekan Enter

Expected Result:

Tabel memperbarui data secara otomatis

Hanya menampilkan baris satuan yang sesuai dengan kata kunci pencarian

Actual Result (Excel): > Tabel memperbarui data secara otomatis

Hanya menampilkan baris satuan yang sesuai dengan kata kunci pencarian
Status (Excel): PASS
Actual Result Baru: > Tabel memperbarui data secara otomatis
Hanya menampilkan baris satuan yang sesuai dengan kata kunci pencarian

# BKL_031: User mengedit data satuan melalui halaman Edit Satuan (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User mengedit data satuan melalui halaman Edit Satuan.

## Pre-conditions

User berada di halaman https://app.bengkelly.co.id/units

## Test Data

Input Data:

Simbol

## Skenario: User mengedit data satuan melalui halaman Edit Satuan

Langkah-langkah:

Pilih baris data satuan

Klik icon Edit pada kolom AKSI

Sistem mengarahkan ke halaman Edit Satuan (/units/{id}/edit)

Ubah data (misal: Simbol / Nama Satuan)

Klik button 'Simpan Satuan'

Expected Result:

Form Edit Satuan terbuka dengan seluruh data terisi otomatis

Data berhasil diperbarui ke database

Menampilkan Toast Notification hijau: 'Berhasil - Satuan berhasil diperbarui!'

Redirect kembali ke tabel /units

Actual Result (Excel): > Form Edit Satuan terbuka dengan seluruh data terisi otomatis

Data berhasil diperbarui ke database
Menampilkan Toast Notification hijau: 'Berhasil - Satuan berhasil diperbarui!'
Redirect kembali ke tabel /units
Status (Excel): PASS
Actual Result Baru: > Form Edit Satuan terbuka dengan seluruh data terisi otomatis
Data berhasil diperbarui ke database
Menampilkan Toast Notification hijau: 'Berhasil - Satuan berhasil diperbarui!'
Redirect kembali ke tabel /units

# BKL_032: User melihat daftar data paket layanan bundling dna summary card pada halaman Paket Layanan (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User melihat daftar data paket layanan bundling dna summary card pada halaman Paket Layanan.

## Pre-conditions

User berhasil Login dan berada di Dashboard https://app.bengkelly.co.id/dashboard

## Test Data

Tidak ada data.

## Skenario: User melihat daftar data paket layanan bundling dna summary card pada halaman Paket Layanan

Langkah-langkah:

Klik dropdown Master Data di sidebar

Klik sub menu Paket Layanan

Expected Result:

Halaman Data Paket Layanan terbuka (/service-packages)

Menampilkan 4 Card Summary: TOTAL, AKTIF, NONAKTIF, PROMO PAKET

Menampilkan button '+ Tambah Paket'

Menampilkan tabel paket layanan dengan kolom: PAKET LAYANAN, HARGA, ITEM KONTEN, STATUS, AKSI (Icon Detail, Edit, Hapus)

Actual Result (Excel): > Halaman Data Paket Layanan terbuka (/service-packages)

Menampilkan 4 Card Summary: TOTAL, AKTIF, NONAKTIF, PROMO PAKET
Menampilkan button '+ Tambah Paket'
Menampilkan tabel paket layanan dengan kolom: PAKET LAYANAN, HARGA, ITEM KONTEN, STATUS, AKSI (Icon Detail, Edit, Hapus)
Status (Excel): PASS
Actual Result Baru: > Halaman Data Paket Layanan terbuka (/service-packages)
Menampilkan 4 Card Summary: TOTAL, AKTIF, NONAKTIF, PROMO PAKET
Menampilkan button '+ Tambah Paket'
Menampilkan tabel paket layanan dengan kolom: PAKET LAYANAN, HARGA, ITEM KONTEN, STATUS, AKSI (Icon Detail, Edit, Hapus)

# BKL_033: User membuat Paket Layanan Baru (Bundling Jasa & Sparepart) secara lengkap (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User membuat Paket Layanan Baru (Bundling Jasa & Sparepart) secara lengkap.

## Pre-conditions

User berada di halaman Paket Layanan https://app.bengkelly.co.id/service-packages

## Test Data

Input Data:

Nama Paket: Paket Service Rem Komplit

Harga Paket: Rp 400.000

Diskon: 0%

Durasi Estimasi: 120 menit

Gudang: Gudang Utama

Included: Jasa Servis Rem + Kampas Rem Depan

## Skenario: User membuat Paket Layanan Baru (Bundling Jasa & Sparepart) secara lengkap

Langkah-langkah:

Klik button '+ Tambah Paket'

Pada Informasi Paket: Isi Nama Paket, Harga Paket, Diskon (%), Durasi Estimasi (menit), Pilih Gudang, dan Deskripsi

Pada section Layanan: Klik '+ Tambah Layanan' lalu pilih jasa yang termasuk dalam paket

Pada section Barang: Klik '+ Tambah Barang' lalu pilih sparepart yang termasuk

Periksa kalkulasi pada Ringkasan Biaya (Total Jasa, Total Barang, Selisih)

Klik button 'Simpan Paket'

Expected Result:

Form Tambah Paket Layanan terbuka (/service-packages/create)

Sistem membuat Kode Paket secara otomatis

Data paket bundling berhasil disimpan ke database

Menampilkan Toast Notification hijau: 'Berhasil - Paket layanan berhasil ditambahkan dengan kode: [KODE_PAKET]'

Redirect kembali ke tabel /service-packages

Actual Result (Excel): > Form Tambah Paket Layanan terbuka (/service-packages/create)

Sistem membuat Kode Paket secara otomatis
Data paket bundling berhasil disimpan ke database
Menampilkan Toast Notification hijau: 'Berhasil - Paket layanan berhasil ditambahkan dengan kode: [KODE_PAKET]'
Redirect kembali ke tabel /service-packages
Status (Excel): PASS
Actual Result Baru: > Form Tambah Paket Layanan terbuka (/service-packages/create)
Sistem membuat Kode Paket secara otomatis
Data paket bundling berhasil disimpan ke database
Menampilkan Toast Notification hijau: 'Berhasil - Paket layanan berhasil ditambahkan dengan kode: [KODE_PAKET]'
Redirect kembali ke tabel /service-packages

# BKL_034: User mencari data paket layanan menggunakan kolom Search 'Cari nama atau kode paket…' (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User mencari data paket layanan menggunakan kolom Search 'Cari nama atau kode paket…'.

## Pre-conditions

User berada di halaman https://app.bengkelly.co.id/service-packages

## Test Data

Search: 'Overhaul' / 'Rem Komplit'

## Skenario: User mencari data paket layanan menggunakan kolom Search 'Cari nama atau kode paket…'

Langkah-langkah:

Ketik kata kunci pada kolom 'Cari nama atau kode paket...'

Klik ikon Kaca Pembesar / tekan Enter

Expected Result:

Tabel memperbarui data secara otomatis

Hanya menampilkan baris paket layanan yang sesuai dengan kata kunci pencarian

Actual Result (Excel): > Tabel memperbarui data secara otomatis

Hanya menampilkan baris paket layanan yang sesuai dengan kata kunci pencarian
Status (Excel): PASS
Actual Result Baru: > Tabel memperbarui data secara otomatis
Hanya menampilkan baris paket layanan yang sesuai dengan kata kunci pencarian

# BKL_035: User mengedit data paket layanan melalui halaman Edit Paket Layanan (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User mengedit data paket layanan melalui halaman Edit Paket Layanan.

## Pre-conditions

User berada di halaman https://app.bengkelly.co.id/service-packages

## Test Data

Input Data:

Harga Paket: Rp 450.000

## Skenario: User mengedit data paket layanan melalui halaman Edit Paket Layanan

Langkah-langkah:

Pilih baris data paket layanan

Klik icon Edit pada kolom AKSI

Sistem mengarahkan ke halaman Edit Paket Layanan (/service-packages/{id}/edit)

Ubah data (misal: Harga Paket / Item Layanan)

Klik button 'Simpan Paket'

Expected Result:

Form Edit Paket Layanan terbuka dengan seluruh data terisi otomatis

Data berhasil diperbarui ke database

Menampilkan Toast Notification hijau: 'Berhasil - Paket layanan berhasil diperbarui!'

Redirect kembali ke tabel /service-packages

Actual Result (Excel): > Form Edit Paket Layanan terbuka dengan seluruh data terisi otomatis

Data berhasil diperbarui ke database
Menampilkan Toast Notification hijau: 'Berhasil - Paket layanan berhasil diperbarui!'
Redirect kembali ke tabel /service-packages
Status (Excel): PASS
Actual Result Baru: > Form Edit Paket Layanan terbuka dengan seluruh data terisi otomatis
Data berhasil diperbarui ke database
Menampilkan Toast Notification hijau: 'Berhasil - Paket layanan berhasil diperbarui!'
Redirect kembali ke tabel /service-packages

# BKL_036: User melihat daftar merk kendaraan dan summary card pada halaman Merk Kendaraan (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User melihat daftar merk kendaraan dan summary card pada halaman Merk Kendaraan.

## Pre-conditions

User berhasil Login dan berada di Dashboard https://app.bengkelly.co.id/dashboard

## Test Data

Tidak ada data.

## Skenario: User melihat daftar merk kendaraan dan summary card pada halaman Merk Kendaraan

Langkah-langkah:

Klik dropdown Master Data di sidebar

Klik sub menu Merk Kendaraan

Expected Result:

Halaman Data Merk Kendaraan terbuka (/vehicle-brands)

Menampilkan 4 Card Summary: TOTAL MERK, AKTIF, TOTAL POPULASI, NONAKTIF

Menampilkan button 'Import', 'Export', dan '+ Tambah Merk'

Menampilkan tabel merk kendaraan dengan kolom: LOGO, MERK KENDARAAN, KENDARAAN, STATUS, AKSI (Icon Edit, Hapus)

Actual Result (Excel): > Halaman Data Merk Kendaraan terbuka (/vehicle-brands)

Menampilkan 4 Card Summary: TOTAL MERK, AKTIF, TOTAL POPULASI, NONAKTIF
Menampilkan button 'Import', 'Export', dan '+ Tambah Merk'
Menampilkan tabel merk kendaraan dengan kolom: LOGO, MERK KENDARAAN, KENDARAAN, STATUS, AKSI (Icon Edit, Hapus)
Status (Excel): PASS
Actual Result Baru: > Halaman Data Merk Kendaraan terbuka (/vehicle-brands)
Menampilkan 4 Card Summary: TOTAL MERK, AKTIF, TOTAL POPULASI, NONAKTIF
Menampilkan button 'Import', 'Export', dan '+ Tambah Merk'
Menampilkan tabel merk kendaraan dengan kolom: LOGO, MERK KENDARAAN, KENDARAAN, STATUS, AKSI (Icon Edit, Hapus)

# BKL_037: User menambah data Merk Kendaraan baru secara lengkap (Positive)

## Deskripsi

Test case manual untuk memvalidasi bahwa User menambah data Merk Kendaraan baru secara lengkap.

## Pre-conditions

User berada di halaman Merk Kendaraan https://app.bengkelly.co.id/vehicle-brands

## Test Data

Input Data:

Nama Merk: Toyota

Logo: logo_toyota.png (opsional)

## Skenario: User menambah data Merk Kendaraan baru secara lengkap

Langkah-langkah:

Klik button '+ Tambah Merk'

Pada form Tambah Merk Kendaraan: Isi Nama Merk dan upload Logo Merk (opsional)

Klik button 'Simpan Merk'

Expected Result:

Form Tambah Merk Kendaraan terbuka (/vehicle-brands/create)

Data berhasil disimpan ke database

Menampilkan Toast Notification hijau: 'Berhasil - Merk kendaraan berhasil ditambahkan'

Redirect kembali ke tabel /vehicle-brands dan data baru tampil di daftar

Actual Result (Excel): > Form Tambah Merk Kendaraan terbuka (/vehicle-brands/create)

Data berhasil disimpan ke database
Menampilkan Toast Notification hijau: 'Berhasil - Merk kendaraan berhasil ditambahkan'
Redirect kembali ke tabel /vehicle-brands dan data baru tampil di daftar
Status (Excel): PASS
Actual Result Baru: > Form Tambah Merk Kendaraan terbuka (/vehicle-brands/create)
Data berhasil disimpan ke database
Menampilkan Toast Notification hijau: 'Berhasil - Merk kendaraan berhasil ditambahkan'
Redirect kembali ke tabel /vehicle-brands dan data baru tampil di daftar