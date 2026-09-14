import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('TC-01: Login Feature', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Successful login with valid credentials', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;
    
    await loginPage.login(email, password);
    
    // Tunggu sampai navigasi selesai setelah login
    await page.waitForLoadState('networkidle');
    
    // Validasi sementara (cek URL berubah atau tidak ada form login lagi)
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
