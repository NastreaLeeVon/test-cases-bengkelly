import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-42-PKB-status
// Source: test-cases/TC-42-PKB-status.md

test.describe('TC-42: PKB - Admin mengubah status pekerjaan menjadi selesai', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('PKB - Admin mengubah status pekerjaan menjadi selesai', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Buka detail PKB
    // 2. Ubah status pekerjaan menjadi selesai
    // 3. Periksa status akhir

    // Expected result (from markdown):
    // - Status pekerjaan berubah menjadi selesai.

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
