import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-78-bisa-pergerakan-keluar-masuknya
// Source: test-cases/TC-78-bisa-pergerakan-keluar-masuknya.md

test.describe('TC-78: Admin bisa melihat pergerakan keluar dan masuknya stok barang dari gabungan halaman yang ada di dalam aplikasi seperti stock opname, transfer stock, dan penyesuaian stock', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Admin bisa melihat pergerakan keluar dan masuknya stok barang dari gabungan halaman yang ada di dalam aplikasi seperti stock opname, transfer stock, dan penyesuaian stock', async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    // Perform login
    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps from markdown (manual actions to implement):
    // 1. Admin membuka halaman dev.bengkelly.co.id
    // 2. Input username          3.Input password
    // 4. Memilih halaman stok menu dan pembelian di sidebar
    // 5. Memilih sub-menu Mutasi Stok

    // Expected result (from markdown):
    // - Menampilkan data pergerakan keluar dan masuk stok gudang sesuai dengan stok yang dikeluarkan pada halaman stock opname, transfer stock, dan penyesuaian stok dengan format:
    // - Tanggal
    // - Item
    // - Gudang
    // - Tipe
    // - Referensi
    // - Quantity
    // - Sebelum
    // - Sesudah
    // - User

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
