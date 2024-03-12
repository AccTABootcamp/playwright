const { Then, When } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const MyAccountInformationPage = require("../pages/myAccountInformationPage");

let myAccountInformationPageInstance;

Then('user is redirected to My Account Information page', async function () {
    myAccountInformationPageInstance = new MyAccountInformationPage();
    await expect(myAccountInformationPageInstance.page).toHaveTitle('My Account Information');
    await expect(myAccountInformationPageInstance.page).toHaveURL(myAccountInformationPageInstance.myAccountInformationPageUrl);
});

Then('user fills in personal details editing form:', async function (dataTable) {
    await myAccountInformationPageInstance.fillInformationEditingForm(dataTable);
});

Then('user clicks Continue button below personal details editing form', async function () {
    await myAccountInformationPageInstance.buttonContinue.click();
});
