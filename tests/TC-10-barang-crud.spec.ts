import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { DashboardPage } from '../pages/dashboard.page';

test.describe('TC-10: Barang/Sparepart - Tambah, Edit, Hapus', () => {
  let loginPage: LoginPage;
  let dashboardPage: DashboardPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    
    await loginPage.navigate();
    await loginPage.login(process.env.LOGIN_EMAIL as string, process.env.LOGIN_PASSWORD as string);
    await page.waitForLoadState('networkidle');
    
    await dashboardPage.masterDataMenu.click();
    await dashboardPage.getSubMenu('Barang/Sparepart').click();
    await page.waitForLoadState('networkidle');
  });

  test('Tambah, Edit, Hapus Barang/Sparepart', async ({ page }) => {
    // --- 1. TAMBAH BARANG ---
    await page.getByRole('link', { name: 'Tambah Barang' }).click();
    
    // Pilih gudang
    await page.getByPlaceholder(/Pilih Gudang/i).click();
    await page.getByText(/GUDANG KEDUA/i).first().click();
    
    // Isi field wajib
    await page.getByRole('textbox', { name: 'Nama Barang *' }).fill('Oli Mesin Test 123');
    await page.getByRole('textbox', { name: 'Harga Beli *' }).fill('10000');
    await page.locator('input[name="purchase_price"]').fill('10000').catch(() => {}); 
    
    await page.getByRole('textbox', { name: 'Harga Jual *' }).fill('15000');
    await page.locator('input[name="selling_price"]').fill('15000').catch(() => {});
    
    await page.getByRole('spinbutton', { name: 'Stok Minimum *' }).fill('5');
    
    await page.getByRole('button', { name: 'Simpan Barang' }).click();
    await page.waitForLoadState('networkidle');

    // --- 2. EDIT BARANG ---
    await page.getByRole('link', { name: 'Edit' }).first().click();
    await page.getByRole('textbox', { name: 'Harga Beli *' }).fill('12000');
    await page.getByRole('button', { name: 'Simpan Perubahan' }).click();
    await page.waitForLoadState('networkidle');

    // --- 3. HAPUS BARANG ---
    await page.getByRole('button', { name: 'Hapus' }).first().click();
    await page.getByText('Hapus', { exact: true }).click();
    await page.waitForLoadState('networkidle');
  });
});
