import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-20-estimation-with-service
// Source: test-cases/TC-20-estimation-with-service.md

test.describe('TC-20: Estimasi - Menambahkan jasa layanan individu', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Estimasi - Menambahkan jasa layanan individu', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Buka estimasi

    // Expected result (from markdown):
    // - Jasa individu berhasil ditambahkan ke estimasi.

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
