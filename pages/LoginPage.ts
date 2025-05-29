
import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async openLoginModal() {
    await this.page.click('#login2');
    await this.page.waitForSelector('#loginusername');
  }

  async login(username: string, password: string) {
    await this.page.fill('#loginusername', username);
    await this.page.fill('#loginpassword', password);
    await this.page.click('button[onclick="logIn()"]');
    await this.page.waitForSelector('#logout2');
    const welcomeText = await this.page.locator('#nameofuser').textContent();
    expect(welcomeText).toContain(username);
  }
}
