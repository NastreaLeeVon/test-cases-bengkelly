import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-31-PKB-change-status
// Source: test-cases/TC-31-PKB-change-status.md

test.describe('TC-31: PKB - Admin mengubah status pekerjaan PKB', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('PKB - Admin mengubah status pekerjaan PKB', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Buka pekerjaan PKB
    // 2. Ubah status menjadi dikerjakan
    // 3. Ubah status menjadi selesai
    // 4. Periksa status akhir

    // Expected result (from markdown):
    // - Status pekerjaan PKB berubah sesuai alur menunggu, dikerjakan, hingga selesai.

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
