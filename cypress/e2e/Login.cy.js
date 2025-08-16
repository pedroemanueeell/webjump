import { gerarDadosUsuario } from '../support/utils';
describe('Funcionalidade de login no sistema', () => {
    
    it('Deve realizar o login com sucesso', () => {
      cy.visit('customer/account/create/');
        const { primeiroNome, sobrenome, email, senha } = gerarDadosUsuario();       
        cy.criarUsuario(primeiroNome, sobrenome, email, senha);
        cy.logout();
        cy.login(email, senha);
        cy.get('.base').should('contain', 'My Account');
    }); 

});
