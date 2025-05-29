
import { Page } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async addToCart() {
    await this.page.click('a.btn.btn-success');
    await this.page.waitForEvent('dialog').then(dialog => dialog.accept());
  }
}
