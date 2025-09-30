//Cenário 1: confirmar que o site da Oficina Integrada está abrindo corretamente;
//Given Dado: Quando precisar abrir o site da oficina integrada;
//When Quando: o site for |https://sistema.oficinaintegrada.com.br/default.asp|;
//Then Então: deve abrir a página de login;
describe('Cenário 1: Abertura do site Oficina Integrada', () => {  
  it('Deve acessar a página de login e verificar título', () => {  
    cy.visit('https://sistema.oficinaintegrada.com.br/default.asp')
    cy.title().should('include', 'Oficina Integrada')
  })
})

//Cenário 2: for preciso realizar login no site da oficina integrada com sucesso;
//Given Dado: abrir página para login;
//When Quando: chave de acesso |28039037136|;
//And E: usuario = |evelyn|;
//And E: senha = |841884|;
//Then Então: deve ocorrer login com sucesso, e apresentar o dashborad da oficina integrada;
describe('Cenário 2:Fazer login no site Oficina Integrada', () => {
  it('Deve acessar a página de login', () => {
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
      
  });
});

//Cenário 3: for preciso realizar login no site da oficina integrada com erro;
//Given Dado: abrir página para login;
//When Quando: chave de acesso |28039037137|;
//And E: usuario = |evelyn|;
//And E: senha = |841884|;
//Then Então: deve apresentar erro de login, 'Não foi possivel logar: verifique seus dados (#8)'.
describe('Cenário 3: Fazer login no site Oficina Integrada', () => {
  it('Deve acessar a página de login', () => {
    // 1. Visita a página de login
    cy.visit('https://sistema.oficinaintegrada.com.br/login.asp');

    // 2. Preenche os campos de login
    cy.get('#chave').type('28039037137'); 
    cy.get('#usuario').type('evelyn'); 
    cy.get('#senha').type('841884'); 

    // 4. Clica no botão de login
    cy.get('#btnLogar').click();

    });
});

//Cenário 4: realizar login no site da oficina integrada com erro;
//Given Dado: abrir página para login;
//When Quando: usuario = |evelyn|;
//And E: senha = |841884|;
//Then Então: deve apresentar erro "de login, pois "Preencha todos os campos".
describe('Cenário 4: Fazer login no site Oficina Integrada', () => {
  it('Deve acessar a página de login, fechar tutorial se existir e fazer login', () => {
    // 1. Visita a página de login
    cy.visit('https://sistema.oficinaintegrada.com.br/login.asp');

    // 2. Preenche os campos de login
    
    cy.get('#usuario').type('evelyn'); 
    cy.get('#senha').type('841884'); 

    // 4. Clica no botão de login
    cy.get('#btnLogar').click();

    });
});