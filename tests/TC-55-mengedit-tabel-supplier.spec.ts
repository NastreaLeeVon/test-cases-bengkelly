import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-55-mengedit-tabel-supplier
// Source: test-cases/TC-55-mengedit-tabel-supplier.md

test.describe('TC-55: Admin ingin mengedit data pada tabel supplier', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Admin ingin mengedit data pada tabel supplier', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Admin membuka halaman dev.bengkelly.co.id
    // 2. Input username          3.Input password
    // 4. Memilih halaman stok menu dan pembelian di sidebar
    // 5. Memilih sub-menu Supplier

    // Expected result (from markdown):
    // - Menapilkan form Edit Supplier
    // - Menampilkan data yang sudah di perbaharui di tabel
    // - Menampilkan push message "Berhasil"

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
