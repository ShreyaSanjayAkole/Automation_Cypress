const { expect } = require("chai")

describe('Alerts', ()=>{

    it('Simple alert',()=>{

        cy.visit("https://www.tutorialspoint.com/selenium/practice/alerts.php")

        cy.get("button[onclick='showAlert()']").click()

        cy.on('window:alert',(t)=>{

            expect(t).to.contains('Hello world!')
        })
    })

    it('Confirmation alert',()=>{

        cy.visit("https://www.tutorialspoint.com/selenium/practice/alerts.php")

        cy.get("button[onclick='myDesk()']").click()

        cy.on('window:confirm',(t)=>{   // by default press ok button

            expect(t).to.contains('Press a button!')
        })

        cy.on('window:confirm',()=>false) //to press cancle button
    })

    it("Prompt alert",()=>{

        cy.visit("https://www.tutorialspoint.com/selenium/practice/alerts.php")

        cy.window().then((win)=>{

            cy.stub(win,'prompt').returns('welcome');
        })
        cy.get("button[onclick='myPromp()']").click()
    })

})