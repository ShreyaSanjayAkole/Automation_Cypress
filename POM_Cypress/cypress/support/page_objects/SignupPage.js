class SignupPage {
    visit() {
      cy.visit('https://www.silverstreakstore.com/account/register');
    }
  
    fillFirstname(Firstname) {
      cy.get('#FirstName',{includeShadowDom:true}).clear().type(Firstname);
    }
  
    fillLastname(Lastname) {
      cy.get('#LastName',{includeShadowDom:true}).clear().type(Lastname);
    }

    fillEmail(email) {
        cy.get('#Email',{includeShadowDom:true}).clear().type(email);
    }

    fillPassword(pass) {
        cy.get('#CreatePassword',{includeShadowDom:true}).clear().type(pass);
    }
  
    submit() {
      cy.get("input[value='Create']",{includeShadowDom:true}).click();
    }
  }
  
  module.exports = new SignupPage();
  