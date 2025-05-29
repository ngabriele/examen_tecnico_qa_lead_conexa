
import { test as base } from '@playwright/test';
import fs from 'fs';

export const storageStatePath = 'storageState.json';

export const test = base.extend({
  storageState: async ({ }, use) => {
    if (!fs.existsSync(storageStatePath)) {
      const { chromium } = require('@playwright/test');
      const browser = await chromium.launch();
      const page = await browser.newPage();
      await page.goto('https://www.demoblaze.com/');

      await page.click('#login2');
      await page.waitForSelector('#loginusername');
      await page.fill('#loginusername', 'usuario_existente');
      await page.fill('#loginpassword', 'clave123');
      await page.click('button[onclick="logIn()"]');
      await page.waitForSelector('#logout2');

      await page.context().storageState({ path: storageStatePath });
      await browser.close();
    }

    await use(storageStatePath);
  }
});
