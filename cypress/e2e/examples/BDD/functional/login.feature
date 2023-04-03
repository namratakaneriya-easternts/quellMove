Feature: Login into Quellmove CRM

  Background: 
    Given A user lands on the Quellmove login page
    Then Clicks on the Login and navigates to the login page

  Scenario Outline: Successful Login
    When The user enters credentials "<email>" and "<password>"
    And Click on the eye icon of the password field
    And Click on the remember me check box
    And Click on the Login button
    Then user should navigates to the dashboard

    Examples: 
      | email                    | password   |
      | rima.easternts@gmail.com | Admin@123! |

  Scenario Outline: UnSuccessful Login
    When The user enters credentials "<email>" and "<password>"
    And Click on the Login button
    Then The user should be able to see the "<errorMessageOnPopup>"

    Examples: 
      | email                       | password       | errorMessageOnPopup  |
      | dishant.mehta@easternts.com | wrong-password | Invalid credentials. |
      | rima@yopmair.com            | Admin@123!     | Invalid credentials. |

  Scenario Outline: Email validation while login
    When The user enters credentials "<email>" and "<password>"
    Then The user should be able to see the "<errorMessageOnPopup>"

    Examples: 
      | email                    | password   | errorMessageOnPopup |
      | rima                     | Admin@123! | Email is invalid    |
      |                          |            | Email required      |
      |                          |            | Password required   |
      | rima.shah@easternts      | Admin@123! | Email is invalid    |
      | rima.easternts@gmail.com |            | Password required   |
      |                          | Admin@123! | Email required      |

  Scenario: Check the 404 page
    When A user does not enter a valid URL
    Then The user should be navigate to the 404 page
