import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-68-pengeluaran-bahan
// Source: test-cases/TC-68-pengeluaran-bahan.md

test.describe('TC-68: Admin ingin melihat data Pengeluaran Bahan', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Admin ingin melihat data Pengeluaran Bahan', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Admin membuka halaman dev.bengkelly.co.id
    // 2. Input username          3.Input password
    // 4. Memilih halaman stok menu dan pembelian di sidebar
    // 5. Memilih sub-menu Pengeluaran Bahan

    // Expected result (from markdown):
    // - Menampilkan button pada Top Bar table:
    // - Buat Pengeluaran Bahan button
    // - Menampilkan kolom Search
    // - Menampilkan text Pagination info:
    // - · Showing 0 to 0 of 0 entries
    // - Menampilkan button Pagination:
    // - Menampilkan button Previous (disable - teks berwarna hitam)
    // - Menampilkan button Next (enable - teks berwarna biru)
    // - Menampilkan tabel Pengeluaran Bahan yang memiilki kolom:
    // - Kode
    // - · Icon sort & filter (Anak panah ke atas dan ke bawah - Ascending & Descending)
    // - Tanggal
    // - · Icon sort & filter (Anak panah ke atas dan ke bawah - Ascending & Descending)
    // - No Polisi
    // - · Icon sort & filter (Anak panah ke atas dan ke bawah - Ascending & Descending)
    // - Kode PKB
    // - · Icon sort & filter (Anak panah ke atas dan ke bawah - Ascending & Descending)
    // - Total
    // - · Icon sort & filter (Anak panah ke atas dan ke bawah - Ascending & Descending)
    // - Karyawan
    // - · Icon sort & filter (Anak panah ke atas dan ke bawah - Ascending & Descending)
    // - Gudang
    // - · Icon sort & filter (Anak panah ke atas dan ke bawah - Ascending & Descending)
    // - Admin
    // - · Icon sort & filter (Anak panah ke atas dan ke bawah - Ascending & Descending)
    // - Action
    // - · button icon edit
    // - · button icon file
    // - · button icon delete
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
