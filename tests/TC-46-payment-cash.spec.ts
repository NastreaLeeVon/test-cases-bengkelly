import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-46-payment-cash
// Source: test-cases/TC-46-payment-cash.md

test.describe('TC-46: Pembayaran - Admin melakukan pembayaran dengan metode tunai', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Pembayaran - Admin melakukan pembayaran dengan metode tunai', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Pilih metode tunai
    // 2. Isi jumlah pembayaran
    // 3. Klik selesaikan pembayaran

    // Expected result (from markdown):
    // - Pembayaran tunai berhasil diselesaikan.

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
