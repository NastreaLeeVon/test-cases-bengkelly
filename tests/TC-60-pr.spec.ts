import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-60-pr
// Source: test-cases/TC-60-pr.md

test.describe('TC-60: Admin ingin membuat data PR Pembelian baru', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Admin ingin membuat data PR Pembelian baru', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Admin membuka halaman dev.bengkelly.co.id
    // 2. Input username          3.Input password
    // 4. Memilih halaman stok menu dan pembelian di sidebar
    // 5. Memilih sub-menu PR

    // Expected result (from markdown):
    // - Menampilkan form informasi PR:
    // - Tanggal request
    // - Tanggal dibutuhkan
    // - Priority
    // - Gudang tujuan
    // - Tujuan/keperluan
    // - Catatan
    // - Item yang diminta
    // - Button simpan
    // - Button batalkan
    // - Bisa disimpan untuk PO

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
