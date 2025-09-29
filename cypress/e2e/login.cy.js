/*describe('Login Oficina Integrada', () => {
  it('Deve acessar a página de login e verificar título', () => {
    cy.visit('https://sistema.oficinaintegrada.com.br/default.asp')
    cy.title().should('include', 'Oficina Integrada')
  })
})*/


describe('Login Oficina Integrada', () => {
  it('Deve acessar a página de login, fechar tutorial se existir e fazer login', () => {
    // 1. Visita a página de login
    cy.visit('https://sistema.oficinaintegrada.com.br/login.asp');

    // 2. Preenche os campos de login
    cy.get('#chave').type('28039037136'); 
    cy.get('#usuario').type('evelyn'); 
    cy.get('#senha').type('841884'); 

    // 4. Clica no botão de login
    cy.get('#btnLogar').click();

    // 5. Verifica se redirecionou corretamente
    cy.url().should('include', '/default.asp');

    // 6. Valida o título da página
    cy.title().should('include', 'Oficina Integrada');

    // 8. Fecha o tutorial se o botão "Finalizar" existir
    cy.get('body').then(($body) => {
      if ($body.find('button:contains("Finalizar")').length > 0) {
        cy.contains('Finalizar').click({ force: true });
      }
    });
    // 7. Verifica se a página carregou algo esperado no dashboard
    cy.contains('Configurações').click({ force: true });
  });
});

