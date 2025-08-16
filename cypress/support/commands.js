Cypress.Commands.add('login', (username, password) => {
    cy.visit('/customer/account/login/referer/');
    cy.get('#email').type(username);
    cy.get('#pass').type(password);
    cy.get('#send2').click();
});

Cypress.Commands.add('logout', () => {
    cy.get('.customer-name .action.switch').click();
    cy.contains('Sign Out').should('be.visible').click();
    cy.get('.page-title').should('contain', 'You are signed out');
});

Cypress.Commands.add('criarUsuario', (firstName, lastName, email, password) => {
    cy.get('#firstname').type(firstName);
        cy.get('#lastname').type(lastName);
        cy.get('#email_address').type(email);
        cy.get('#password').type(password);
        cy.get('#password-confirmation').type(password);
        cy.get('#form-validate > .actions-toolbar > .primary').click();      
});

Cypress.Commands.add('realizarBusca', (produto) => {
    cy.get('#search').type(produto).type('{enter}');;
    
});

Cypress.Commands.add('escolherProduto', (produto) => {
    cy.contains('a.product-item-link', `${produto}`).click();
});

Cypress.Commands.add('adicionarProdutoCarrinho', (size, color) => {
    cy.contains('div.swatch-option.text', `${size}`).click();
    cy.get(`div.swatch-option.color[aria-label="${color}"]`).click();
    cy.get('#product-addtocart-button').click();
});



