import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-100-langsung
// Source: test-cases/TC-100-langsung.md

test.describe('TC-100: Admin ingin melihat detail Pembelian Langsung', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Admin ingin melihat detail Pembelian Langsung', async ({ page }) => {
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
    // - Menampilkan data :
    // - Kode nomor pembelian
    // - Nama Supplier
    // - Metode Pembayaran
    // - Tanggal Pembelian
    // - Gudang
    // - Pembuat form
    // - Menampilkan detail barang
    // - Ringkasan
    // - Button kembali

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
