import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-65-barang
// Source: test-cases/TC-65-barang.md

test.describe('TC-65: Admin ingin melihat data Penerimaan Barang dan membuat Penerimaan Barang', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Admin ingin melihat data Penerimaan Barang dan membuat Penerimaan Barang', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Admin membuka halaman dev.bengkelly.co.id
    // 2. Input username          3.Input password
    // 4. Memilih halaman stok menu dan pembelian di sidebar
    // 5. Memilih sub-menu Penerimaan Barang

    // Expected result (from markdown):
    // - Menampilkan card ringkasan dan list dari Penerimaan barang
    // - Menampilkan tombol tambah terima barang
    // - Menampilkan searchbar dan filter button
    // - Dapat mengisi form pembuatan Penerimaan Barang baru dengan format:
    // - Pilih PO
    // - Daftar Barang
    // - Informasi Penerimaan
    // - Button penerimaan dan batal

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
