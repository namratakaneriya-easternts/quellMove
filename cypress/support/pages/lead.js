let firstName;
let lastName;
let email;
var phonenumber;

class LeadPage {
  get lead() {
    return cy.contains("Lead");
  }
  get leadMenu() {
    return cy.get('[data-test-id="Lead"]');
  }
  get addButton() {
    return cy.get('[class="v-btn__content"]');
  }
  get submitBtn() {
    return cy.get(".btn-primary > .v-btn__content");
  }
  get formDetailValidation() {
    return cy.get('[class="v-messages__message"]');
  }
  get firstName() {
    return cy.get('input[name="first_name"]');
  }
  get lastName() {
    return cy.get('input[name="last_name"]');
  }
  get phoneNumber() {
    return cy.get('input[name="phone"]');
  }
  get emailAddress() {
    return cy.get('input[name="email"]');
  }
  get originAddressLine1() {
    return cy.get('input[name="source_street_address"]');
  }
  get originCity() {
    return cy.get('input[name="source_city"]');
  }
  get originCountry() {
    return cy.get('input[name="source_country"]');
  }
  get destinationCity() {
    return cy.get('input[name="destination_city"]');
  }
  get destinationCountry() {
    return cy.get('input[name="destination_country"]');
  }
  get containerType() {
    return cy.get('input[name="container_type_id"]');
  }
  get moveType() {
    return cy.get('input[name="move_type_id"]');
  }
  get assignTo() {
    return cy.get('input[name="assign_to_id"]');
  }
  get leadProvider() {
    return cy.get('input[name="lead_provider_id"]');
  }
  get modeOfTransportation() {
    return cy.get('input[name="mode_of_transportation_id"]');
  }
 get filterDropDown(){
 cy.get(':nth-child(1) > :nth-child(3) > .v-input__control > .v-input__slot > .v-select__slot > :nth-child(4) > .v-input__icon > .v-icon')
 }
 get moveTypeValue(){
  return cy.get('i[class="v-menu__content theme--light menuable__content__active"]')
 }
  clickOnLead() {
    cy.wait(2000);
    this.lead.click({ force: true });
    this.leadMenu.click({ force: true });
  }
  clickOnAddButton() {
    this.addButton.eq(1).click({ froce: true });
  }
  clickOnSubmitBtn() {
    this.submitBtn.click().wait(2000);
  }
  
  enterFirstName() {
    firstName = "rima" + Math.floor(Math.random() * (999 - 100 + 1) + 100);
    cy.log("name : " + firstName);
    this.firstName.click().clear().type(firstName);
  }

  enterLastName() {
    lastName = "patel" + Math.floor(Math.random() * (999 - 100 + 1) + 100);
    cy.log("name : " + lastName);
    this.lastName.click().type(firstName);
  }

  enterEmail() {
    email = "random" + Math.round(Math.random() * 100000) + "@email.com";
    cy.log("name : " + email);
    this.emailAddress.click().clear().type(email);
  }
  enterPhoneNumber() {
    phonenumber = Math.floor(Math.random() * 9000000000) + 1000000000;
    cy.log("name : " + phonenumber);
    this.phoneNumber.click().clear().type(phonenumber);
  }
  enterOriginAddressLine1(){
    this.originAddressLine1.type('10, vandana Society')
  }
  enterCity(){
    this.originCity.type('Surat');

  }
  enterCountry(){
    this.originCountry.type('India')

  }
  enterdestinationCity(){
    this.destinationCity.type('New York')

  }
  enterdestinationCountry(){
    this.destinationCountry.type('United States')

  }
  selectMoveType() {
    this.filterDropDown.contains("arrow_drop_down").first().click().wait(1000);
    this.moveTypeValue.eq(0).click().wait(1000);
  }
  // selectMoveType(){
  //   this.moveType.click({ force: true }).eq(0).click({ force: true })

  // }
  selectLeadProvider(){
    this.leadProvider.click({ force: true }).eq(0).click({force: true});
  }
  selectModeOfTarnportation(){
    this.modeOfTransportation.click({ force: true }).eq(0).click({force: true});
  }

  verifyLeadFormPage() {
    cy.url("baseUrl1").should("include", "lead/leads/add");
  }
  enterRequiredData() {
    this.enterFirstName();
    this.enterLastName();
    this.enterEmail();
    this.enterPhoneNumber();
    this.enterOriginAddressLine1();
    this.enterCity();
    this.enterCountry();
    this.enterdestinationCity();
    this.enterdestinationCountry();
    this.selectMoveType();
    this.selectLeadProvider();
    this.selectModeOfTarnportation();
    
  }
  
  verifyValidationMsg(validationMessage) {
    this.formDetailValidation.should("have.text", validationMessage);
  }
}

export default LeadPage;
