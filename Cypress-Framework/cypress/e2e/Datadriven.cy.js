describe("Data driven",()=>{

    
  it("Data Driven test",()=>{

    cy.visit('https://www.silverstreakstore.com/account/login');

    cy.fixture('testData').then((data)=>{

      cy.get("#CustomerEmail").type(data.email);
    cy.get("#CustomerPassword").type(data.password);
    cy.get("input[value='Sign In']").click();
    cy.wait(2000);
    cy.get('img.js.lazyautosizes.lazyloaded').should('be.visible')
      
    })
  
    

  });
          


})