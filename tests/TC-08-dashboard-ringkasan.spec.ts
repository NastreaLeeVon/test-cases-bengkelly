import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('TC-08: Dashboard Ringkasan Penjualan', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(process.env.LOGIN_EMAIL as string, process.env.LOGIN_PASSWORD as string);
    await page.waitForLoadState('networkidle');
  });

  test('Admin melihat data ringkasan cepat penjualan hari ini', async ({ page }) => {
    // Pengecekan teks dinamis ringkasan
    await expect(page.getByText(/booking hari ini/i).first()).toBeAttached();
    await expect(page.getByText(/unit yang dikerjakan/i).first()).toBeAttached();
    await expect(page.getByText(/PKB yang aktif/i).first()).toBeAttached();
    await expect(page.getByText(/omset/i).first()).toBeAttached();
  });
});
