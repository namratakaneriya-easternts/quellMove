class LoginPage {
  get loginButton(){
    return cy.contains(' Login')
  }
  get email() {
    return cy.get('input[name="email"]');
  }
  get password() {
    return cy.get('input[name="password"]');
  }
  get eyeIcon() {
    return cy.get('button[aria-label="append icon"]');
  }
  
  get submitButton() {
    return cy.get('.v-btn__content');
  }
  get rememberMeCheckBox() {
    return cy.get('.v-input--selection-controls__ripple');
  }
  
         
  get pageNotFound() {
    return cy.contains('404');
  }
 

  login(email, password) {
    this.enterCredentials(email, password);
    this.clickOnLoginButton();
  }
  login(email, password) {
    this.enterCredentials(email, password);
    this.clickOnLoginButton();
  }

  enterCredentials(email, password) {
    if (email === "" || password === "") {
      this.clickOnLoginButton();
    } else {
      this.email.clear({ force: true }).type(email).wait(2000);
      this.password.clear({ force: true }).type(password);
    }
  }
  clickOnLogin(){
    this.loginButton.click({force :true})
  }

  clickOnLoginButton() {
    this.submitButton.click({ force: true });
  }
   
  clickOnCheckBox() {
    this.rememberMeCheckBox.click();
  }
  clickOnEyeIcon() {
    this.eyeIcon.click().wait(2000);
    this.eyeIcon.click();
  }
  checkNonValidURL() {
    cy.request({ url: "/404", failOnStatusCode: false })
      .its("status")
      .as("equal", 404);
    cy.visit("/404", { failOnStatusCode: false });
  }
  verifyErrorMessagePopup(errorMessageOnPopup) {
    cy.contains(errorMessageOnPopup);
  } 
  verifyPageNotFound() {
    this.pageNotFound.should("be.visible");
  }
  verifyLoginPage() {
    cy.contains(" Login").invoke("removeAttr","target").click()
    cy.url("baseUrl1").should("include", "/login")
  }
verifyDashboardURL(){
  cy.url("baseUrl1").should("include", "/dashboard")
}
  
}

export default LoginPage;
