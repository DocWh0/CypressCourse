// describe('Mobile phone replenishment', () => {

//     contex("Replenishment less than the allowed amount", () => {  
//     it('Check min sum', () => {})  
//         //some test 
//     })
// })

// it('By Id') => {
//     cy.visit("https://www.facebook.com/")
// }
/// <reference types="Cypress" />




// it('By ID', () => {
//     cy.visit("https://www.facebook.com/")
//     cy.get('#email')
// });

// it('By class', () =>  {
//     cy.visit("https://docs.cypress.io/api/commands/get#Syntax")
//     cy.get('.class="DocSearch DocSearch-Button"')
// //   cy.get('//button[@aria-label='Search']')
// });

// it('By class2', () =>  {
//     cy.visit("https://docs.cypress.io/api/commands/get#Syntax")
//     cy.get('.DocSearch DocSearch-Button')
 
// });
// it('By class3', () =>  {
//     cy.visit("https://docs.cypress.io/api/commands/get#Syntax")
//     cy.get('.DocSearch-Search-Icon')

// });

// it.only('By class4', () =>  {
//     cy.visit("https://docs.cypress.io/api/commands/get#Syntax")
//     cy.get('[class="w-full mx-8 lg:m-0 lg:w-1/5"]')

// });

// it('By class5', () =>  {
//     cy.visit("https://docs.cypress.io/api/commands/get#Syntax")
//     cy.get('[aria-label="Search"]')
// });

// it('By name button', () =>  {
//     cy.visit("https://docs.cypress.io/api/commands/get#Syntax")
//     cy.get('button[type="button"]')
// });

// it('By name button2', () =>  {
//     cy.visit("https://docs.cypress.io/api/commands/get#Syntax")
//     cy.get('button[class="DocSearch DocSearch-Button"]')
// });
// it('By name button3', () =>  {
//     cy.visit("https://docs.cypress.io/api/commands/get#Syntax")
//     cy.get('button[aria-label="Search"]')
// });
// it('By name button4', () =>  {
//     cy.visit("https://docs.cypress.io/api/commands/get#Syntax")
//     cy.get('button[style xpath="1"]')
// });

// it('By contains name', () =>  {
//     cy.visit("https://docs.cypress.io/api/commands/get#Syntax")
//     cy.get('*[class^="flex space"]')
// });

// it.only('Href algolia', () =>  {
//     cy.visit("https://docs.cypress.io/api/commands/get#Syntax")
//     cy.get('[href="https://www.algolia.com/docsearch"]')
// });

it('Use Get with Find and Eq', () =>  {
    cy.visit("https://next.privat24.ua/deposit/open")
    cy.get('tbody').find('td').find('div').find('button').eq(0)
});


it.only('Find li element', () =>  {
    cy.visit("https://docs.cypress.io/api/commands/eq")
    //cy.get('div:second').find('nav').find('ul').find('li').find('a').eq(1)
    cy.get('a[href="#Syntax"]')
});
