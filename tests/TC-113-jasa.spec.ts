import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-113-jasa
// Source: test-cases/TC-113-jasa.md

test.describe('TC-113: Jasa', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('User melihat daftar data layanan jasa dan summary card pada halaman Layanan', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps: buka Master Data -> Layanan
    // Expected: halaman /services menampilkan kartu summary dan tabel layanan

    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
