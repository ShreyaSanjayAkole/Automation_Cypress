
describe("Mouse Operations",()=>{

    it('MouseHover',()=>{   
        cy.visit("https://demo.opencart.com/");
        

        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();

        cy.wait(2000)

        cy.get("div[class='dropdown-menu show'] li:nth-child(2) a:nth-child(1)")
        .should('be.visible');
    })

    it('Right click',()=>{

        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");

        //Approch 1
        cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu');
        cy.get(".context-menu-icon-copy > span").should('be.visible');

        //Approch 2
        cy.get('.context-menu-one.btn.btn-neutral').rightclick();
        cy.get(".context-menu-icon-copy > span").should('be.visible');


    })

    it('Double click',()=>{

        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3");
        
        cy.frameLoaded('#iframeResult');     //Load the frame 

        //Appraoch1 - triger() 
        // cy.iframe('#iframeResult').find('button[ondblclick="myFunction()"]').trigger('dblclick'); 
        // cy.iframe('#iframeResult').find('#field2').should('have.value', 'Hello World!'); 

        // //Appraoch2 dblclick() 
        cy.iframe('#iframeResult').find('button[ondblclick="myFunction()"]').dblclick(); 
        cy.iframe('#iframeResult').find('#field2').should('have.value', 'Hello World!');


    })

    it.only('Drag and Drop using plugin',()=>{

        cy.visit('https://the-internet.herokuapp.com/drag_and_drop');

        cy.get('#column-a') // Source element
        .trigger('mousedown', { which: 1 });

        cy.get('#column-b') // Target element
        .trigger('mousemove')
        .trigger('mouseup', { force: true });

    })

    it('Scrolling page',()=>{

    })





})