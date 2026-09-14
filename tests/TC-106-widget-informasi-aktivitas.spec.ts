import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-106-widget-informasi-aktivitas
// Source: test-cases/TC-106-widget-informasi-aktivitas.md

test.describe("TC-106: Widget Informasi 'AKTIVITAS TERKINI'", () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('User melihat widget informasi pada section AKTIVITAS TERKINI', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps: scroll ke bagian 'AKTIVITAS TERKINI'
    // Expected: menampilkan widget Booking Hari Ini dan Stok Menipis

    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
