class LoginPage {
    visit() {
      cy.visit('https://www.silverstreakstore.com/account/login');
    }
  
    fillUsername(username) {
      cy.get('#CustomerEmail').clear({ force: true }).type(username);
    }
  
    fillPassword(password) {
      cy.get('#CustomerPassword').clear({ force: true }).type(password);
    }
  
    submit() {
      cy.get("input[value='Sign In']").click({ force: true });
    }
  }
  
  module.exports = new LoginPage();
  