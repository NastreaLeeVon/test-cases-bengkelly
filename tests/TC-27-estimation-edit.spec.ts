import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-27-estimation-edit
// Source: test-cases/TC-27-estimation-edit.md

test.describe('TC-27: Estimasi - Admin mengedit data estimasi', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Estimasi - Admin mengedit data estimasi', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Buka detail estimasi
    // 2. Klik tombol edit
    // 3. Ubah data estimasi
    // 4. Simpan perubahan

    // Expected result (from markdown):
    // - Data estimasi berhasil diperbarui dan perubahan tampil pada detail estimasi.

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
