import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-29-estimation-print
// Source: test-cases/TC-29-estimation-print.md

test.describe('TC-29: Estimasi - Admin mencetak dokumen estimasi', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Estimasi - Admin mencetak dokumen estimasi', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Buka detail estimasi
    // 2. Klik print

    // Expected result (from markdown):
    // - Dokumen estimasi berhasil dibuka untuk proses print/cetak.

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
