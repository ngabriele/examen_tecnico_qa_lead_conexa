
import { Page, expect } from '@playwright/test';

export class PlaceOrderPage {
  constructor(private page: Page) {}

  async clickPlaceOrder() {
    await this.page.click('button.btn-success');
  }

  async fillOrderForm(data: {
    name: string;
    country: string;
    city: string;
    card: string;
    month: string;
    year: string;
  }) {
    await this.page.fill('#name', data.name);
    await this.page.fill('#country', data.country);
    await this.page.fill('#city', data.city);
    await this.page.fill('#card', data.card);
    await this.page.fill('#month', data.month);
    await this.page.fill('#year', data.year);
    await this.page.click("button:has-text('Purchase')");
  }

  async expectConfirmationMessage() {
    const confirmation = await this.page.locator('.sweet-alert').textContent();
    expect(confirmation).toContain('Thank you for your purchase!');
  }
}
