/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe("LambdaTest_2407", function () {
    it('test_functions', () => {
        cy.visit('https://www.lambdatest.com')
        cy.wait(5000)
        cy.get('a[href="https://www.lambdatest.com/integrations"]').eq(2).scrollIntoView({duration:2000}).click({force:true})
        cy.wait(5000)
        cy.url().should('contain','integrations')
        

    })

})