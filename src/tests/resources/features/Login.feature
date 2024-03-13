Feature: Login

  Background: User navigates to the Login page without logging-in
    Given user is at DemoShop HOME page
    Then user clicks Account icon at NAVIGATION BAR
    Then user clicks Login at Account dropdown menu
    Then user is redirected to Login page
    When user fills in login form with valid credentials
    Then user clicks Login button below Login form
    Then user is redirected to My Account page

  Scenario: Login form validation 1
    When user selects Edit Account option in right sub menu
    Then user is redirected to My Account Information page
    Then user fills in personal details editing form:
      | First Name | Olga                             |
      | Last Name  | Green                            |
      | Telephone  | 01234567890123456789012345678912 |
      | E-Mail     | john.doe.testing!mail5@gmail.com |
    And user clicks Continue button below personal details editing form
    Then user is redirected to My Account page
    And account update success message is displayed

  Scenario: Login form validation 2
    When user selects Edit Account option in right sub menu
    Then user is redirected to My Account Information page
    Then user fills in personal details editing form:
      | First Name | Ivar                             |
      | Last Name  | Pink                             |
      | Telephone  |     0123456789012345678901234512 |
      | E-Mail     | john.doe.testing!mail5@gmail.com |
    # And user clicks Continue button below personal details editing form
    Then user is redirected to My Account page
    And account update success message is displayed

  Scenario: Login form validation 3
    When user selects Edit Account option in right sub menu
    Then user is redirected to My Account Information page
    Then user fills in personal details editing form:
      | First Name | Santa                            |
      | Last Name  | Yellow                           |
      | Telephone  |           0123012345678901234512 |
      | E-Mail     | john.doe.testing!mail5@gmail.com |
    And user clicks Continue button below personal details editing form
    Then user is redirected to My Account page
    And account update success message is displayed
