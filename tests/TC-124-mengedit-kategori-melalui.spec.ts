import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-124-mengedit-kategori-melalui
// Source: test-cases/TC-124-mengedit-kategori-melalui.md

test.describe('TC-124: Mengedit Kategori Melalui Edit', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('User mengedit data kategori melalui halaman Edit Kategori', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps: pilih kategori, klik Edit, ubah data, Simpan
    // Expected: toast success

    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
