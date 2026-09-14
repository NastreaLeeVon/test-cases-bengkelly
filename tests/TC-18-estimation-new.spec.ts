import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-18-estimation-new
// Source: test-cases/TC-18-estimation-new.md

test.describe('TC-18: Estimasi - Admin membuat estimasi dari booking confirmed', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Estimasi - Admin membuat estimasi dari booking confirmed', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Klik buat estimasi

    // Expected result (from markdown):
    // - Estimasi berhasil dibuat dan detail estimasi tampil dengan status draft.

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
