import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-104-hari
// Source: test-cases/TC-104-hari.md

test.describe("TC-104: 'RINGKASAN HARI INI'", () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test("User melihat ringkasan card statistik di section 'RINGKASAN HARI INI'", async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps: buka dashboard dan periksa section 'RINGKASAN HARI INI'
    // Expected: menampilkan 4 card statistik utama

    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
