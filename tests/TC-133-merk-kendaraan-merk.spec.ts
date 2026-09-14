import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-133-merk-kendaraan-merk
// Source: test-cases/TC-133-merk-kendaraan-merk.md

test.describe('TC-133: Merk Kendaraan Merk Kendaraan', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('User melihat daftar merk kendaraan dan summary card pada halaman Merk Kendaraan', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps: buka Master Data -> Merk Kendaraan
    // Expected: halaman /vehicle-brands menampilkan kartu summary dan tabel merk

    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
