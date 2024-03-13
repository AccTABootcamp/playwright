const { Given, Then, Before } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const  HomePage  = require("../pages/HomePage");

let homePageInstance;

Before(() => {
    homePageInstance = new HomePage();
});

Given('user is at DemoShop HOME page', async function () {
    
    await homePageInstance.utils.visitPage(homePageInstance.page, homePageInstance.homePageUrl);
    await expect(homePageInstance.page).toHaveTitle('Your Store');
    await expect(homePageInstance.page).toHaveURL(homePageInstance.homePageUrl);
});

Then('user clicks Account icon at NAVIGATION BAR', async function () {
    await homePageInstance.myAccountIcon.click();
});

Then('user clicks Login at Account dropdown menu', async function () {
    await homePageInstance.myAccountDropdownOptionLogin.click();
});