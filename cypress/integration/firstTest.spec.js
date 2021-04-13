///<reference types="Cypress"/>




//type
it('type', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en') //site
        .get('[data-qa-node="phone-number"]') // what method we found and his value 
        .type(112233344) // value
})


//focus
it('focus', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en') //site
        .get('[data-qa-node="amount"]') // what method we found and his value 
        .focus()
})

//blur - подкрашивание полей с ошибками
it('blur', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en') //site
        .get('[data-qa-node="amount"]') // what method we found and his value 
        .focus()
        .blur()
})

//clear - очиста значения
it('blur', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en') //site
        .get('[data-qa-node="amount"]') // what method we found and his value 
        .type(999)
        .wait(2000)
        .clear() 
})

//submit
it('Submit', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en') //site
        .get('form[method="post"]') // what attr we found and his method and value 
        .submit() // подсветятся не заполненные поля
})

//click
it('click', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en') //site
        .get('[data-qa-value="manual"]') // what attr we found and his method and value 
        .click() // open form autorization
})

//rightclick
it('rightclick', ()=> {
    cy.visit('https://example.cypress.io/commands/actions') //site
        .contains('Right click to edit') // what attr we found and his method and value 
        .rightclick() // open form autorization
})


//doubleclick
it('doubleclick', ()=> {
    cy.visit('https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/dblclick_event/_samples_/Examples') //site
        .contains('My Card') // what attr we found and his method and value 
        .dblclick() // open form autorization
})


//check
it('check', ()=> {
    cy.visit('https://www.facebook.com/reg/?') //site
        .get('input[value="2"]') // what attr we found and his method and value 
        .check() // open form autorization
})

//checkbox - штука для переключения тем на привате24
it('checkbox', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en') //site
        .get('[id*="switchCheckbox"]') /* если ID меняется можно вместо поиска через # использовать 
                                стандартный поиск и указать id* для поиска по частичному совпадению */
        .check({force: true})
        .wait(2000)
        .uncheck({force: true}) // open form autorization
})

//select
it('select', ()=> {
    cy.visit('https://www.facebook.com/reg/?') //site
        .get('#month') // 
        .select('січ') // 
        .get('#day') // 
        .select('15') //
        .get('#year') // 
        .select('1991') //
})


//select
it('scrollIntoView', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en') //site
        .get('[data-qa-node="lang"]') // 
        .wait(2000)
        .scrollIntoView()

})


//select
it.only('scrollIntoView', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en') //site 
        .wait(2000)
        .scrollTo(0, 500)
})
