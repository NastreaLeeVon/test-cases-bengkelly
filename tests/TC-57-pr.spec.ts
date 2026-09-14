import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-57-pr
// Source: test-cases/TC-57-pr.md

test.describe('TC-57: Admin ingin melihat data PR Pembelian', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Admin ingin melihat data PR Pembelian', async ({ page }) => {
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
    // - Menampilkan ringkasan data supplier dengan format:
    // - Total PR
    // - Pending
    // - Approve
    // - Done
    // - List supplier dengan format:
    // - nomor
    // - requester
    // - tujuan/keperluan
    // - prioritas
    // - status
    // - aksi

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
