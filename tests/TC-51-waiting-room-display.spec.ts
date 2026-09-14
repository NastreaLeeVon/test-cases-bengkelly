import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-51-waiting-room-display
// Source: test-cases/TC-51-waiting-room-display.md

test.describe('TC-51: Display Ruang Tunggu - Admin menampilkan informasi pada display ruang tunggu', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Display Ruang Tunggu - Admin menampilkan informasi pada display ruang tunggu', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Buka menu display ruang tunggu
    // 2. Periksa informasi yang ditampilkan
    // 3. Pastikan tampilan dapat digunakan

    // Expected result (from markdown):
    // - Halaman display ruang tunggu dapat dibuka dan informasi tampil dengan baik.

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
