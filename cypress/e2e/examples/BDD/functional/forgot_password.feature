# Feature: Check validation for Forgot password

#     Background:
#         Given A customer lands on the service portal login page
#         And Click on the forgot password? text
#         Then The customer should navigate to forgot password page

#     Scenario: Successful send the request to change the password
#         When The customer enters a valid email
#         And Click on the Reset Password button

#     Scenario: Clicks on the reset password button
#         When The customer clicks on the reset password button without entering the email
#         Then The validation should be visible for the email text field

#     Scenario: Customer enters a not registered email address
#         When The customer enters not registered email address and clicks on the reset password button
#         Then The validation should be visible for not registered email Addresses

#     Scenario: Email validation while forgetting the password
#         When The customer enters an invalid email address
#         Then The customer should be able to see the validation message

#     Scenario Outline: Navigation to static pages via forgot password
#         When The customer clicks on the "<label>" on the forgot password page
#         Then The customer should be navigated to the appropriate "<label>" "<url>"
#         Examples:
#             | label              | url                                                                             |
#             | Contact Us         | /contact                                                                        |
#             | Terms & Conditions | /terms-and-conditions                                                           |
#             | iPhone app link    | https://apps.apple.com/in/app/service-foods/id1429455264?platform=ipad          |
#             | android app link   | https://play.google.com/store/apps/details?id=com.easternts.servicefoods.online |

#     Scenario: Navigation to the homepage by clicking on the Go back to account login link
#         When A customer clicks on the Go back to the account login
#         Then A customer should able to navigate to the login page

#     Scenario: Check links for the login link
#         When A customer clicks on the login text
#         And A customer does not enter the changed password
#         Then The validation should be visible of the not changed password

#     Scenario: Verify the home page after changing the password
#         When A customer enters a valid change password
#         Then The customer should able to login

