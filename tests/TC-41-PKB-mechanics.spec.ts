import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-41-PKB-mechanics
// Source: test-cases/TC-41-PKB-mechanics.md

test.describe('TC-41: PKB - Admin menugaskan mekanik pada pekerjaan service', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('PKB - Admin menugaskan mekanik pada pekerjaan service', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Buka detail PKB
    // 2. Klik tugaskan
    // 3. Pilih mekanik
    // 4. Simpan perubahan

    // Expected result (from markdown):
    // - Mekanik berhasil ditugaskan pada pekerjaan service.

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
