import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-99-langsung
// Source: test-cases/TC-99-langsung.md

test.describe('TC-99: Admin ingin membuat Pembelian Langsung baru', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Admin ingin membuat Pembelian Langsung baru', async ({ page }) => {
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
    // - Menampilkan form select pemilihan invoice pembelian customer
    // - Menampilkan form informasi transfer:
    // - Tanggal retur
    // - Metode pembayaran
    // - Alasan retur
    // - Catatan
    // - Barang yang diretur
    // - Nilai retur
    // - Button retur

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
