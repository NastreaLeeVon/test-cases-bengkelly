import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { DashboardPage } from '../pages/dashboard.page';

test.describe('TC-13: Barang/Sparepart - Search', () => {
  let loginPage: LoginPage;
  let dashboardPage: DashboardPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    
    await loginPage.navigate();
    await loginPage.login(process.env.LOGIN_EMAIL as string, process.env.LOGIN_PASSWORD as string);
    await page.waitForLoadState('networkidle');
    
    await dashboardPage.masterDataMenu.click();
    await dashboardPage.getSubMenu('Barang/Sparepart').click();
    await page.waitForLoadState('networkidle');
  });

  test('Menggunakan Search Bar Barang', async ({ page }) => {
    const searchInput = page.locator('input[type="search"]');
    await searchInput.fill('Oli Mesin');
    await searchInput.press('Enter');
    
    await page.waitForLoadState('networkidle');
  });
});
