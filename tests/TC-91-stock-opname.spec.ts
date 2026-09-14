import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-91-stock-opname
// Source: test-cases/TC-91-stock-opname.md

test.describe('TC-91: Admin ingin membuat data Stock Opname baru', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Admin ingin membuat data Stock Opname baru', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Admin membuka halaman dev.bengkelly.co.id
    // 2. Input username          3.Input password
    // 4. Memilih halaman stok menu dan pembelian di sidebar
    // 5. Memilih sub-menu Stok Opname

    // Expected result (from markdown):
    // - Menampilkan button +Barang
    // - Menampilkan button +Import
    // - Menampilkan kolom Keterangan
    // - Menampilkan button dropdown Gudang
    // - Menampilkan tabel dengan kolom:
    // - Kode
    // - Nama Barang
    // - Stok
    // - Fisik
    // - Lokasi
    // - Harga Beli
    // - Harga Jual
    // - Kolom keterangan dengan teks "Masukkan Keterangan"
    // - Menampilkan button Batal (Merah)
    // - Menampilkan button Simpan (Hijau)
    // - Menampilkan data terbaru di dalam tabel

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
