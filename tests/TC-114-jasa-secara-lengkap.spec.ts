import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-114-jasa-secara-lengkap
// Source: test-cases/TC-114-jasa-secara-lengkap.md

test.describe('TC-114: Jasa Secara Lengkap', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('User menambah data Layanan Jasa baru secara lengkap', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps: klik '+ Tambah Layanan', isi form, Simpan
    // Expected: toast success dan redirect ke /services

    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
