export class MobilePhoneReplenishment {

    typePhoneNumber(phoneNumber){
        cy.get('[data-qa-node="phone-number"]')
        .type(phoneNumber)
    }

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
        cy.get('[data-qa-node="submit"]')
            .click()
            
    }

    checkDebitCard(debitCard){
        cy.get('[data-qa-node="card"]')
            .should('have.text', debitCard)
    }

    checkDebitAmount(debitAmount){
        cy.get('[data-qa-node="amount"]')
            .should('have.text', debitAmount )
    }

    checkDebitCommission(debitCommission){
        cy.get('[data-qa-node="commission"]')
            .eq(1)
            .should('have.text', debitCommission)
    }
    
    checkReceiverAmount(receiverAmount){
        cy.get(".amount")
            .find("span")
            .should("have.text" , receiverAmount)
    }

    checkPaymentCurrency(paymentCurrency){
        cy.get(".amount")
        .find("small")
        .should("contain.text" , paymentCurrency)
    }

}


export const mobileReplenishment = new MobilePhoneReplenishment()