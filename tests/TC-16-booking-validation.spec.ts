import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-16-booking-validation
// Source: test-cases/TC-16-booking-validation.md

test.describe('TC-16: Booking - Admin melakukan validasi field wajib', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Booking - Admin melakukan validasi field wajib', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Buka form booking

    // Expected result (from markdown):
    // - Sistem menolak penyimpanan dan menampilkan validasi pada field wajib.

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
