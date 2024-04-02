@purchase
Feature: Purchase

  Background: User navigates to the Login page without logging-in
    Given user is at DemoShop HOME page
    Then user clicks Account icon at NAVIGATION BAR
    Then user clicks "Login" at Account dropdown menu
    Then user is redirected to "Account Login" page
    When user fills in login form with valid credentials
    And user clicks Login button below Login form
    Then user is redirected to "My Account" page

  @positive
  Scenario: Phone purchase flow, first time purchase
    When user clicks on Phones & PDAs menu option
    And user is redirected to "Phones & PDAs" page
    Then user clicks on ADD TO CART button for product "HTC Touch HD"
    Then user clicks on Shopping Cart in Navigation bar
    And user is redirected to "Shopping Cart" page
    Then user sees product "HTC Touch HD" on the page it has following credentials:
      | Product Name | HTC Touch HD |
      | Quantity     |            1 |
      | Unit Price   | $122.00      |
      | Total        | $122.00      |
    Then user sees the sub-total table and it has following credentials:
      | Sub-Total:       | $100.00 |
      | Eco Tax (-2.00): | $2.00   |
      | VAT (20%):       | $20.00  |
      | Total:           | $122.00 |
    Then user clicks the Checkout button at the bottom of the Shopping Cart page
    And user is redirected to "Checkout" page
    Then user selects option in Billing Details: I want to use a new address
    And user fills in the new Billing address form with following credentials:
      | First Name     | John                  |
      | Last Name      | Doe                   |
      | Company        | Optional Company name |
      | Address 1      | Mandatory address 123 |
      | Address 2      | Optional address 456  |
      | City           | Riga                  |
      | Post Code      | LV-1000               |
      | Country        | Latvia                |
      | Region / State | Rīga                  |
    Then user clicks the Continue button at the bottom of the Billing Details form
    Then user selects option in Delivery Details: I want to use a new address
    And user fills in the new Delivery address form with following credentials:
      | First Name     | John                  |
      | Last Name      | Doe                   |
      | Company        | Optional Company name |
      | Address 1      | Mandatory address 789 |
      | Address 2      | Optional address 987  |
      | City           | Ventspils             |
      | Post Code      | LV-3601               |
      | Country        | Latvia                |
      | Region / State | Ventspils             |
    Then user clicks the Continue button at the bottom of the Delivery Details form
    Then user selects in Delivery Method: Flat Shipping Rate - $5.00
    And user types Delivery comment "Optional comment text."
    Then user clicks the Continue button at the bottom of the Delivery Method form
    Then user selects in Payment Method: Cash On Delivery
    And user types Payment comment "Different optional comment text."
    Then user ticks-in checkbox: I have read and agree to the Terms & Conditions
    And user clicks the Continue button at the bottom of the Payment Method form
    Then user sees the subtotal table and it has following product credentials:
      | Product Name | HTC Touch HD |
      | Quantity     |            1 |
      | Unit Price   | $100.00      |
      | Total        | $100.00      |
    And user sees the subtotal table and it has following sub-total results:
      | Sub-Total:          | $100.00 |
      | Flat Shipping Rate: | $5.00   |
      | Total:              | $105.00 |
    Then user clicks the Confirm Order button at the bottom of the Confirm Order form
    And user is redirected to "Your order has been placed!" page
    Then user clicks the Continue button at the bottom of the page
    And user is redirected to "Your Store" page
    Then user clicks Account icon at NAVIGATION BAR
    And user clicks "Order History" at Account dropdown menu
    Then user is redirected to "Order History" page
