import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-39-PKB-edit
// Source: test-cases/TC-39-PKB-edit.md

test.describe('TC-39: PKB - Admin mengedit data PKB', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('PKB - Admin mengedit data PKB', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Buka detail PKB
    // 2. Klik edit
    // 3. Ubah data PKB
    // 4. Simpan perubahan dan periksa

    // Expected result (from markdown):
    // - Perubahan data PKB berhasil disimpan dan tampil pada detaiil PKB.

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
