describe('Tester créer des notes', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/')
    })

    it('Ajouter une note', () => {
        cy.get('.notes-list .note').should('not.exist');

        cy.contains('Créer une note').click()

        cy.get('[data-testid="create-input-title"]').type('Note la plus élevée');
        cy.get('[data-testid="create-input-note"]').type('20');
        cy.get('[data-testid="create-input-comment"]').type('Commentaire');

        cy.get('[data-testid="create-todo"]').click();

        cy.get('.notes-list .note').should('have.length', 1);
    })

    it('Ajouter deux notes et checker leur valeurs', () => {
        cy.visit('http://localhost:5173/')

        cy.get('.notes-list .note').should('not.exist');

        cy.contains('Créer une note').click()
        

        cy.get('[data-testid="create-input-title"]').type('Note la plus élevée');
        cy.get('[data-testid="create-input-note"]').type('20');
        cy.get('[data-testid="create-input-comment"]').type('Commentaire');

        cy.get('[data-testid="create-todo"]').click();

        cy.get('.notes-list .note').should('have.length', 1);


        cy.contains('Créer une note').click()

        cy.get('[data-testid="create-input-title"]').type('Note la plus basse');
        cy.get('[data-testid="create-input-note"]').type('0');
        cy.get('[data-testid="create-input-comment"]').type('Commentaire');
    
        cy.get('[data-testid="create-todo"]').click();
    
        cy.get('.notes-list .note').first().should('contain', 'Note la plus élevée');
        cy.get('.notes-list .note').last().should('contain', 'Note la plus basse');
        
        cy.get('.notes-list .note').should('have.length', 2);
    })
})

describe('Tester le tri des notes', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/');

      cy.contains('Créer une note').click()
      
      cy.get('[data-testid="create-input-title"]').type('Note la plus basse');
      cy.get('[data-testid="create-input-note"]').type('0');
      cy.get('[data-testid="create-input-comment"]').type('Commentaire');

      cy.get('[data-testid="create-todo"]').click();

      cy.contains('Créer une note').click()

      cy.get('[data-testid="create-input-title"]').type('Note la plus élevée');
      cy.get('[data-testid="create-input-note"]').type('20');
      cy.get('[data-testid="create-input-comment"]').type('Commentaire');
 
      cy.get('[data-testid="create-todo"]').click();

      cy.contains('Créer une note').click()

      cy.get('[data-testid="create-input-title"]').type('Note moyenne');
      cy.get('[data-testid="create-input-note"]').type('10');
      cy.get('[data-testid="create-input-comment"]').type('Commentaire');
 
      cy.get('[data-testid="create-todo"]').click();
    });
  
    it('Trier par note', () => {
      cy.get('.notes-list .note').first().should('contain', 'Note la plus basse');
      cy.get('.notes-list .note').eq(1).should('contain', 'Note la plus élevée');
      cy.get('.notes-list .note').last().should('contain', 'Note moyenne');
  
      cy.contains('Trier par note').click();
  
      cy.get('.notes-list .note').first().should('contain', 'Note la plus élevée');
      cy.get('.notes-list .note').eq(1).should('contain', 'Note moyenne');
      cy.get('.notes-list .note').last().should('contain', 'Note la plus basse');

      cy.contains('Trier par note').click();

      cy.get('.notes-list .note').first().should('contain', 'Note la plus basse');
      cy.get('.notes-list .note').eq(1).should('contain', 'Note moyenne');
      cy.get('.notes-list .note').last().should('contain', 'Note la plus élevée');
    });
  
    it('Trier par date', () => {
        cy.get('.notes-list .note').first().should('contain', 'Note la plus basse');
        cy.get('.notes-list .note').eq(1).should('contain', 'Note la plus élevée');
        cy.get('.notes-list .note').last().should('contain', 'Note moyenne');
      
        cy.contains('Trier par date').click()
      
        cy.get('.notes-list .note').first().should('contain', 'Note moyenne');
        cy.get('.notes-list .note').eq(1).should('contain', 'Note la plus élevée');
        cy.get('.notes-list .note').last().should('contain', 'Note la plus basse');

        cy.contains('Trier par date').click()
      
        cy.get('.notes-list .note').first().should('contain', 'Note la plus basse');
        cy.get('.notes-list .note').eq(1).should('contain', 'Note la plus élevée');
        cy.get('.notes-list .note').last().should('contain', 'Note moyenne');
      });
      
  });
  
describe('Tester la recherche de notes', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/');

      cy.contains('Créer une note').click();
      cy.get('[data-testid="create-input-title"]').type('Titre 1');
      cy.get('[data-testid="create-input-note"]').type('10');
      cy.get('[data-testid="create-input-comment"]').type('Commentaire 1');
      cy.get('[data-testid="create-todo"]').click();
  
      cy.contains('Créer une note').click();
      cy.get('[data-testid="create-input-title"]').type('Titre 2');
      cy.get('[data-testid="create-input-note"]').type('5');
      cy.get('[data-testid="create-input-comment"]').type('Commentaire 2');
      cy.get('[data-testid="create-todo"]').click();
  
      cy.contains('Créer une note').click();
      cy.get('[data-testid="create-input-title"]').type('Titre 3');
      cy.get('[data-testid="create-input-note"]').type('15');
      cy.get('[data-testid="create-input-comment"]').type('Commentaire 3');
      cy.get('[data-testid="create-todo"]').click();
    });
  
    it('Rechercher une note', () => {

      cy.get('.search-bar input').type('Titre');
      cy.get('.notes-list .note').should('have.length', 3);
  
      cy.get('.search-bar input').clear().type('Commentaire');
      cy.get('.notes-list .note').should('have.length', 3);
  
      cy.get('.search-bar input').clear().type('2');
      cy.get('.notes-list .note').should('have.length', 1);
      cy.get('.notes-list .note').should('contain', 'Titre 2');

      cy.get('.search-bar input').clear().type('15');
      cy.get('.notes-list .note').should('have.length', 1);
      cy.get('.notes-list .note').should('contain', 'Titre 3');
  
      cy.get('.search-bar input').clear().type('inexistante');
      cy.get('.notes-list .note').should('have.length', 0);
    });
  });
  