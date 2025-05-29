
import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async goTo() {
    await this.page.goto('https://www.demoblaze.com/');
  }

  async selectProduct(productName: string) {
    await this.page.click(`text=${productName}`);
  }
}
