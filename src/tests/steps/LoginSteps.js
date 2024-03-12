const { When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const LoginPage = require("../pages/LoginPage");

let loginPageInstance;

Then('user is redirected to Login page', async function () {
    loginPageInstance = new LoginPage();
    await expect(loginPageInstance.page).toHaveTitle('Account Login');
    await expect(loginPageInstance.page).toHaveURL(loginPageInstance.loginPageUrl);
});

When('user fills in login form with valid credentials', async function () {
    await loginPageInstance.fillLoginForm('john.doe.testing!mail5@gmail.com', '1Password!');
});

Then('user clicks Login button below Login form', async function () {
    await loginPageInstance.loginButton.click();
});