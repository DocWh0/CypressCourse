///<reference types="Cypress"/>
import { mobileReplenishment } from "../support/pages/mobileReplenishment"
import { transfers } from "../support/pages/transfers"
import { basePage } from "../support/pages/basePage"
import { should } from "chai"



it('Replenishment of Ukraine mobile phone number', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')


    mobileReplenishment.typePhoneNumber('930358540')
    basePage.typeAmount('50')
    basePage.typeDebitCardData('4552331448138217', '0524', '111' )
    transfers.typeDebitNameAndSurname('Shayne','McConnel')
    cy.wait(3000)
    basePage.submitPayment()
    mobileReplenishment.checkDebitCard('4552 **** **** 8217')
    mobileReplenishment.checkDebitAmount('50')
    mobileReplenishment.checkDebitCommission('2')
    mobileReplenishment.checkReceiverAmount('50')
    mobileReplenishment.checkPaymentCurrency('UAH')





    
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

it.skip('Money transfer to another card', () => {
    cy.visit('https://next.privat24.ua/money-transfer/card?lang=en')

        basePage.typeDebitCardData('4552331448138217', '0524', '111' )
        transfers.typeDebitNameAndSurname('Shayne','McConnel')
        transfers.typeRecieverCard('5309 2330 3476 5085')
        transfers.typeRecieverNameAndSurname('juliana','Janssen')
        basePage.typeAmount('300')
        transfers.typeComment('Cypress test')
        cy.wait(3000)
        basePage.submitPayment()
        cy.wait(5000)
        transfers.checkCard('4552 3314 4813 8217','5309 2330 3476 5085')
        transfers.checkAmountAndTotal('300 UAH', '385.51')
        transfers.checkDebitCommision('85.51 UAH')
        transfers.checkTotalCurrency('UAH')
        transfers.checkComment('Cypress test')

})



        /*
        cy.get('[data-qa-node="numberdebitSource"]')

            .type('4552331448138217')
            .get('[data-qa-node="expiredebitSource"]')
            .type('0524') 
            .get('[data-qa-node="cvvdebitSource"]')
            .type('111')

        cy.get('[data-qa-node="firstNamedebitSource"]')
            .type('Shayne')

        cy.get('[data-qa-node="lastNamedebitSource"]')
            .type('McConnel')

        cy.get('[data-qa-node="numberreceiver"]')
            .type('5309 2330 3476 5085')

        cy.get('[data-qa-node="firstNamereceiver"]')
            .type('juliana')

        cy.get('[data-qa-node="lastNamereceiver"]')
            .type('Janssen')

        cy.get('[data-qa-node="amount"]')
            .type('300')

        cy.get('[data-qa-node="toggle-comment"]')
            .click()
            .get('[data-qa-node="comment"]')
            .type('Cypress test')

        cy.wait(3000)

        cy.get('button[type="submit"]')
            .click()

        cy.get('[data-qa-node="payer-card"]')
            .should('have.text', '* 8217')

        cy.get('[data-qa-node="receiver-card"]')
            .should('have.text', '* 5085')

        cy.get('[data-qa-node="payer-amount"]')
            .should('have.text', '300 UAH')

        cy.get('[data-qa-node="payer-currency"]')
            .should('have.text', '88.87 UAH')

        cy.get('[data-qa-node="total"]')
            .find('span')
            .should('contain.text', '388.87')

        cy.get('[data-qa-node="total"]')
            .find('small')
            .should('contain.text', 'UAH')

        cy.get('[data-qa-node="comment"]')
            .should('have.text', 'Cypress test') 
                                                    */


    it.skip('Example sending the GET request', ()=>  {
        cy.request('https://next.privat24.ua')
            .then((response)=>{
                console.log(response);
            })
    })


    it('Example sending the POST request', ()=>  {

        const requestBody = {
            action:"info",
            phone:"+380930358540",
            amount:55,
            currency:"UAH",
            cardCvv:"111",
            card:"4552331448138217",
            cardExp:"0526",
            xref:"1bb81639785b55b5787237a6ed099a07",
            _:1631280270372};

                const headersData = {
                    cookie: '_ga=GA1.2.297230247.1630913965; _gid=GA1.2.1936741036.1631280219; _gat_gtag_UA_29683426_11=1; pubkey=d431c3de7cccc64c1ff67396f9c1998b; lfp=9/6/2021, 10:39:36 AM; pa=1630937401999.45780.024315919456663337next.privat24.ua0.16439179751498267+5; fp=9'
                    
                };

        cy.request({
            method: "POST",
            url: "https://next.privat24.ua/api/p24/pub/mobipay",
            body: requestBody,
            headers:headersData,
        }).then((response)=>{
                    expect(response).to.have.property('status').to.equal=(200)
                    expect(response.body).to.have.property('status').to.equal=('error')
                    expect(response.body.data).to.have.property('amount').to.equal=(51)

                   // expect(response.body.data[i]).to.have.property('amount').to.equal=(50)
                   // expect(response.body.data[i]).to.have.property('amount').to.equal=(50)
                console.log(response);
            });
    });


    it.only("Example sending the POST request with Should verification", ()=>  {

        const requestBody = {
            action:"info",
            phone:"+380930358540",
            amount:55,
            currency:"UAH",
            cardCvv:"111",
            card:"4552331448138217",
            cardExp:"0526",
            xref:"1bb81639785b55b5787237a6ed099a07",
            _:1631280270372};

        const headersData = {
            cookie: '_ga=GA1.2.297230247.1630913965; _gid=GA1.2.1936741036.1631280219; _gat_gtag_UA_29683426_11=1; pubkey=d431c3de7cccc64c1ff67396f9c1998b; lfp=9/6/2021, 10:39:36 AM; pa=1630937401999.45780.024315919456663337next.privat24.ua0.16439179751498267+5; fp=9'
            
        };

        cy.request({
            method: "POST",
            url: "https://next.privat24.ua/api/p24/pub/mobipay",
            body: requestBody,
            headers:headersData,
            }).its('body').should('contain', {
                status: 'success'
            })
    });