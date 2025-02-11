describe("Assertion demo",() =>{

    it("Implicit Assertions",() =>{

        cy.visit("https://www.silverstreakstore.com/")

        // cy.url().should('include','silver')
        // cy.url().should('eq','https://www.silverstreakstore.com/')
        
        // cy.url().should('include','silver')
        // .should('eq','https://www.silverstreakstore.com/')

        cy.url().should('include','silver')
        .and('eq','https://www.silverstreakstore.com/')
        .and('contain','www')

        cy.title().should('include', 'Silver Streak Store') 
        .and('eq', "Silver Streak | Shop Handcrafted Silver Jewellery – Silver Streak Store") 
        .and('contain', 'Silver Jewellery') 

        cy.get('img.js.lazyautosizes.lazyloaded').should('be.visible') 
        .and('exist') 
  
    })

    it("Explicit Assertions",() => {

        cy.visit("https://www.silverstreakstore.com/account/login")



        cy.get("h1.text-center").then((x) => {
            let home = x.text(); 
            expect(home).to.equal("Login");  //BDD style
        });


    })

})