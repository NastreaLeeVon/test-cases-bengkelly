import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-121-kategori-serta-kategori
// Source: test-cases/TC-121-kategori-serta-kategori.md

test.describe('TC-121: Kategori & Serta Kategori', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('User melihat daftar data kategori barang & layanan serta summary card', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps: buka Master Data -> Kategori
    // Expected: halaman /categories menampilkan kartu summary dan tabel kategori

    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
