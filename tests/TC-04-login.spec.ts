import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('TC-04: Login Feature (Negative)', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Admin Login dengan email dan password yang salah', async ({ page }) => {
    const wrongEmail = 'salah@bengkelly.co.id';
    const wrongPassword = 'salahpassword123';
    
    await loginPage.login(wrongEmail, wrongPassword);
    
    const errorMessage = page.getByText('Email atau Password Salah');
    await expect(errorMessage).toBeVisible();
  });
});
