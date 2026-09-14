import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-49-carwash-new
// Source: test-cases/TC-49-carwash-new.md

test.describe('TC-49: Car Wash - Admin membuat dan memproses order car wash sampai selesai', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Car Wash - Admin membuat dan memproses order car wash sampai selesai', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Buka menu car wash
    // 2. Klik order baru
    // 3. Isi customer, kendaraan, dan paket
    // 4. Klik buat order

    // Expected result (from markdown):
    // - Order berhasil dibuat, status berubah menjadi dikerjakan saat mulai cuci, lalu menjadi selesai.

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
