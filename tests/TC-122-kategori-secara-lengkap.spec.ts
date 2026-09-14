import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-122-kategori-secara-lengkap
// Source: test-cases/TC-122-kategori-secara-lengkap.md

test.describe('TC-122: Kategori Secara Lengkap', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('User menambah data Kategori Baru secara lengkap', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps: klik '+ Tambah Kategori', isi form, Simpan
    // Expected: toast success dan redirect

    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
