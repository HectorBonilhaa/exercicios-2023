describe('checa elementos básicos', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });

  it('titulo do trabalho existe', () => {
    cy.get('h2').contains('Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP');
    cy.compareSnapshot('Trabalho - Base');
  });

  it('botão de expandir resumo existe', () => {
    cy.get('.btn-show-more').contains('ver mais');
    cy.compareSnapshot('Trabalho - Resumo expandido');
  });

  it('botão de criar tópico existe', () => {
    cy.get('.btn-create-topic').contains('criar tópico');
  });

  it('expandir tópico funciona', () => {
    cy.get('.anchor-likes-comments').click();
    cy.get('.raw-answer-comment').should('exist');
    cy.compareSnapshot('Trabalho - Card de topico expandido');
  });

  it('clicar em `criar tópico` exibe o formulário', () => {
    cy.get('.btn-create-topic').click();

    cy.get('.btn-primary').should('contain', 'Enviar');

    cy.get('.text-topic-label').should('contain', 'Assunto');
    cy.get('.text-topic-label').should('contain', 'Conteúdo');
    cy.get('.input-text-topic').should('have.attr', 'placeholder', 'Defina um tópico sucinto para notificar os autores...');
    cy.compareSnapshot('Trabalho - Criando novo tópico');
  });

  it('enviar o formulário exibe mensagem de sucesso', () => {
    cy.get('.btn-create-topic').click();
    cy.get('.btn-primary').click();
    cy.get('.overlay-text').should('contain', 'Aguardando feedback dos autores');
    cy.compareSnapshot('Trabalho - Tópico enviado');
  });

})
