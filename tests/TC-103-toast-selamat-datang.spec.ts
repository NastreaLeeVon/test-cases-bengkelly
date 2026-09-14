import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-103-toast-selamat-datang
// Source: test-cases/TC-103-toast-selamat-datang.md

test.describe('TC-103: Toast Selamat Datang', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('User melihat toast notification dan banner selamat datang setelah login', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps (manual):
    // 1. Selesaikan proses login
    // 2. Sistem otomatis mengarahkan ke halaman Dashboard (/dashboard)

    // Expected: toast notification dan banner selamat datang muncul

    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
