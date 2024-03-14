const { BeforeAll, AfterAll, After, Before } = require("@cucumber/cucumber");
const { chromium, expect } = require("@playwright/test");

let browser;
let page;

class Hooks {
  static async beforeAll() {
    console.log("BeforeAll hook started");
    browser = await chromium.launch({ headless: true, ignoreHTTPSErrors: true });
    console.log("BeforeAll hook completed");
  }

  static async beforeEach() {
    console.log("BeforeEach hook started");
    page = await browser.newPage({ ignoreHTTPSErrors: true, ignoreCertificateErrors: true });
    console.log("BeforeEach hook completed");
  }

  static async afterEach() {
    console.log("AfterEach hook started");
    await Hooks.logout();
    await page.context().clearCookies();
    await page.close();
    console.log("AfterEach hook completed");
  }

  static async afterAll() {
    console.log("AfterAll hook started");
    await browser.close();
    console.log("AfterAll hook completed");
  }

  static async logout() {
    console.log("Logout hook started");
    await page.getByRole('link', { name: ' My Account' }).click();
    await page.locator('#top-links').getByRole('link', { name: 'Logout' }).click();
    await expect(page).toHaveTitle("Account Logout");
    console.log("Logout hook completed");
  }

  static getPage() {
    return page;
  }
}

BeforeAll(Hooks.beforeAll);
Before(Hooks.beforeEach);
After(Hooks.afterEach);
AfterAll(Hooks.afterAll);

module.exports = Hooks;
