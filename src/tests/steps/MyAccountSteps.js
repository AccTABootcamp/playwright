const { Then, When, Before } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const MyAccountPage = require("../pages/MyAccountPage");
const Utils = require("../../../helpers/Utils");

let myAccountPageInstance;

Before(() => {
    myAccountPageInstance = new MyAccountPage();
    console.log("MyAccountPage instance created in steps.")
});

Then('user is redirected to My Account page', async function () {
    await expect(myAccountPageInstance.page).toHaveTitle('My Account');
    await expect(myAccountPageInstance.page).toHaveURL(myAccountPageInstance.myAccountPageUrl);
});

Then('account update success message is displayed', async function () {
    await expect(myAccountPageInstance.accountUpdateSuccessMessage).toBeVisible();
});

When('user selects Edit Account option in right sub menu',async function () {
    await myAccountPageInstance.editAccountLinkRightSubMenu.click();
});

When('user sees sub menu on the {string} side of the page', async function (inputSide) {
    const side = await Utils.returnObjectPageSide(myAccountPageInstance.rightMenu, myAccountPageInstance.page);
    expect(side).toBe(inputSide);
  })

When('only the following links are present:',async function (dataTable) {
    await Utils.assertLinksArePresentInElement(dataTable, myAccountPageInstance.rightMenu);
    await Utils.assertInputTableSizeMatchesFormListSize(dataTable, myAccountPageInstance.rightMenu);
});