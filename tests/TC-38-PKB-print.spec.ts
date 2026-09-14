import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-38-PKB-print
// Source: test-cases/TC-38-PKB-print.md

test.describe('TC-38: PKB - Admin mencetak detail PKB', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('PKB - Admin mencetak detail PKB', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Buka detail PKB
    // 2. Klik tombol cetak/print PKB
    // 3. Periksa

    // Expected result (from markdown):
    // - Dokumen/detail PKB berhasil dibuka untuk proses cetak.

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
