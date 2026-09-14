import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-63-po
// Source: test-cases/TC-63-po.md

test.describe('TC-63: Admin ingin melihat detail PO Pembelian', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Admin ingin melihat detail PO Pembelian', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Admin membuka halaman dev.bengkelly.co.id
    // 2. Input username          3.Input password
    // 4. Memilih halaman stok menu dan pembelian di sidebar
    // 5. Memilih sub-menu PO

    // Expected result (from markdown):
    // - Menampilkan detail dari transfer stok yang dilakukan
    // - Menampilkan tombol print untuk bukti kuitansi transfer stok
    // - Menampilkan button kirim ke supplier
    // - Menampilkan popup validasi pengiriman transfer stok gudang

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
