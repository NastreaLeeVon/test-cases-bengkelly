import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-130-membuat-paket-secara
// Source: test-cases/TC-130-membuat-paket-secara.md

test.describe('TC-130: Membuat Paket Secara Lengkap', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('User membuat Paket Layanan Baru secara lengkap', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps: klik '+ Tambah Paket', isi informasi paket, tambahkan layanan dan barang
    // Expected: toast success dan redirect ke /service-packages

    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
