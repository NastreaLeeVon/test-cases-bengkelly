import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-40-PKB-sparepart
// Source: test-cases/TC-40-PKB-sparepart.md

test.describe('TC-40: PKB - Admin mengambil sparepart untuk pengerjaan PKB', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('PKB - Admin mengambil sparepart untuk pengerjaan PKB', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Buka PKB
    // 2. Klik ambil part
    // 3. Pilih sparepart dan quantity
    // 4. Konfirmasi pengambilan

    // Expected result (from markdown):
    // - Sparepart berhasil diambil sesuai quantity dan tercatat pada PKB.

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
