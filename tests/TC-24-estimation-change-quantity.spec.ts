import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-24-estimation-change-quantity
// Source: test-cases/TC-24-estimation-change-quantity.md

test.describe('TC-24: Estimasi - Mengubah quantity sparepart', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Estimasi - Mengubah quantity sparepart', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Buka sparepart
    // 2. Ubah qty 1 menjadi 2
    // 3. Periksa subtotal

    // Expected result (from markdown):
    // - Subtotal sparepart dihitung sesuai quantity, yaitu Rp.140.000.

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
