Feature: Login

  Background: User navigates to the Login page without logging-in
    Given user is at DemoShop HOME page
    Then user clicks Account icon at NAVIGATION BAR
    Then user clicks "Login" at Account dropdown menu
    Then user is redirected to Login page

  Scenario: Login form validation - valid credentials
    When user fills in login form with valid credentials
    Then user clicks Login button below Login form
