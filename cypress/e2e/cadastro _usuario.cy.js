describe('Cadastro de cliente - preenchendo apenas o campo Nome', () => {
  beforeEach(() => {
    // Faz login antes de cada teste
    cy.visit('https://sistema.oficinaintegrada.com.br/login.asp')

    cy.get('#chave').type('28039037136'); 
    cy.get('#usuario').type('evelyn'); 
     cy.get('#senha').type('841884'); 
    cy.get('#btnLogar').click()

    })

    //Cenário 5: realizar cadastro de cliente com sucesso;
    //Given Dado: abrir página para cadastro de cliente;
    //When Quando: nome for preenchido como |EVELYN CRISTINA BROCARDO|;
    //Then Então: deve apresentar mensagem de sucesso "Seu cliente foi cadastrado. Agora escolha o que fazer.";
    //And E: deve clicar no botão "Concluir";
  it('Deve cadastrar cliente preenchendo apenas o Nome', () => {
    // Vai para tela de cadastro
    cy.visit('https://sistema.oficinaintegrada.com.br/P_CADASTRA_CLIENTES.ASP')

    cy.get('#NOME').type('EVELYN CRISTINA BROCARDO').pause()
    cy.contains('Salvar').click().pause()
    cy.contains('Seu cliente foi cadastrado. Agora escolha o que fazer.').should('be.visible')
    cy.contains('Concluir').click()
  })
})
