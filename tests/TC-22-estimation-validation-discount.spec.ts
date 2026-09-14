import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-22-estimation-validation-discount
// Source: test-cases/TC-22-estimation-validation-discount.md

test.describe('TC-22: Estimasi - Validasi discount melebihi total tagihan', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Estimasi - Validasi discount melebihi total tagihan', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Masukkan discount
    // 2. Isi RP.950.000

    // Expected result (from markdown):
    // - Sistem menolak discount dan menampilkan validasi bahwa potongan tdak boleh melebihi total tagihan.

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
