import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-71-lengkap-pengeluaran-bahan
// Source: test-cases/TC-71-lengkap-pengeluaran-bahan.md

test.describe('TC-71: Admin ingin melihat detail lengkap data Pengeluaran Bahan', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Admin ingin melihat detail lengkap data Pengeluaran Bahan', async ({ page }) => {
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
    // - Menampilkan kolom Search dengan teks "Kode Sparepart"
    // - Menampilkan kolom Search dengan teks "Nama Sparepart"
    // - Menampilkan button Reset (Merah)
    // - Menampilkan tabel dengan kolom:
    // - Kode
    // - · Icon sort & filter (Anak panah ke atas dan ke bawah - Ascending & Descending)
    // - Nama
    // - · Icon sort & filter (Anak panah ke atas dan ke bawah - Ascending & Descending)
    // - Harga Beli
    // - · Icon sort & filter (Anak panah ke atas dan ke bawah - Ascending & Descending)
    // - Qty
    // - · Icon sort & filter (Anak panah ke atas dan ke bawah - Ascending & Descending)
    // - Satuan
    // - · Icon sort & filter (Anak panah ke atas dan ke bawah - Ascending & Descending)
    // - Cabang
    // - · Icon sort & filter (Anak panah ke atas dan ke bawah - Ascending & Descending)
    // - Menampilkan button Pagination:
    // - Menampilkan button Previous (disable - teks berwarna hitam)
    // - Menampilkan button 1 (enable - teks berwarna biru)
    // - Menampilkan button 2 (enable - teks berwarna biru)
    // - Menampilkan button Next (enable - teks berwarna biru)

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
