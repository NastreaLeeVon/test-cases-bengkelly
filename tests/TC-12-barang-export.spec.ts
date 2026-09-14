import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { DashboardPage } from '../pages/dashboard.page';

test.describe('TC-12: Barang/Sparepart - Export', () => {
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

  test('Export Data Barang', async ({ page }) => {
    await page.getByRole('button', { name: 'Export' }).click();
    
    await page.getByRole('radio', { name: /Semua Data/i }).check();
    
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Download XLSX' }).click();
    const download = await downloadPromise;
    
    expect(download.suggestedFilename()).toContain('.xlsx');
  });
});
