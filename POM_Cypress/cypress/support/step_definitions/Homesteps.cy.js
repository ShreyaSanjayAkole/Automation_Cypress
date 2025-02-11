const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const HomePage = require('../page_objects/HomePage')

Given("I open the home page", () => {
  HomePage.visit();
});

Then("i should see the site logo",()=>{
    HomePage.verifySiteLogo();
})

When("i click on about option",()=>{
    HomePage.about();
    cy.wait(2000);
 
})

Then("i should redirect to about page and go back to home page",()=>{
   
    cy.url().should("include", "https://www.silverstreakstore.com/pages/about"); 
    cy.go('back');
})

When("I click on rings option",()=>{
    HomePage.rings();
})
Then("i should redirect to rings page",()=>{
    cy.url().should("include", "https://www.silverstreakstore.com/collections/rings"); 
})