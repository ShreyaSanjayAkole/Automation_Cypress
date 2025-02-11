describe("Page Navigation",()=>{

    it('Approach 1',()=>{

        cy.visit("https://demo.opencart.com/");
        cy.title().should('eq',"Your Store");
        
        cy.get(':nth-child(7) > .nav-link').click();
        cy.get('h2').should('have.text',"Cameras");

        cy.go('back');  //cy.go(-1)
        cy.title().should('eq',"Your Store");

        cy.go('forward');  //cy.go(1)
        cy.get("div[id='content'] h2").should('have.text',"Cameras");

        cy.reload();

    })

})