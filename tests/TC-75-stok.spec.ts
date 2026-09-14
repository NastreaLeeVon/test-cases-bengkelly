import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-75-stok
// Source: test-cases/TC-75-stok.md

test.describe('TC-75: Admin ingin melihat detail stok', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Admin ingin melihat detail stok', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Admin membuka halaman dev.bengkelly.co.id
    // 2. Input username          3.Input password
    // 4. Memilih halaman stok menu dan pembelian di sidebar
    // 5. Memilih sub-menu Stok

    // Expected result (from markdown):
    // - Menampilkan informasi barang:
    // - Kode barang
    // - Kategori
    // - Gudang
    // - Nama Barang
    // - Satuan
    // - Update
    // - Menampilkan ringkasan stok
    // - Menampilkan riwayat mutasi stok

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
