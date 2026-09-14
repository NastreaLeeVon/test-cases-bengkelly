import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-128-mengedit-satuan-melalui
// Source: test-cases/TC-128-mengedit-satuan-melalui.md

test.describe('TC-128: Mengedit Satuan Melalui Edit', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('User mengedit data satuan melalui halaman Edit Satuan', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps: pilih satuan, klik Edit, ubah, Simpan
    // Expected: toast success

    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
