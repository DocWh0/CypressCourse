export class Transfers {

    // typeDebitCardData(cardNumber, expDate, cvv){
    //     cy.get('[data-qa-node="numberdebitSource"]')
    //         .type(cardNumber)
    //     //card expire date
    //     cy.get('[data-qa-node="expiredebitSource"]')
    //         .type(expDate)
    //     //cvv card 
    //     cy.get('[data-qa-node="cvvdebitSource"]')
    //         .type(cvv)
    // }
    typeDebitNameAndSurname(name, surname){
        cy.get('[data-qa-node="firstNamedebitSource"]')
            .type(name)
            .get('[data-qa-node="lastNamedebitSource"]')
            .type(surname)
    }

    typeRecieverCard(recieverCard){
        cy.get('[data-qa-node="numberreceiver"]')
            .type(recieverCard)
    }  
    
    typeRecieverNameAndSurname(name, surname){
        cy.get('[data-qa-node="firstNamereceiver"]')
            .type(name)
            .get('[data-qa-node="lastNamereceiver"]')
            .type(surname)
    }
    // typeAmount(amount){
    //     cy.get('[data-qa-node="amount"]')
    //         .type(amount)
    // }

    typeComment(comment){
        cy.get('[data-qa-node="toggle-comment"]')
            .click()
            .get('[data-qa-node="comment"]')
            .type(comment)
    }

    // submitPayment(){
    //     cy.get('[data-qa-node="submit"]')
    //         .click()
    // }
 
        // submitPayment(){
        //     cy.contains('button','Transfer')
        //     //cy.get('button[type="submit"]')// analog
        //         .click()
        // }

    checkCard(debitCard, recieverCard){
        cy.get('[data-qa-node="payer-card"]')
            .should('have.text', debitCard)
            .get('[data-qa-node="receiver-card"]')
            .should('have.text', recieverCard)
    }
    checkAmountAndTotal(debitAmount, totalAmount){
        cy.get('[data-qa-node="payer-amount"]')
            .should('have.text', debitAmount)
            .get('[data-qa-node="total"]')
            .find('b')
            .should('contain.text', totalAmount)
    }

    checkDebitCommision(debitCommision){
        cy.get('[data-qa-node="payer-currency"]')
            .should('have.text', debitCommision)
    }

    checkTotalCurrency(totalCurrency){
        cy.get('[data-qa-node="total"]')
            .find('b')
            .should('contain.text', totalCurrency)

    }
    checkComment(comment){
        cy.get('[data-qa-node="comment"]')
            .should('have.text', comment) 
    }

}

export const transfers = new Transfers()