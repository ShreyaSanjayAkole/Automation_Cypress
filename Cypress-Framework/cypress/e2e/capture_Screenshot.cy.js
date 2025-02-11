describe("Capture screenshot and Videos",()=>{

    it("capture screenshot",()=>{

        cy.visit("https://demo.opencart.com/");
        cy.screenshot("homepage");
        cy.wait(2000);
        cy.get('#logo > a > .img-fluid').screenshot("logo");
    })

})