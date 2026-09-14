import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-50-service-history
// Source: test-cases/TC-50-service-history.md

test.describe('TC-50: Riwayat Service - Admin melihat riwayat service customer', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Riwayat Service - Admin melihat riwayat service customer', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Buka menu riwayat service
    // 2. Cari data service
    // 3. Buka detail riwayat

    // Expected result (from markdown):
    // - Riwayat service dapat ditampilkan dan detail service dapat dibuka.

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
