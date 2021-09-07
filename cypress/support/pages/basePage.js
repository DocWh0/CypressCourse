export class BasePage {

    typeAmount(amount){
        cy.get('[data-qa-node="amount"]')
        .type(amount)
    }

    typeDebitCardData(cardNumber, expDate, cvv){
        cy.get('[data-qa-node="numberdebitSource"]')
            .type(cardNumber)
        //card expire date
        cy.get('[data-qa-node="expiredebitSource"]')
            .type(expDate)
        //cvv card 
        cy.get('[data-qa-node="cvvdebitSource"]')
            .type(cvv)
        

    }

    submitPayment(){
        cy.get('button[type="submit"]')
            .click()
            
    }


}

export const basePage = new BasePage()
