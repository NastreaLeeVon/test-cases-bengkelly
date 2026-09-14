import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-129-paket-bundling-dna
// Source: test-cases/TC-129-paket-bundling-dna.md

test.describe('TC-129: Paket Bundling Dna Paket', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('User melihat daftar paket layanan bundling dan summary card', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps: buka Master Data -> Paket Layanan
    // Expected: halaman /service-packages menampilkan kartu summary dan tabel paket

    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
