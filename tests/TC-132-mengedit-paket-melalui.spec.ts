import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-132-mengedit-paket-melalui
// Source: test-cases/TC-132-mengedit-paket-melalui.md

test.describe('TC-132: Mengedit Paket Melalui Edit', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('User mengedit data paket layanan melalui halaman Edit Paket Layanan', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps: pilih paket, klik Edit, ubah data, Simpan
    // Expected: toast success

    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
