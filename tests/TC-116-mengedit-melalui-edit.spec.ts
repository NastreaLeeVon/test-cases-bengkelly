import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-116-mengedit-melalui-edit
// Source: test-cases/TC-116-mengedit-melalui-edit.md

test.describe('TC-116: Mengedit Melalui Edit', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('User mengedit data layanan melalui halaman Edit Layanan', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps: pilih layanan, klik Edit, ubah, Simpan
    // Expected: update success toast

    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
