// /// <reference types="Cypress" />
// import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
// import LoginPage from "../../pages/login_page";


// const forgotPassword = new ForgotPassword();
// const login = new LoginPage();


// Given("A customer lands on the service portal login page", function () {
//   cy.visit(Cypress.config("baseUrl"));
// });

// And("Click on the forgot password? text", function () {
//   cy.wait(2000);
//   forgotPassword.clickOnForgotPassword();
// });

// Then("The customer should navigate to forgot password page", function () {
//   forgotPassword.verifyForgotPasswordPage();
// });

// When("The customer enters a valid email", function () {
//   forgotPassword.enterEmail(this.data.email);
// });

// And("Click on the Reset Password button", function () {
//   forgotPassword.clickOnResetPasswordBtn();
// });

// When(
//   "The customer clicks on the reset password button without entering the email",
//   function () {
//     forgotPassword.clickOnResetPasswordBtn();
//   }
// );

// Then("The validation should be visible for the email text field", function () {
//   forgotPassword.verifyMessageOnClickOfResetBtn(
//     this.data.forgot_pass_validation
//   );
// });

// When(
//   "The customer enters not registered email address and clicks on the reset password button",
//   function () {
//     forgotPassword.enterNotRegisteredEmail(this.data.forgot_password);
//   }
// );

// Then(
//   "The validation should be visible for not registered email Addresses",
//   function () {
//     forgotPassword.validationForNonValidEmail(this.data.forgot_pass_validation);
//   }
// );

// When("The customer enters an invalid email address", function () {
//   forgotPassword.invalidEmail(this.data.forgot_password);
// });

// Then("The customer should be able to see the validation message", function () {
//   forgotPassword.validationForInvalidEmail(this.data.forgot_pass_validation);
// });

// When(
//   /^The customer clicks on the "(.*)" on the forgot password page$/,
//   function (label) {
//     login.clickOnLabel(label);
//   }
// );

// Then(
//   /^The customer should be navigated to the appropriate "(.*)" "(.*)"$/,
//   function (label, url) {
//     login.verifyUrl(label, url);
//   }
// );

// When("A customer clicks on the Go back to the account login", function () {
//   forgotPassword.clickOnGoToLogin();
// });

// Then("A customer should able to navigate to the login page", function () {
//   switchCustomer.verifyLoginPage();
// });
// When("A customer clicks on the login text", function () {
//   forgotPassword.clickOnLoginText();
// });

// And("A customer does not enter the changed password", function () {
//   cy.visit(Cypress.config("baseUrl"));
//   forgotPassword.enterCredentialForChangedPassword(
//     this.data.email,
//     this.data.not_enter_change_pass
//   );
// });

// Then(
//   "The validation should be visible of the not changed password",
//   function () {
//     forgotPassword.verifyForNotChangePassword(
//       this.data.not_enter_change_pass_validation
//     );
//   }
// );

// When("A customer enters a valid change password", function () {
//   forgotPassword.clickOnGoToLogin();
//   login.login(this.data.email, this.data.password);
// });
// Then("The customer should able to login", function () {
//   login.clickOnLoginButton();
//   cy.selectCustomerCode();
//   searchPage.verifyPopOnHomePage();
//   switchCustomer.verifyHomePage();
// });
