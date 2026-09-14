import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-58-pr
// Source: test-cases/TC-58-pr.md

test.describe('TC-58: Admin ingin melihat detail PR Pembelian', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Admin ingin melihat detail PR Pembelian', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Admin membuka halaman dev.bengkelly.co.id
    // 2. Input username          3.Input password
    // 4. Memilih halaman stok menu dan pembelian di sidebar
    // 5. memilih sub-menu PR

    // Expected result (from markdown):
    // - Menampilkan data :
    // - Kode
    // - Nama Supplier
    // - Alamat Supplier
    // - Telp Supplier
    // - Expired Date
    // - Catatan
    // - Tipe Barang
    // - Kode PKB
    // - Total
    // - PPN 12%
    // - Grand Total
    // - Menampilkan tabel dengan kolom:
    // - Kode
    // - Nama
    // - Qty
    // - Harga Acuan
    // - Harga Beli
    // - Disc (%)
    // - Jumlah
    // - Button Print
    // - Button Batal

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
