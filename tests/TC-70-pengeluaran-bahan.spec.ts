import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-70-pengeluaran-bahan
// Source: test-cases/TC-70-pengeluaran-bahan.md

test.describe('TC-70: Admin ingin membuat data Pengeluaran Bahan baru', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Admin ingin membuat data Pengeluaran Bahan baru', async ({ page }) => {
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
    // - Menampilkan button PKB Service
    // - Menampilkan button Karyawan
    // - Menampilkan button +Bahan
    // - Menampilkan button Batal
    // - Menampilkan button Simpan
    // - Menampilkan button Simpan & Print
    // - Menampilkan dropdown button Gudang
    // - Menampilkan data:
    // - Kode PKB
    // - No Polisi
    // - Merk/Tyoe
    // - Warna
    // - Nama Pelanggan
    // - Kode Karyawan
    // - Nama Karyawan
    // - Total
    // - Menampilkan tabel dengan kolom:
    // - Kode Sparepart
    // - Nama Sparepart
    // - Qty
    // - Harga
    // - Jumlah
    // - Action
    // - · button "X" (merah)
    // - Menampilkan data terbaru di dalam tabel

    // Minimal check: verify login succeeded by ensuring login form is not visible
    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
