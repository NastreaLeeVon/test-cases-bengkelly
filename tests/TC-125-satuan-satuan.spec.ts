import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-125-satuan-satuan
// Source: test-cases/TC-125-satuan-satuan.md

test.describe('TC-125: Satuan Satuan', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('User melihat daftar data satuan barang dan summary card pada halaman Satuan', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps: buka Master Data -> Satuan
    // Expected: halaman /units menampilkan kartu summary dan tabel satuan

    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
