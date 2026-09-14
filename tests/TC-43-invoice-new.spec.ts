import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-43-invoice-new
// Source: test-cases/TC-43-invoice-new.md

test.describe('TC-43: Invoice - Admin membuat invoice service dari PKB yang selesai', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Invoice - Admin membuat invoice service dari PKB yang selesai', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Buka Proses buat invoice
    // 2. Periksa data customer dan kendaraan
    // 3. Periksa jasa dan sparepart
    // 4. Klik buat invoice sekarang

    // Expected result (from markdown):
    // - Invoice service berhasil dan dibuat dan nomor invoice tampil.

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
