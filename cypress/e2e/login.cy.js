/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  return false; // Ignora o erro e continua o teste
});

// funcionalidade
  describe("Teste no LinkedIn - iPhone 14 com Edge", () => {
// Simula a resolução do iPhone 14 (390x844)
    beforeEach(() => {
      cy.viewport(390, 844);
    });

  //1.Cenário Login dados com sucesso mobile Iphone 14
  it("Login com sucesso", () => {
  //DADO (Given)
  // abrir a aplicacao
       cy.visit('https://www.linkedin.com/login', {
         headers: {
            'User-Agent': "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) EdgiOS/120.0.0.0 Mobile/15E148 Safari/537.36",
    },
  });
    
    // Esperando o campo de email aparecer e inserindo um email válido
       cy.get('input#username')
         .should('be.visible')
         .type('digite seu email para testar'); // Substitua pelo seu email válido
    
    // Espera a página carregar e inserir a senha
       cy.get('input#password')
         .should('be.visible')
         .type('digite sua senha para testar'); // Substitua pela sua senha válida
    
    // Quando (When)
    // Clica no botão "Sign in"
       cy.get('button[type="submit"]').click();

    //Então (Then)
    // Verifica se a página do Linkedin é carregada
       cy.url().should('include', '/feed/');

    // Verifica se a página do Linkedin está visível, após o login
       cy.get('body').should('not.contain', 'Sign in');
    
  });

  //2.Cenário Login Email inválido mobile Iphone 14
  it("Email invalido quando tenta acessar o Linkedin", () => {
       cy.visit('https://www.linkedin.com/login', {
         headers: {
            'User-Agent': "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) EdgiOS/120.0.0.0 Mobile/15E148 Safari/537.36",
      },
    });
   
       cy.get('input#username')
         .should('be.visible')
         .type('alfa'); // Email inválido
    
       cy.get('button[type="submit"]').click();

       cy.get('.invalid_input').should('have.text', "Please enter a valid username.");

  });
 
  //3.Cenário Login Senha inválido mobile Iphone 14
  it("Senha invalida quando tenta acessar o Linkedin", () => {
    cy.visit('https://www.linkedin.com/login', {
      headers: {
         'User-Agent': "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) EdgiOS/120.0.0.0 Mobile/15E148 Safari/537.36",
   },
 });

    cy.get('input#username')
      .should('be.visible')
      .type('digite seu email para testar'); 
    
    cy.get('input#password')
      .should('be.visible')
      .type('1223456'); //Senha Inválida 
 
    cy.get('button[type="submit"]').click();

    cy.get('.invalid_input').should('have.text', "Wrong email or password. Try again or create an account .");

});

//4.Cenário Login Senha vazia mobile Iphone 14
  it.only("Senha vazia quando tenta acessar o linkedin", () => {
    cy.visit('https://www.linkedin.com/login', {
      headers: {
         'User-Agent': "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) EdgiOS/120.0.0.0 Mobile/15E148 Safari/537.36",
   },
 });

    cy.get('input#username')
      .should('be.visible')
      .type('digite seu email para testar'); 
    
    cy.get('input#password')
      .should('be.visible')
      .type(' '); //Senha vazia 
 
    cy.get('button[type="submit"]').click();

    cy.get('.invalid_input').should('have.text', "Please enter a password.");

  });

  //5.Cenário Login Email vazio mobile Iphone 14
  it("Email vazio quando tenta acessar o Linkedin", () => {
    cy.visit('https://www.linkedin.com/login', {
      headers: {
         'User-Agent': "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) EdgiOS/120.0.0.0 Mobile/15E148 Safari/537.36",
   },
 });

    cy.get('input#username')
      .should('be.visible')
      .type(' '); // Email vazio
    
    cy.get('input#password')
      .should('be.visible')
      .type('Digite sua senha para testar');  
 
    cy.get('button[type="submit"]').click();

    cy.get('.invalid_input').should('have.text', "Please enter an email address or phone number.");

  });

  //6.Cenário Login Email e Senha vazios mobile Iphone 14
  it.("Email e senha vazios quando tenta acessar o Linkedin", () => {
    cy.visit('https://www.linkedin.com/login', {
      headers: {
         'User-Agent': "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) EdgiOS/120.0.0.0 Mobile/15E148 Safari/537.36",
   },
 });

    cy.get('input#username')
      .should('be.visible')
      .type(' '); // Email vazio
    
    cy.get('input#password')
      .should('be.visible')
      .type(' '); //Senha vazia 
 
    cy.get('button[type="submit"]').click();

    cy.get('.invalid_input').should('have.text', "Please enter an email address or phone number.");

  });
});
