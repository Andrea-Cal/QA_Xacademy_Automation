describe('myTestSaucedemo', { testIsolation: false }, () => {
    const products = [
        '#add-to-cart-sauce-labs-backpack',
        '#add-to-cart-sauce-labs-bike-light',
        '#add-to-cart-sauce-labs-bolt-t-shirt',
        '#add-to-cart-sauce-labs-fleece-jacket',
        '#add-to-cart-sauce-labs-onesie',
        '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]'
    ];

    it('Visitar la página', () => {
        cy.visit('https://www.saucedemo.com/');
    });

    // Pruebas Standard User
    it('Pruebas con el usuario standard_user', () => {
        cy.login('standard_user', 'secret_sauce');
        cy.addProductsToCart(products);
        cy.checkout('Test', 'User', '12345');
        cy.validateCheckout();
        cy.logout();
    });

    // Pruebas Problem User
    it('Pruebas con el usuario problem_user', () => {
        cy.login('problem_user', 'secret_sauce');
        cy.addProductsToCart(products);

        // Intentar hacer el checkout, pero no funcionará debido al error
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('#checkout').click();
        cy.get('#first-name').type('Test');
        cy.get('#last-name').type('User'); // Aquí falla el apellido
        cy.get('#postal-code').type('12345');
        cy.get('#continue').click();

        // Verificar mensaje de error
        cy.get('[data-test="error"]').contains('Error: Last Name is required');

        // Intentar hacer el checkout
        cy.validateCheckout();

        // Logout
        cy.logout();
    });
});
