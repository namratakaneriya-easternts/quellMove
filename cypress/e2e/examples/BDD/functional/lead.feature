Feature: lead functionality

  Background: 
    Given A user lands on the login page
    When The user logins into the portal
    And Click on the Login button
    And Clicks On the lead text from the menu
    And Clicks on the Add new button
    Then User should navigates to the Lead form page

  Scenario: crate a successfull lead
    And Enters the lead deatils in Form
    #And Clicks on the submit button
    # Then The User should be able to create the lead

  # Scenario Outline: Check Validation Messages When User does not Enter the Data and clicks on submit button
  #   And Clicks on the submit button
  #   Then The user should be seeing validation "<validationMessage>"

  #   Examples: 
  #     | validationMessage                                                                                                                                                                                                                                                                        |
  #     | First Name requiredLast Name requiredEmail requiredPhone requiredOrigin street address requiredOrigin City requiredOrigin Country requiredDestination City requiredDestination Country requiredMove type requiredLead provider requiredAssign to requiredMode of transportation required |

  # Scenario Outline: Check Validation Message For Phone Number
  #             And Enters the "<phoneNumber>"
  #             And Clicks on the submit button
  #            Then The User should be seeing validation "<errorMessage>" for the phone number
  #       Examples:
  #                 | phoneNumber | errorMessage                               |
  #                 | sau@#133    | The phone must be between 7 and 15 digits. |
  #                 | 12345       | The phone must be between 7 and 15 digits. |

  #       Scenario Outline: Check Validation Message For Invalid Email
  #             And Enters the email "<invalidEmail>"
  #            Then The User should be seeing validation "<emailErrorMessage>" for the email
  #       Examples:
  #                 | invalidEmail  | emailErrorMessage |
  #                 | testgmail.com | Email is invalid |
  #                 | test@.com     | Email is invalid |
  #                 | @gmailcom     | Email is invalid |
  #                 | 1234          | Email is invalid |

  # Scenario Outline: Check Validation Message For Not enters the Address of origin Address and destination Address
  # And Enters the lead deatils accept Address 
  # And Clicks on the submit button
  # Then The User should be seeing validation "<errorMessage>" for Address 