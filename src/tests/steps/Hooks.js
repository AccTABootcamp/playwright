const { BeforeAll, AfterAll } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");

let browser;
let page;

class Hooks {
  static async beforeAll() {
    console.log("BeforeAll hook started");
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    console.log("BeforeAll hook completed");
  }

  static async afterAll() {
    console.log("AfterAll hook started");
    await browser.close();
    console.log("AfterAll hook completed");
  }

  // Add a getter method to access the page instance
  static getPage() {
    return page;
  }
}

BeforeAll(Hooks.beforeAll);
AfterAll(Hooks.afterAll);

module.exports = Hooks;
