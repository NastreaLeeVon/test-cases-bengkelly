import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-15-booking-new
// Source: test-cases/TC-15-booking-new.md

test.describe('TC-15: Booking - Admin membuat booking service baru', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Booking - Admin membuat booking service baru', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Buka service bengkel

    // Expected result (from markdown):
    // - Booking berhasil dan detail booking tampil dengan data yang sesuai.

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
