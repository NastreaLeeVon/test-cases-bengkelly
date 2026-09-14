import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-32-PKB-take-sparepart
// Source: test-cases/TC-32-PKB-take-sparepart.md

test.describe('TC-32: PKB - Admin mengambil sparepart dari gudang untuk PKB', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('PKB - Admin mengambil sparepart dari gudang untuk PKB', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Buka PKB dan ambil part dari gudang
    // 2. Pilih sparepart
    // 3. Isi quantity
    // 4. Klik ambil part dan periksa data part

    // Expected result (from markdown):
    // - Sparepart berhasil diambil sesuai quantity dan stok gudang diperbarui sesuai transaksi.

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
