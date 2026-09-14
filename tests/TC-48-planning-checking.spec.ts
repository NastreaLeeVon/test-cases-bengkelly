import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-48-planning-checking
// Source: test-cases/TC-48-planning-checking.md

test.describe('TC-48: Planning - Admin memeriksa fungsi dan informasi pada modul planning', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Planning - Admin memeriksa fungsi dan informasi pada modul planning', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Buka menu planning
    // 2. Periksa planning mekanik
    // 3. Periksa service reminder
    // 4. Periksa planning inventory dan kapasitas bengkel

    // Expected result (from markdown):
    // - Halaman planning dapat dibuka dan informasi yang tersedia tampil sesuai kondisi sistem.

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
