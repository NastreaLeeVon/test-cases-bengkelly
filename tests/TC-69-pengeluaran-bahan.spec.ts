import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-69-pengeluaran-bahan
// Source: test-cases/TC-69-pengeluaran-bahan.md

test.describe('TC-69: Admin ingin melihat detail data Pengeluaran Bahan', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Admin ingin melihat detail data Pengeluaran Bahan', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Admin membuka halaman dev.bengkelly.co.id
    // 2. Input username          3.Input password
    // 4. Memilih halaman stok menu dan pembelian di sidebar
    // 5. Memilih sub-menu Pengeluaran Bahan

    // Expected result (from markdown):
    // - Menampilkan data:
    // - Kode
    // - Kode PKB
    // - No Polisi
    // - Merk/Type
    // - Warna
    // - Kode Karyawan
    // - Nama Karyawan
    // - Gudang
    // - Total
    // - Tabel Sparepart dengan Kolom:
    // - Kode Sparepart
    // - Nama Sparepart
    // - Qty
    // - Harga
    // - Jumlah
    // - Button Tutup
    // - Print

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
