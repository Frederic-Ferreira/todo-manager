describe('Tester créer une note', () => {
  it('Visiter le site', () => {
    cy.visit('http://localhost:5173/')
  })

  it('Créer une note', () => {
    cy.visit('http://localhost:5173/')

    cy.contains('Créer une note').click()

    cy.get('[data-testid="create-input-title"]').type('Titre');
    cy.get('[data-testid="create-input-note"]').type('12');
    cy.get('[data-testid="create-input-comment"]').type('Commentaire');

    cy.get('[data-testid="create-todo"]').click();

    cy.contains('Titre');
    cy.contains('12');
    cy.contains('Commentaire');
  })

  it('Fermer la modale', () => {
    cy.visit('http://localhost:5173/')

    cy.contains('Créer une note').click()

    cy.get('[data-testid="close-todo"]').click();
  })
})