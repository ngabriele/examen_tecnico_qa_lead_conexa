
import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async openCart() {
    await this.page.click('#cartur');
  }

  async expectProductInCart(productName: string) {
    await this.page.waitForSelector('tr.success');
    const text = await this.page.textContent('tr.success');
    expect(text).toContain(productName);
  }
}
