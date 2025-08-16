describe('Funcionalidade de adcionar ao carrinho', () => {
    const produto = 'Hero Hoodie';
    const tamanhdo = 'M';
    const cor = 'Black';
    it('Deve adcionar o produto ao carrinho', () => {
        cy.visit('/');
        cy.realizarBusca(produto);
        cy.escolherProduto(produto)
        cy.adicionarProdutoCarrinho(tamanhdo, cor);
        cy.contains('div', `You added ${produto} to your shopping cart.`).should('be.visible');        
   });
    
});