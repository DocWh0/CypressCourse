///<reference types="Cypress"/>
import {mobileReplenishment} from "../support/pages/mobileReplenishment"


it.only('Replenishment of Ukraine mobile phone number', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')


    mobileReplenishment.typePhoneNumber('930358540')
    mobileReplenishment.typeAmount('50')
    mobileReplenishment.typeDebitCardData('4552331448138217', '0524', '111' )
    cy.wait(3000)
    mobileReplenishment.submitPayment()
    mobileReplenishment.checkDebitCard('4552 **** **** 8217')
    mobileReplenishment.checkDebitAmount('50')
    mobileReplenishment.checkDebitCommission('2')
    mobileReplenishment.checkReceiverAmount('50')
    mobileReplenishment.checkPaymentCurrency(' UAH')





    
        /* заменили всё на функции 

        //enter mobile number
        .get('[data-qa-node="phone-number"]')
        .type('930358540') //check mobile number for error
        // enter sum
        .get('[data-qa-node="amount"]')
        .type('50')
        //enter card number
        .get('[data-qa-node="numberdebitSource"]')
        .type('4552331448138217')
        //enter card expire date
        .get('[data-qa-node="expiredebitSource"]')
        .type('0524') //ошибка
        //enter cvv card 
        .get('[data-qa-node="cvvdebitSource"]')
        .type('111')

        .wait(3000)

        //submit
        .get('[data-qa-node="submit"]')
        .click()
        
        .get('[data-qa-node="details"]')
        .should('contain.text', '+380930358540')

        .get('[data-qa-node="card"]')
        .should('have.text', '4552 **** **** 8217')
        
        .get('[data-qa-node="amount"]')
        .should('have.text', '50')

        .get('[data-qa-node="currency"]')
        .eq(0)
        .should('contain.text', 'UAH')

        .get('[data-qa-node="commission"]')
        .eq(1)
        .should('have.text', '2')

        .get('[data-qa-node="commission-currency"]')
        .should('contain.text', 'UAH')


        /* проверить в 20 уроке 
        .get(".amount")
        .find("span")
        .should("have.text" , "50")

        .get("amount")
        .find("small")
        .should("have.text" , "UAH") */

})

it('Money transfer to another card', () => {
    cy.visit('https://next.privat24.ua/money-transfer/card?lang=en')
        .get('[data-qa-node="numberdebitSource"]')
        .type('4552331448138217')
        .get('[data-qa-node="expiredebitSource"]')
        .type('0524') 
        .get('[data-qa-node="cvvdebitSource"]')
        .type('111')
        .get('[data-qa-node="firstNamedebitSource"]')
        .type('Shayne')
        .get('[data-qa-node="lastNamedebitSource"]')
        .type('McConnel')
        .get('[data-qa-node="numberreceiver"]')
        .type('5309 2330 3476 5085')
        .get('[data-qa-node="firstNamereceiver"]')
        .type('juliana')
        .get('[data-qa-node="lastNamereceiver"]')
        .type('Janssen')
        .get('[data-qa-node="amount"]')
        .type('300')
        .get('[data-qa-node="toggle-comment"]')
        .click()
        .get('[data-qa-node="comment"]')
        .type('Cypress test')
        .get('button[type="submit"]')
        .wait(3000)
        .click()
        .get('[data-qa-node="payer-card"]')
        .should('have.text', '* 8217')
        .get('[data-qa-node="receiver-card"]')
        .should('have.text', '* 5085')
        .get('[data-qa-node="payer-amount"]')
        .should('have.text', '300 UAH')
        .get('[data-qa-node="payer-currency"]')
        .should('have.text', '88.87 UAH')
        .get('[data-qa-node="total"]')
        .find('span')
        .should('contain.text', '388.87')
        .get('[data-qa-node="total"]')
        .find('small')
        .should('contain.text', 'UAH')
        .get('[data-qa-node="comment"]')
        .should('have.text', 'Cypress test')

})