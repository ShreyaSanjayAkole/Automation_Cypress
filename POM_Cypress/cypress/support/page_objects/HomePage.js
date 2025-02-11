class HomePage{

    visit() {
        cy.visit('https://www.silverstreakstore.com/');
    }

    rings(){
        cy.get('a[href="/collections/rings"]').first().click({ force: true });
    }

    verifySiteLogo(){
		cy.get("img.js.lazyautosizes.lazyloaded").should("be.visible");
	}

    about(){
        cy.get("a[href='/pages/about']").click();
    }

    contact(){
        cy.get("a[text()='Contact us']").click();
    }
	
}
module.exports = new HomePage();