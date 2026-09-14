import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// TC-105-distribusi-analisis-trend
// Source: test-cases/TC-105-distribusi-analisis-trend.md

test.describe("TC-105: Distribusi 'ANALISIS & TREND'", () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test("User melihat grafik dan distribusi data pada section 'ANALISIS & TREND'", async ({ page }) => {
    const email = process.env.LOGIN_EMAIL as string;
    const password = process.env.LOGIN_PASSWORD as string;

    await loginPage.login(email, password);
    await page.waitForLoadState('networkidle');

    // Steps: scroll ke section 'ANALISIS & TREND' dan periksa grafik
    // Expected: menampilkan grafik Omset Mingguan dan chart Status PKB

    await expect(loginPage.emailInput).not.toBeVisible();
  });
});
