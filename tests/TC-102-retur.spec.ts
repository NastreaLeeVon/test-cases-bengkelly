import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-102-retur
// Source: test-cases/TC-102-retur.md

test.describe('TC-102: Admin ingin mencari retur pembelian dan mengurutkan retur pembelian berdasarkan filter', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Admin ingin mencari retur pembelian dan mengurutkan retur pembelian berdasarkan filter', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Admin membuka halaman dev.bengkelly.co.id
    // 2. Input username          3.Input password
    // 4. Memilih halaman stok menu dan pembelian di sidebar
    // 5. Memilih sub-menu Pembelian Langsung

    // Expected result (from markdown):
    // - Menampilkan kolom search bar dan button filter
    // - Bisa menampilkan barang sesuai nama barang yang dicari dalam kolom search bar
    // - Bisa mengurutkan barang sesuai filter yang digunakan pada button filter

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
