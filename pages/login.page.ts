import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);
    // Selector disesuaikan dengan hasil record Codegen lu
    this.emailInput = page.getByRole('textbox', { name: 'Email atau Nomor HP' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.locator('button[type="submit"]');
  }

  async navigate() {
    await super.goto(process.env.BASE_URL as string);
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    // Submit bisa pakai klik tombol atau tekan Enter (sesuai codegen lu)
    await this.passwordInput.press('Enter');
  }
}
