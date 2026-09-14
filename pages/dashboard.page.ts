import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class DashboardPage extends BasePage {
  readonly masterDataMenu: Locator;

  constructor(page: Page) {
    super(page);
    // Selector asli dari hasil record Codegen lu
    this.masterDataMenu = page.getByRole('button', { name: 'Master Data' });
  }

  // Fungsi dinamis menggunakan locator byRole 'link' persis seperti Codegen
  getSubMenu(name: string, exact: boolean = false): Locator {
    return this.page.getByRole('link', { name: name, exact: exact });
  }
}
