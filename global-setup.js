const { chromium } = require('@playwright/test');

let pagePromise;

async function globalSetup(config) {
  const storageState = config.projects[0].use.storageState;

  const browser = await chromium.launch();
  const newPage = await browser.newPage();
  await newPage.context().storageState({ path: storageState });
  pagePromise = Promise.resolve(newPage);
}

async function getPage() {
  if (!pagePromise) {
    throw new Error('Page has not been initialized yet.');
  }
  return await pagePromise;
}

module.exports = { globalSetup, getPage };
