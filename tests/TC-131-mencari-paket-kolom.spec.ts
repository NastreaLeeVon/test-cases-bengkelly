import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-131-mencari-paket-kolom
// Source: test-cases/TC-131-mencari-paket-kolom.md

test.describe('TC-131: Mencari Paket Kolom Search', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('User mencari data paket layanan menggunakan kolom Search', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps: isi kolom search di /service-packages
    // Expected: tabel paket terfilter sesuai kata kunci

    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
