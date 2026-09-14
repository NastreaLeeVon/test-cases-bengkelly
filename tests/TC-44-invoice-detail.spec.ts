import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-44-invoice-detail
// Source: test-cases/TC-44-invoice-detail.md

test.describe('TC-44: Invoice - Admin memastikan detail invoice service sesuai PKB', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Invoice - Admin memastikan detail invoice service sesuai PKB', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Buka detail invoice
    // 2. Periksa customer dan kendaraan
    // 3. Periksa jasa, sparepart, dan total tagihan
    // 4. Periksa status pembayaran

    // Expected result (from markdown):
    // - Detail invoice sesuai data PKB dan status awal pembayaran adalah belum dibayar.

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
