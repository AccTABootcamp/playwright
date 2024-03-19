const { BeforeAll, After, Before, Status } = require("@cucumber/cucumber");
const { chromium, expect } = require("@playwright/test");
const fs = require('fs');

let browser;
let page;
let launchOptions;
let context;

class Hooks {
  static async beforeAll() {
    console.log("BeforeAll hook started");
    const configData = fs.readFileSync("test-config.json", "utf8");
    const configFile = JSON.parse(configData);
    launchOptions = configFile.launchOptions;
    console.log("Using launch options:", launchOptions);
    console.log("BeforeAll hook completed");
  }

  static async beforeEach() {
    console.log("BeforeEach hook started");
    browser = await chromium.launch(launchOptions);
    context = await browser.newContext({ viewport: launchOptions.viewport })
    page = await context.newPage();
    console.log("BeforeEach hook completed");
  }

  static async afterEach(scenario) {
    console.log("AfterEach hook started");
    await Hooks.embedScreenshot.call(this, scenario);
    // await Hooks.logout();
    await page.context().clearCookies();
    await browser.close();
    console.log("AfterEach hook completed");
  }

  static async logout() {
    console.log("Logout hook started");
    await page.getByRole('link', { name: ' My Account' }).click();
    await page.locator('#top-links').getByRole('link', { name: 'Logout' }).click();
    await expect(page).toHaveTitle("Account Logout");
    console.log("Logout hook completed");
  }

  static async embedScreenshot(scenario) {
    const { result } = scenario;
    if (result.status === Status.FAILED) {
        const screenshotPath = 'reports/screenshots/' + `${Date.now()}_screenshot.png`; // Construct the absolute path to the screenshot file
        await page.screenshot({ 
            path: screenshotPath, 
            fullPage: true 
        });
        const screenshotBuffer = fs.readFileSync(screenshotPath); // Read the screenshot file as a buffer
        this.attach(screenshotBuffer, 'image/png'); // Attach the screenshot to the scenario
    }
  }

  static getPage() {
    return page;
  }
}

BeforeAll(Hooks.beforeAll);
Before(Hooks.beforeEach);
After(Hooks.afterEach);

module.exports = Hooks;
