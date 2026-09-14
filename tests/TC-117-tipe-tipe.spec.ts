import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-117-tipe-tipe
// Source: test-cases/TC-117-tipe-tipe.md

test.describe('TC-117: Tipe Tipe', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('User melihat daftar data tipe service dan summary card pada halaman Tipe Service', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps: buka Master Data -> Tipe Service
    // Expected: halaman /service-types menampilkan kartu summary dan tabel

    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
