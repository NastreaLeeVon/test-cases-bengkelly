import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('TC-09: Dashboard Akses Cepat', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(process.env.LOGIN_EMAIL as string, process.env.LOGIN_PASSWORD as string);
    await page.waitForLoadState('networkidle');
  });

  test('Admin ingin akses cepat ke aktivitas terkini', async ({ page }) => {
    // Note: Karena card sifatnya sangat spesifik ke UI/CSS kelas web lu, 
    // locator '.quick-access-card' ini perlu diganti dengan hasil copas dari Playwright Codegen
    
    // 1. Menampilkan 2 card
    // const quickAccessCards = page.locator('.quick-access-card'); 
    // await expect(quickAccessCards).toHaveCount(2); 

    // 2. Bisa mengantarkan ke halaman fitur tersebut (diklik pindah halaman)
    // await quickAccessCards.first().click();
    // await expect(page).not.toHaveURL(process.env.BASE_URL as string);
    
    test.info().annotations.push({ type: 'warning', description: 'Butuh paste locator asli dari Codegen' });
  });
});
