const { Given, Then } = require("@cucumber/cucumber");
const  HomePage  = require("../pages/HomePage");

const homePageInstance = new HomePage();

Given('user is at DemoShop HOME page', async function () {
    await homePageInstance.utils.visitPage(homePageInstance.page, homePageInstance.homePageUrl);
});

Then('user clicks Account icon at NAVIGATION BAR', async function () {
    await homePageInstance.myAccountIcon.click();
});

Then('user clicks {string} at Account dropdown menu', async function (string) {
    await homePageInstance.myAccountDropdownOptionLogin.click();
});