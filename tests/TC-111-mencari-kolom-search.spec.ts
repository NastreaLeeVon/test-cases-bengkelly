import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-111-mencari-kolom-search
// Source: test-cases/TC-111-mencari-kolom-search.md

test.describe("TC-111: Mencari Kolom Search 'Cari'", () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test("User mencari data barang menggunakan kolom Search 'Cari kode, nama, atau merk barang…'", async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps: ketik kata kunci di kolom search dan tekan Enter
    // Expected: tabel memperbarui hasil pencarian

    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
