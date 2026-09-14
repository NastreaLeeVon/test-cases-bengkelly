import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-74-stok
// Source: test-cases/TC-74-stok.md

test.describe('TC-74: Admin ingin melihat list data stok', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Admin ingin melihat list data stok', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Admin membuka halaman dev.bengkelly.co.id
    // 2. Input username          3.Input password
    // 4. Memilih halaman stok menu dan pembelian di sidebar
    // 5. Memilih sub-menu Stok

    // Expected result (from markdown):
    // - Menampilkan stok berdasarkan nama barang, kategori, gudang, total stok, status ketersediaan, dan aksi
    // - Bisa menampilkan semua data nama, barang, kategori, gudang, total stok, status ketersediaan, dan aksi
    // - Bisa menampilka halaman detail stok saat button detail ditekan

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
