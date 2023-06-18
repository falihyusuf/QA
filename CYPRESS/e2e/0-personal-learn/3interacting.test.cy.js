/// <reference types="cypress" />

describe("Browser Actions", () => {
    it('INTERAKSI', () => {
        cy.visit('https://shopee.co.id/') //perintah untuk mengunjungi website target
        cy.get('a').contains('Log In').click() //berinteraksi dengan tombol atau button log in
    });
});