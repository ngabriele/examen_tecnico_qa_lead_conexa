
import { chromium } from '@playwright/test';
import fs from 'fs';

(async () => {
  const storageStatePath = 'storageState.json';

  if (fs.existsSync(storageStatePath)) {
    console.log('✅ storageState.json ya existe.');
    return;
  }

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

  console.log('✅ storageState.json generado correctamente.');
})();
