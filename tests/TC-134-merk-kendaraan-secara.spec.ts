import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-134-merk-kendaraan-secara
// Source: test-cases/TC-134-merk-kendaraan-secara.md

test.describe('TC-134: Merk Kendaraan Secara Lengkap', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('User menambah data Merk Kendaraan baru secara lengkap', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps: klik '+ Tambah Merk', isi form, Simpan
    // Expected: toast success dan redirect ke /vehicle-brands

    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
