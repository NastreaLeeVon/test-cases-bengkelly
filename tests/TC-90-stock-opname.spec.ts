import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-90-stock-opname
// Source: test-cases/TC-90-stock-opname.md

test.describe('TC-90: Admin ingin melihat data Stock Opname', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Admin ingin melihat data Stock Opname', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Admin membuka halaman dev.bengkelly.co.id
    // 2. Input username          3.Input password
    // 4. Memilih halaman stok menu dan pembelian di sidebar
    // 5. Memilih sub-menu Stok Opname

    // Expected result (from markdown):
    // - Menampilkan beberapa button pada Top Bar table:
    // - Buat Stock Opname button
    // - Stock Opname Barang button
    // - Menampilkan kolom Search
    // - Menampilkan tabel PR Pembelian yang memiilki kolom:
    // - Kode
    // - · Icon sort & filter (Anak panah ke atas dan ke bawah - Ascending & Descending)
    // - Tanggal
    // - · Icon sort & filter (Anak panah ke atas dan ke bawah - Ascending & Descending)
    // - Keterangan
    // - · Icon sort & filter (Anak panah ke atas dan ke bawah - Ascending & Descending)
    // - Gudang
    // - · Icon sort & filter (Anak panah ke atas dan ke bawah - Ascending & Descending)
    // - Admin
    // - · Icon sort & filter (Anak panah ke atas dan ke bawah - Ascending & Descending)
    // - Action
    // - · Icon sort & filter (Anak panah ke atas dan ke bawah - Ascending & Descending)
    // - Menampilkan text Pagination info:
    // - · Showing 0 to 0 of 0 entries
    // - Menampilkan button Pagination:
    // - Menampilkan button Previous (disable - teks berwarna hitam)
    // - Menampilkan button Next (enable - teks berwarna biru)
    // - Menampilkan sort by filter
    // - Menampilkan sort by filter
    // - 10
    // - 25
    // - 50
    // - 100
    // - Menampilkan Whatsapp button

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
