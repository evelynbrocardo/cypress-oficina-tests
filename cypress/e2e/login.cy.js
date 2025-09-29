describe('Login Oficina Integrada', () => {
  it('Deve acessar a página de login e verificar título', () => {
    cy.visit('https://sistema.oficinaintegrada.com.br/default.asp')
    cy.title().should('include', 'Oficina Integrada')
  })
})

describe('Testes de Login', () => {
  it('deve fazer login com credenciais válidas e redirecionar', () => {
    // 1. Visitar a página de login
    cy.visit('https://sistema.oficinaintegrada.com.br/default.asp'); // Substitua '/login' pela URL da sua página de login

    // 2. Preencher os campos de email e senha
    cy.get('input[name="Chave"]').type('28039037136'); // Substitua o seletor e o email
    cy.get('input[name="Usuário"]').type('evelyn'); // Substitua o seletor e o email
    cy.get('input[name="Senha"]').type('841884'); // Substitua o seletor e a senha

    // 3. Clicar no botão de login
    cy.get('button[type="login"]').click(); // Substitua o seletor

    // 4. Verificar se o usuário é redirecionado para o dashboard
    cy.url().should('include', '/dashboard'); // Verifique se a URL contém o caminho esperado
    cy.get('h1').should('contain', 'Bem-vindo'); // Verifique um elemento na página do dashboard
  });
});
