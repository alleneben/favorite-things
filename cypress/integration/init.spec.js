
describe('Cypress', () => {
    it('is working', () => {
        expect(true).to.equal(true)
    })
    it('visits the app home page', () => {
        cy.visit('/');
    })
})