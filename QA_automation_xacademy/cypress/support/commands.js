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
// Login
Cypress.Commands.add('login', (username, password) => {
    cy.get('#user-name').type(username);
    cy.get('#password').type(password);
    cy.get('#login-button').click();
});

// Agregar productos al carrito
Cypress.Commands.add('addProductsToCart', (products) => {
    products.forEach((product) => {
        cy.get(product).click();
    });
});

// Checkout
Cypress.Commands.add('checkout', (firstName, lastName, postalCode) => {
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('#checkout').click();
    cy.get('#first-name').type(firstName);
    cy.get('#last-name').type(lastName);
    cy.get('#postal-code').type(postalCode);
    cy.get('#continue').click();
    cy.get('#finish').click();
});

// Validar checkout
Cypress.Commands.add('validateCheckout', () => {
    cy.get('[data-test="title"]').contains('Checkout: Complete!');
    cy.get('[data-test="complete-header"]').contains('Thank you for your order!');
    cy.get('#back-to-products').click();
});

// Logout
Cypress.Commands.add('logout', () => {
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
    cy.get('.login_logo').contains('Swag Labs');
});

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