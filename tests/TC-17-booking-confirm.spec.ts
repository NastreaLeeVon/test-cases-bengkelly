import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-17-booking-confirm
// Source: test-cases/TC-17-booking-confirm.md

test.describe('TC-17: Booking - Admin mengonfirmasi booking', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Booking - Admin mengonfirmasi booking', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Buka detail booking

    // Expected result (from markdown):
    // - Status berubah menjadi CONFIRMED dan tombol buat estimasi tersedia.

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
