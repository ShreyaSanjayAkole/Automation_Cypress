describe("UI elements", ()=>{

    it("radio button", () => {
        cy.visit("https://demoqa.com/radio-button")

        cy.get('label[for="yesRadio"]').click();

        cy.get('input#yesRadio').check().should("be.checked")
		
        cy.get('input#impressiveRadio').should("not.be.checked")

    })

    it("Checkbox", () => {
        cy.visit("https://artoftesting.com/samplesiteforselenium?utm_source=chatgpt.com")

        cy.get('input.Automation').uncheck().should("not.be.checked")

        cy.get('form input[type="checkbox"]').last().check();

    
    })

    it("dropdown with select tag", () => {
        cy.visit("https://artoftesting.com/samplesiteforselenium?utm_source=chatgpt.com")

        cy.get('#testingDropdown').select("Performance Testing")
   
    })

    it("dropdown without select tag", () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Iran').type('{enter}')
   
    })

    
})