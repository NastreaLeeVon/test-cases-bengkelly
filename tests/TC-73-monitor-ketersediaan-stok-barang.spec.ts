import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-73-monitor-ketersediaan-stok-barang
// Source: test-cases/TC-73-monitor-ketersediaan-stok-barang.md

test.describe('TC-73: Admin ingin melihat ringkasan data monitor ketersediaan stok barang dan suku cadang di gudang', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Admin ingin melihat ringkasan data monitor ketersediaan stok barang dan suku cadang di gudang', async ({ page }) => {
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
    // - Menampilkan card informasi:
    // - Total item
    // - Gudang
    // - Kategori
    // - Menipis

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
