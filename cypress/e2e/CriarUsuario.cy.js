import { gerarDadosUsuario } from '../support/utils';
describe('Funcionalidade de criação de usuario', () => {
    
    it('Deve realizar o cadastro com sucesso', () => {
      cy.visit('customer/account/create/');
      const { primeiroNome, sobrenome, email, senha } = gerarDadosUsuario();       
     
      cy.criarUsuario(primeiroNome, sobrenome, email, senha);        
      cy.get('.message-success').should('contain', 'Thank you for registering with Main Website Store.');  
    }); 

});
