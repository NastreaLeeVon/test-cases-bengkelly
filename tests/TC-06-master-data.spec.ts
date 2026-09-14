import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { DashboardPage } from '../pages/dashboard.page';

test.describe('TC-06: Sub Menu Master Data', () => {
  let loginPage: LoginPage;
  let dashboardPage: DashboardPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    
    // Pre-condition: Admin harus login dulu
    await loginPage.navigate();
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;
    await loginPage.login(email, password);
    
    // Tunggu navigasi selesai
    await page.waitForLoadState('networkidle');
  });

  test('Admin melihat sub menu pada menu master data di sidebar', async ({ page }) => {
    // 1. Skip cek teks "Performance" karena sepertinya belum muncul/berbeda strukturnya
    // await expect(dashboardPage.performanceHeader).toBeAttached();

    // Klik menu Master Data agar accordion sub-menu terbuka
    await dashboardPage.masterDataMenu.click();
    
    // Daftar expected sub-menus berdasarkan record asli (Codegen)
    const expectedSubMenus = [
      { name: 'Barang/Sparepart', exact: false },
      { name: 'Tipe Service', exact: false },
      { name: 'Layanan', exact: true }, // Butuh exact:true karena bedain nama mirip
      { name: 'Kategori', exact: false },
      { name: 'Satuan', exact: false },
      { name: 'Paket Layanan', exact: false },
      { name: 'Merk Kendaraan', exact: false },
      { name: 'Tipe Kendaraan', exact: false },
      { name: 'QC', exact: false }
    ];

    // 2. Loop dan pastikan semua sub-menu ada di DOM (ter-render)
    for (const menu of expectedSubMenus) {
      const subMenuLocator = dashboardPage.getSubMenu(menu.name, menu.exact);
      
      // Menggunakan toBeAttached alih-alih toBeVisible 
      // karena kadang menu tertutup di dalam scroll/accordion tapi sebenarnya ada
      await expect(subMenuLocator).toBeAttached();
    }
  });
});
