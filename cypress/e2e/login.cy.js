describe('Login Oficina Integrada', () => {
  it('Deve acessar a página de login e verificar título', () => {
    cy.visit('https://sistema.oficinaintegrada.com.br/default.asp')
    cy.title().should('include', 'Oficina Integrada')
  })
})
