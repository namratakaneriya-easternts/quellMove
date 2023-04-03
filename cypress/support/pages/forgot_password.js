// class ForgotPassword {
//   get forgotPassword() {
//     return cy.get('[data-testid="loginLinkForgotPwd"]');
//   }
//   get emailText() {
//     return cy.get('[data-testid="fp-txt-email"]');
//   }
//   get emailInput() {
//     return cy.get('[data-testid="loginTxtEmail"]');
//   }
//   get resetBtn() {
//     return cy.get('[data-testid="fp-btn-reset"]');
//   }
//   get goBackToAccountLogin() {
//     return cy.contains("Go back to account login");
//   }
//   get loginText() {
//     return cy.get('[data-testid="loginLinkLogin"]');
//   }
//   get password() {
//     return cy.get('[data-testid="loginTxtPassword"]');
//   }
//   get submitButton() {
//     return cy.get('[data-testid="loginBtnSignIn"]');
//   }

//   get verifyMessage() {
//     return cy.get('[class="q-field__bottom row items-start q-field__bottom--animated"]');
//   }
//   get OkButton() {
//     return cy.get('[data-testid="confirmation-success"]');
//   }

//   clickOnForgotPassword() {
//     this.forgotPassword.click({force: true});
//   }
//   clickOnResetPasswordBtn() {
//     this.resetBtn.click({force: true});
//   }
 
//   enterEmail(email) {
//     this.emailText.type(email);
//   }
//   clickOnGoToLogin() {
//     this.goBackToAccountLogin.click();
//   }
//   enterNotRegisteredEmail(forgot_password) {
//     this.emailText.type(forgot_password.not_registered_email);
//     this.resetBtn.click({force: true}).wait(3000);
//     this.OkButton.click({force: true});
//   }

//   invalidEmail(forgot_password) {
//     this.emailText.type(forgot_password.invalid_email);
//   }

//   validationForInvalidEmail(forgot_pass_validation) {
//     this.verifyMessage.as("have.text", forgot_pass_validation[0]);
//   }

//   validationForNonValidEmail(forgot_pass_validation) {
//     this.verifyMessage.as("have.text", forgot_pass_validation[2]);
//   }

//   clickOnLoginText() {
//     this.loginText.click({force: true});
//   }

//   enterCredentialForChangedPassword(email, not_enter_change_pass) {
//     this.emailInput.type(email);
//     this.password.type(not_enter_change_pass);
//     this.submitButton.click({force: true});
//     this.OkButton.click({force: true});
//   }

//   verifyForNotChangePassword(not_enter_change_pass_validation) {
//     this.verifyMessage.as("have.text", not_enter_change_pass_validation);
//   }
//   verifyForgotPasswordPage() {
//     cy.url("baseUrl").should("include", "/forgotten-password");
//   }
//   verifyMessageOnClickOfResetBtn(forgot_pass_validation) {
//     this.verifyMessage.should("have.text", forgot_pass_validation[1]);
//   }
// }
// export default ForgotPassword;
