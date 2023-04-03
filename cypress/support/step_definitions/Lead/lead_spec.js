import LoginPage from "../../pages/login_page";
import LeadPage from "../../pages/lead";

const login = new LoginPage();
const lead = new LeadPage();

Given("A user lands on the login page", function () {
  cy.visit(Cypress.config("baseUrl1"));
  login.verifyLoginPage();
});

When("The user logins into the portal", function () {
  login.login(this.data.email, this.data.password);
});

And("Clicks on the Login button", function () {
  login.clickOnLoginButton();
});

And("Clicks On the lead text from the menu", function () {
  lead.clickOnLead();
});

And("Clicks on the Add new button", function () {
  lead.clickOnAddButton();
});
Then ("User should navigates to the Lead form page",function(){
  lead.verifyLeadFormPage();
})
And ("Enters the lead deatils in Form",function(){
  lead.enterRequiredData();
})
And ("Clicks on the submit button",function(){
  lead.clickOnSubmitBtn();
})
Then ("The customer should be able to create the lead",function(){
  
})

And ("Clicks on the submit button",function(){
  lead.clickOnSubmitBtn();

})
Then(
  /^The user should be seeing validation "(.*)"$/,
  function (validationMessage) {
    lead.verifyValidationMsg(validationMessage);
  }
);