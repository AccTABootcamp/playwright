const { When, Then, Before } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const LoginPage = require("../pages/LoginPage");

let loginPageInstance;

Before(() => {
    loginPageInstance = new LoginPage();
    console.log("LoginPage instance created in steps.")
});

Then('user is redirected to Login page', async function () {
    await expect(loginPageInstance.page).toHaveTitle('Account Login');
    await expect(loginPageInstance.page).toHaveURL(loginPageInstance.loginPageUrl);
});

When('user fills in login form with valid credentials', async function () {
    await loginPageInstance.fillLoginForm('john.doe.testing!mail4@gmail.com', '1Password!');
});

Then('user clicks Login button below Login form', async function () {
    await loginPageInstance.loginButton.click();
});