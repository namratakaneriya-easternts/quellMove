Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
/// <reference types="Cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../pages/login_page.js";

const login = new LoginPage();

Given("A user lands on the Quellmove login page", function () {
  cy.visit(Cypress.config("baseUrl1"));
});

Then("Clicks on the Login and navigates to the login page", function () {
  login.verifyLoginPage();
});


When(
  /^The user enters credentials "(.*)" and "(.*)"$/,
  function (email, password) {
    login.enterCredentials(email, password);
  }
);

And("Click on the eye icon of the password field", function () {
  login.clickOnEyeIcon();
});

And("Click on the remember me check box", function () {
  login.clickOnCheckBox();
});

And("Click on the Login button", function () {
  login.clickOnLoginButton();
});
Then ("user should navigates to the dashboard",function(){
  login.verifyDashboardURL();
})

Then(
  /^The user should be able to see the "(.*)"$/,
  function (errorMessageOnPopup) {
    login.verifyErrorMessagePopup(errorMessageOnPopup);
  }
);

// page not found

When("A user does not enter a valid URL", function () {
  login.checkNonValidURL();
});

Then("The user should be navigate to the 404 page", function () {
  login.verifyPageNotFound();
});
