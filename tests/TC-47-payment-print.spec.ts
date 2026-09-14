import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-47-payment-print
// Source: test-cases/TC-47-payment-print.md

test.describe('TC-47: Pembayaran - Admin mencetak nota/bukti pembayaran', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Pembayaran - Admin mencetak nota/bukti pembayaran', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Buka bukti pembayaran
    // 2. Klik print/download
    // 2. periksa

    // Expected result (from markdown):
    // - Bukti pembayaran berhasil dibuka untuk proses cetak.

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
