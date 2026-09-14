import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('TC-02: Login Feature (Negative)', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Admin Login dengan email benar dan password salah', async ({ page }) => {
    // Ambil email valid dari env
    const email = process.env.LOGIN_EMAIL as string;
    // Gunakan password yang sengaja disalahkan
    const wrongPassword = 'salahpassword123';
    
    await loginPage.login(email, wrongPassword);
    
    // Sesuai AC: Menampilkan Error Message "Email atau Password Salah"
    const errorMessage = page.getByText('Email atau Password Salah');
    
    // Assert bahwa pesan error tersebut muncul di layar
    await expect(errorMessage).toBeVisible();
  });
});
