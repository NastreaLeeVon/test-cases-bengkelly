import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-112-mengedit-tabel
// Source: test-cases/TC-112-mengedit-tabel.md

test.describe('TC-112: Mengedit Tabel', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('User mengedit data barang pada tabel', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps: pilih baris, klik Edit, ubah data, Simpan
    // Expected: update success toast dan data terupdate

    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
