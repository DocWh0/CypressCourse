///<reference types="Cypress"/>
import { mobileReplenishment } from "../support/pages/mobileReplenishment"
import { transfers } from "../support/pages/transfers"
import { basePage } from "../support/pages/basePage"

//import { should } from "chai"



it.skip('Replenishment of Ukraine mobile phone number', () => {
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


    it('Example sending the GET request', ()=>  {
        cy.request('https://next.privat24.ua')
            .then((response)=>{
                console.log(response);
            })
    })


    it('Example sending the POST request', ()=>  {

        const requestBody = {
            action:"info",
            phone:"+380930358540",
            amount:50,
            currency:"UAH",
            cardCvv:"111",
            card:"4552331448138217",
            cardExp:"0526",
            xref:"a444a8d43da329bee689b62ecb4fa2ab","_":1633954568271};
            

                const headersData = {
                    cookie: '_ga=GA1.2.2098389855.1633692761; _gid=GA1.2.399653730.1633954440; pubkey=6a1d8e93a69cf2408b501252c0db18c8; lfp=10/8/2021, 2:32:52 PM; pa=1633692773243.09470.10202770068210754next.privat24.ua0.4608886798981999+2; fp=3'
                    
                };

        cy.request({
            method: "POST",
            url: "https://next.privat24.ua/api/p24/pub/mobipay",
            body: requestBody,
            headers:headersData,
        }).then((response)=>{
                    expect(response).to.have.property('status').to.equal=(200)
                    expect(response.body).to.have.property('status').to.equal('success')
                    expect(response.body.data).to.have.property('amount').to.equal=(50)

                   // expect(response.body.data[i]).to.have.property('amount').to.equal=(50)
                   //проверка в цикле
                   // expect(response.body.data[0]).to.have.property('amount').to.equal=(50)
                   // 0,1,2,3 - для проверки конкретного елемента в массиве
                console.log(response);
            });
    });


    it("Example sending the POST request with Should verification", ()=>  {

        const requestBody = {
            action:"info",
            phone:"+380930358540",
            amount:50,
            currency:"UAH",
            cardCvv:"111",
            card:"4552331448138217",
            cardExp:"0526",
            // Нужно всегда заменять xref - он в Request Payload
            xref:"a444a8d43da329bee689b62ecb4fa2ab","_":1633954568271};

        const headersData = {
            cookie: '_ga=GA1.2.2098389855.1633692761; _gid=GA1.2.399653730.1633954440; pubkey=6a1d8e93a69cf2408b501252c0db18c8; lfp=10/8/2021, 2:32:52 PM; pa=1633692773243.09470.10202770068210754next.privat24.ua0.4608886798981999+2; fp=3'
            
        };
        // Нужно всегда заменять cookie - они в Request Headers

        cy.request({
            method: "POST",
            url: "https://next.privat24.ua/api/p24/pub/mobipay",
            body: requestBody,
            headers:headersData,
            }).its('body').should('contain', {
                status: 'success'
            }).its('data').should('contain', {
                status: 'ok'
            })
    });