///<reference types="Cypress"/>

it('Replenishment of Ukraine mobile phone number', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="phone-number"]')
        .type('930358540') //check mobile number for error
        .get('[data-qa-node="amount"]')
        .type('50')
        .get('[data-qa-node="numberdebitSource"]')
        .type('4552331448138217')
        .get('[data-qa-node="expiredebitSource"]')
        .type('0524') //ошибка
        .get('[data-qa-node="cvvdebitSource"]')
        .type('111')
        .wait(3000)
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

})
