import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('TC-03: Login Feature (Negative)', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Admin Login dengan email yang salah dan password yang benar', async ({ page }) => {
    const wrongEmail = 'salah@bengkelly.co.id';
    const password = process.env.LOGIN_PASSWORD as string;
    
    await loginPage.login(wrongEmail, password);
    
    const errorMessage = page.getByText('Email atau Password Salah');
    await expect(errorMessage).toBeVisible();
  });
});
