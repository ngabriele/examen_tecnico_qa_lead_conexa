import { chromium } from '@playwright/test';
import { faker } from '@faker-js/faker';

(async () => {
  const storageStatePath = 'storageState.json';
  const username = faker.internet.username();
  const password = faker.internet.password();

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.demoblaze.com/');

  // Intentar registrarse
  await page.click('#signin2');
  await page.waitForSelector('#sign-username');
  await page.fill('#sign-username', username);
  await page.fill('#sign-password', password);
  await page.click('button[onclick="register()"]');

  try {
    const dialog = await page.waitForEvent('dialog', { timeout: 5000 });
    console.log(`📢 Registro: ${dialog.message()}`);
    await dialog.accept();
  } catch (e) {
    console.log('⚠️ El usuario ya estaba registrado o no apareció un diálogo.');
  }

  // Login
  await page.click('#login2');
  await page.waitForSelector('#loginusername');
  await page.fill('#loginusername', username);
  await page.fill('#loginpassword', password);
  await page.click('button[onclick="logIn()"]');
  await page.waitForSelector('#logout2');

  await page.context().storageState({ path: storageStatePath });
  await browser.close();

  console.log('✅ Usuario registrado y sesión almacenada en storageState.json');
})();