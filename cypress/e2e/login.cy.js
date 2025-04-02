/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  return false; // Ignora o erro e continua o teste
});

// funcionalidade
  describe("Teste no LinkedIn - iPhone 14 com Edge", () => {
// Simula a resolu��o do iPhone 14 (390x844)
    beforeEach(() => {
      cy.viewport(390, 844);
    });

  //1.Cen�rio Login dados com sucesso mobile Iphone 14
  it("Login com sucesso", () => {
  //DADO (Given)
  // abrir a aplicacao
       cy.visit('https://www.linkedin.com/login', {
         headers: {
            'User-Agent': "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) EdgiOS/120.0.0.0 Mobile/15E148 Safari/537.36",
    },
  });
    
    // Esperando o campo de email aparecer e inserindo um email v�lido
       cy.get('input#username')
         .should('be.visible')
         .type('digite seu email para testar'); // Substitua pelo seu email v�lido
    
    // Espera a p�gina carregar e inserir a senha
       cy.get('input#password')
         .should('be.visible')
         .type('digite sua senha para testar'); // Substitua pela sua senha v�lida
    
    // Quando (When)
    // Clica no bot�o "Sign in"
       cy.get('button[type="submit"]').click();

    //Ent�o (Then)
    // Verifica se a p�gina do Linkedin � carregada
       cy.url().should('include', '/feed/');

    // Verifica se a p�gina do Linkedin est� vis�vel, ap�s o login
       cy.get('body').should('not.contain', 'Sign in');
    
  });

  //2.Cen�rio Login Email inv�lido mobile Iphone 14
  it("Email invalido quando tenta acessar o Linkedin", () => {
       cy.visit('https://www.linkedin.com/login', {
         headers: {
            'User-Agent': "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) EdgiOS/120.0.0.0 Mobile/15E148 Safari/537.36",
      },
    });
   
       cy.get('input#username')
         .should('be.visible')
         .type('alfa'); // Email inv�lido
    
       cy.get('button[type="submit"]').click();

       cy.get('.invalid_input').should('have.text', "Please enter a valid username.");

  });
 
  //3.Cen�rio Login Senha inv�lido mobile Iphone 14
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
      .type('1223456'); //Senha Inv�lida 
 
    cy.get('button[type="submit"]').click();

    cy.get('.invalid_input').should('have.text', "Wrong email or password. Try again or create an account .");

});

//4.Cen�rio Login Senha vazia mobile Iphone 14
  it("Senha vazia quando tenta acessar o linkedin", () => {
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

  //5.Cen�rio Login Email vazio mobile Iphone 14
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

  //6.Cen�rio Login Email e Senha vazios mobile Iphone 14
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
