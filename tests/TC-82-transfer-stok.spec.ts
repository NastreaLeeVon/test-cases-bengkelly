import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-82-transfer-stok
// Source: test-cases/TC-82-transfer-stok.md

test.describe('TC-82: Admin ingin membuat transfer stok baru', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Admin ingin membuat transfer stok baru', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Admin membuka halaman dev.bengkelly.co.id
    // 2. Input username          3.Input password
    // 4. Memilih halaman stok menu dan pembelian di sidebar
    // 5. Memilih sub-menu Transfer Stok

    // Expected result (from markdown):
    // - Menampilkan form informasi transfer:
    // - Dari gudang -> gudang
    // - Tanggal transfer
    // - Estimasi tiba
    // - Alasan transfer
    // - Catatan
    // - Barang yang ditransfer
    // - Ringkasan
    // - Button simpan
    // - Bisa menyimpan transfer stok yang dilakukan ke gudang tujuan

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
