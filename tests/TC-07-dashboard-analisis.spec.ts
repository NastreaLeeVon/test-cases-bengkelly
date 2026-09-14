import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { DashboardPage } from '../pages/dashboard.page';

test.describe('TC-07: Dashboard Analisis', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(process.env.LOGIN_EMAIL as string, process.env.LOGIN_PASSWORD as string);
    await page.waitForLoadState('networkidle');
  });

  test('Admin melihat data table di tab analisis dan trend', async ({ page }) => {
    // Assert 1: Menampilkan data omset 7 hari terakhir (Chart Omset)
    await expect(page.locator('#omsetChart')).toBeAttached();
    await expect(page.getByText('Omset Mingguan')).toBeAttached();
    
    // Assert 2: Menampilkan data dan status PKB (Asumsi div text)
    // await expect(page.getByText(/status PKB/i).first()).toBeAttached();
  });
});
