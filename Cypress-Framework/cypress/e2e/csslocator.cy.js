describe('CSS Locators',()=>{

    it("CSSLOcators -- Login",{ tags: '@smokeTag' },()=>{

        cy.visit("https://www.silverstreakstore.com/")
        cy.get("a.site-header__icon.site-header__account").click();
        cy.get("#CustomerEmail").type("shreya@gmail.com")
        cy.get("#CustomerPassword").type("Shreya@123")
        cy.get("input[value='Sign In']").click();


    })
})