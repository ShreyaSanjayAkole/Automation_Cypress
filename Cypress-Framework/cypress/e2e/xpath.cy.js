describe('CSS Locators',()=>{

    it("CSSLOcators",()=>{

        cy.visit("https://www.silverstreakstore.com/")
        cy.xpath("//a[@class='site-header__icon site-header__account']").click();
        cy.xpath("//input[@id='CustomerEmail']").type("shreya@gmail.com")
        cy.xpath("//input[@id='CustomerPassword']").type("Shreya@123")
        cy.xpath("//input[@value='Sign In']").click();


    })
})