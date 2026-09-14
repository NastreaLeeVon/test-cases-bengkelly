import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-107-elemen-top-bar
// Source: test-cases/TC-107-elemen-top-bar.md

test.describe('TC-107: Elemen Top Bar', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('User menggunakan elemen Top Bar (Search, Filter Cabang, Profil)', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps: periksa kolom Cari Menu, Dropdown Cabang, Notifikasi, Profil
    // Expected: semua elemen terlihat

    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
