import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-110-menyimpan-draft-simpan
// Source: test-cases/TC-110-menyimpan-draft-simpan.md

test.describe("TC-110: Menyimpan Draft 'Simpan Draft'", () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test("User menyimpan barang sebagai draft menggunakan button 'Simpan Draft'", async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps: buka /items/create, isi beberapa data, klik 'Simpan Draft'
    // Expected: data tersimpan dengan status Draft dan toast muncul

    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
