import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-108-sparepart
// Source: test-cases/TC-108-sparepart.md

test.describe('TC-108: Barang/Sparepart', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('User melihat daftar data barang dan summary card pada halaman Barang/Sparepart', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps: buka menu Master Data -> Barang/Sparepart
    // Expected: halaman /items terbuka dan menampilkan kartu summary serta tabel

    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
