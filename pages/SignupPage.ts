
import { Page, expect } from '@playwright/test';

export class SignupPage {
  constructor(private page: Page) {}

  async openSignupModal() {
    await this.page.click('#signin2');
    await this.page.waitForSelector('#sign-username');
  }

  async signup(username: string, password: string) {
    await this.page.fill('#sign-username', username);
    await this.page.fill('#sign-password', password);
    await this.page.click('button[onclick="register()"]');

    const dialog = await this.page.waitForEvent('dialog');
    expect(dialog.message()).toContain('Sign up successful.');
    await dialog.accept();
  }
}
