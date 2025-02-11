const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const SignupPage = require('../page_objects/SignupPage')

Given("I open the signup page", () => {
  SignupPage.visit();
});

When("I enter a valid firstname {string}", (firstname) => {
  SignupPage.fillFirstname(firstname);
});

When("I enter a valid lastname {string}", (lastname) => {
  SignupPage.fillLastname(lastname);
});

When("I enter a valid email {string}", (email) => {
  SignupPage.fillEmail(email);
});

When("I enter a valid password {string}", (password) => {
  SignupPage.fillPassword(password);
});

When("I click on the signup button", () => {
  SignupPage.submit();
});

Then("I should be redirected to the home page", () => {
  cy.url().should("include", "https://www.silverstreakstore.com/"); 
});

