const { test, expect } = require('@playwright/test');


test('Check for unsupported Edge parameters ', async ({ page }) => {  
  await page.goto('edge://version');  
  await expect(page.locator('body')).not().toHaveText(/--no-startup-window/);
  await expect(page.locator('body')).not().toHaveText(/--remote-debugging-pipe/);
});