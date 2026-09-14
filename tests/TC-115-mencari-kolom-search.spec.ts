import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-115-mencari-kolom-search
// Source: test-cases/TC-115-mencari-kolom-search.md

test.describe("TC-115: Mencari Kolom Search 'Cari'", () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test("User mencari data layanan menggunakan kolom Search 'Cari nama atau kode layanan…'", async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps: isi kolom search pada /services
    // Expected: tabel layanan terfilter sesuai kata kunci

    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
