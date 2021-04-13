///<reference types="Cypress"/>


//contains preference element (input[type='submit'], button, a, label)
it('', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('Sign in');
});

//firstargument what tag are search second argument what text search
it('', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('div', 'Sign in');
})

//firstargument what tag are search second argument what text search
//third argument ignore lowerOrUPPERCASE
it('', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('div', 'sign in',{matchCase: false});
})

//firstargument what tag are search second argument what text search
//third argument ignore lowerOrUPPERCASE
it('', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('div', 'sign in',{matchCase: false});
})

//
it.only('', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('footer').contains('Go to old version');
})