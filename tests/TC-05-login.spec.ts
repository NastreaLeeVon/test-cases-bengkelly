import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('TC-05: Login Feature (Negative)', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Admin Login dengan mengosongkan username dan password', async ({ page }) => {
    // Kosongkan email dan password
    await loginPage.login('', '');
    
    // Assert properti required dari email input
    const emailInput = loginPage.emailInput;
    const isRequired = await emailInput.evaluate((el: HTMLInputElement) => el.required);
    expect(isRequired).toBeTruthy();

    // Assert native HTML5 validation message
    const validationMessage = await emailInput.evaluate((el: HTMLInputElement) => el.validationMessage);
    // Kita gunakan toContain agar mencakup "Please fill out this field." di Chromium
    expect(validationMessage).toContain('Please fill out this field');
  });
});
