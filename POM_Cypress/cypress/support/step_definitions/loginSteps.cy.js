const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const LoginPage = require('../page_objects/LoginPage');

Given('I am on the login page', () => {
  LoginPage.visit();
});

When('I enter valid username and password', () => {
  
  LoginPage.fillUsername('shreya@gmail.com');
  LoginPage.fillPassword('Shreya@123');
  LoginPage.submit();
});

Then('I should be redirected to the dashboard', () => {
  cy.url().should('include', 'https://www.silverstreakstore.com/account');
});

