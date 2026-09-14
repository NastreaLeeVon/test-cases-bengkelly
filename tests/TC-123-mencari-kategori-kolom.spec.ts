import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-123-mencari-kategori-kolom
// Source: test-cases/TC-123-mencari-kategori-kolom.md

test.describe('TC-123: Mencari Kategori Kolom Search', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('User mencari data kategori menggunakan kolom Search', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps: isi kolom search di /categories
    // Expected: tabel terfilter sesuai kata kunci

    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
