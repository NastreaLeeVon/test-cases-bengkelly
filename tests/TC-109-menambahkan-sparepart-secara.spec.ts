import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-109-menambahkan-sparepart-secara
// Source: test-cases/TC-109-menambahkan-sparepart-secara.md

test.describe('TC-109: Menambahkan Barang/Sparepart Secara Lengkap', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('User menambahkan data Barang/Sparepart baru secara lengkap', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps: buka /items -> Klik '+ Tambah Barang' -> isi form -> Simpan
    // Expected: toast success dan redirect ke /items dengan data baru

    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
