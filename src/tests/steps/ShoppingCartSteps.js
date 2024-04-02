const { When, Then, Before } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const ShoppingCartPage = require("../pages/ShoppingCartPage");
const exp = require("constants");

let shoppingCartPageInstance;

Before(() => {
  shoppingCartPageInstance = new ShoppingCartPage();
});

When('user clicks on Phones & PDAs menu option', async function () {
  await shoppingCartPageInstance.phonesAndPDAsTab.click();
})

Then('user clicks the Checkout button at the bottom of the Shopping Cart page', async function () {
  await shoppingCartPageInstance.checkoutButton.click();
})

Then('user sees the sub-total table and it has following credentials:', async function (dataTable) {
  await shoppingCartPageInstance.assertSubtotalTableMatchesInputData(dataTable);
})

Then('user sees product {string} on the page it has following credentials:', async function (productName, dataTable) {
  const productRow = await shoppingCartPageInstance.returnProductRowByText(productName);
  expect(productRow).not.toBeNull;

  const data = dataTable.rowsHash();
  const nameCell = await shoppingCartPageInstance.returnTableCellByProductNameAndHeadingTitle("Product Name", productName);
  const quantityCell = await shoppingCartPageInstance.returnQuantityInputFieldByProductNameAndHeadingTitle(productName);
  const priceCell = await shoppingCartPageInstance.returnTableCellByProductNameAndHeadingTitle("Unit Price", productName);
  const totalCell = await shoppingCartPageInstance.returnTableCellByProductNameAndHeadingTitle("Total", productName);

  expect(nameCell).toContainText(data['Product Name']);
  expect(quantityCell).toHaveValue(data['Quantity']);
  expect(priceCell).toHaveText(data['Unit Price']);
  expect(totalCell).toHaveText(data['Total']);
})

