// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginViaAPI', (
    email = 'admin',
    password = 'admin'
  ) => {
    cy.request({
      method: 'GET',
      url: `https://the-internet.herokuapp.com/basic_auth`,
      auth: {
        username: email,
        password: password
      },
      failOnStatusCode: false // untuk menghindari error ketika response code bukan 2xx
    }).then((response) => {
        expect(response.status).to.be.oneOf([200, 401]) // mengecek apakah response status code adalah 200 atau 401
        if (response.status === 200) {
          cy.log('Authentication successfull')
        } else {
          cy.log('Authentication failed')
        }
    })
})