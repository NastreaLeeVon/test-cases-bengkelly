import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { DashboardPage } from '../pages/dashboard.page';

test.describe('TC-14: Barang/Sparepart - Detail', () => {
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

  test('Melihat Detail Barang/Sparepart', async ({ page }) => {
    test.info().annotations.push({ type: 'INFO', description: 'Tombol Detail belum direkam di codegen.' });
    // await page.getByRole('button', { name: 'Detail' }).first().click();
  });
});
