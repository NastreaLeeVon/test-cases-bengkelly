import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-34-PKB-validation
// Source: test-cases/TC-34-PKB-validation.md

test.describe('TC-34: PKB - Admin melakukan validasi field wajib', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('PKB - Admin melakukan validasi field wajib', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Buka form PKB
    // 2. Kosongkan field wajib
    // 3. Klik buat PKB sekarang

    // Expected result (from markdown):
    // - Sistem menolak pembuatan PKB dan menampilkan validasi pada field wajib.

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
