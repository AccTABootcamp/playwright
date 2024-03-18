Feature: My_Account_change_password

  Background: User navigates to the Login page without logging-in
    Given user is at DemoShop HOME page
    Then user clicks Account icon at NAVIGATION BAR
    Then user clicks "Login" at Account dropdown menu
    Then user is redirected to "Account Login" page
    When user fills in login form with valid credentials
    And user clicks Login button below Login form
    Then user is redirected to "My Account" page
    When user sees sub menu on the "Right" side of the page
    Then user clicks "Password" button in the sub menu
    Then user is redirected to "Change Password" page

  Scenario Outline: Account information editing, changing password, valid input
    Then user sees heading title "Change Password"
    And user sees sub title "Your Password"
    And user sees button Back below editing form
    And user sees button Continue below editing form
    And only the following input fields are present:
      | Password         |
      | Password Confirm |
    And password input fields are empty
    Then user fills in password editing form with credentials:
      | Password         | <Password>         |
      | Password Confirm | <Password Confirm> |
    And user clicks button Back below editing form
    Then user is redirected to "My Account" page
    Then user clicks "Password" button in the sub menu
    And password input fields are empty
    Then user fills in password editing form with credentials:
      | Password         | <Password>         |
      | Password Confirm | <Password Confirm> |
    And user clicks button Continue below editing form
    Then user is redirected to "My Account" page
    And a success message appears: "Success: Your password has been successfully updated."
    Then user logs out
    Then user logs in using password: "<Password>"
    Examples:
      | Password                                 | Password Confirm                         |
      | 1Password!                               | 1Password!                               |
      # | 1Pa!                                     | 1Pa!                                     |
      # | 1Passwooooooooooooooooooooooooooooooord! | 1Passwooooooooooooooooooooooooooooooord! |

  Scenario Outline: Account information editing, changing password, invalid input
    Then user fills in password editing form with credentials:
      | Password         | <Password>         |
      | Password Confirm | <Password Confirm> |
    And user clicks button Continue below editing form
    Then user is redirected to "Change Password" page
    And the following error messages are displayed:
      | <PasswordErrorMessage>        |
      | <PasswordConfirmErrorMessage> |
    And no other error message is displayed
    Examples:
      | Password                                  | Password Confirm                          | PasswordErrorMessage                          | PasswordConfirmErrorMessage                    |
      |                                           | 1Password!                                | Password must be between 4 and 20 characters! | Password confirmation does not match password! |
      # |                                           |                                           | Password must be between 4 and 20 characters! |                                                |
      # | 1P!                                       | 1P!                                       | Password must be between 4 and 20 characters! |                                                |
      # | 1Passwoooooooooooooooooooooooooooooooord! | 1Passwoooooooooooooooooooooooooooooooord! | Password must be between 4 and 20 characters! |                                                |
      # | 1Password!                                |                                           |                                               | Password confirmation does not match password! |
      # | 1Password!                                | 1WrongPassword!                           |                                               | Password confirmation does not match password! |

