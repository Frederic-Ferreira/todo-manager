// describe('Passer entre différentes vues (liste / detail)', () => {
//     beforeEach(() => {
//         cy.visit('/')

//         cy.contains('Créer une note').click()

//         cy.get('[data-testid="create-input-title"]').type('Note la plus élevée');
//         cy.get('[data-testid="create-input-note"]').type('20');
//         cy.get('[data-testid="create-input-comment"]').type('Commentaire');
  
//         cy.get('[data-testid="create-todo"]').click();
//     })

//     it('Passer de la vue liste a la vue detail', () => {
//       cy.get('.list-view').should('be.visible');
//       cy.get('.detail-view').should('not.exist');

//       cy.get('.note').click();
  
//       cy.get('.list-view').should('not.exist');
//       cy.get('.detail-view').should('be.visible');
//     });
  
//     it('Passer de la vue détail à la vue liste', () => {
//       cy.get('.note').click();


//       cy.get('.list-view').should('not.exist');
//       cy.get('.detail-view').should('be.visible');
  
//       cy.contains('Quitter').click();

//       cy.get('.list-view').should('be.visible');
//       cy.get('.detail-view').should('not.exist');
  
//     });
//   });

describe('Passer entre différentes vues (liste / detail)', () => {
        beforeEach(() => {
            cy.visit('/')
    
            cy.contains('Créer une note').click()
    
            cy.get('[data-testid="create-input-title"]').type('Titre initial');
            cy.get('[data-testid="create-input-note"]').type('10');
            cy.get('[data-testid="create-input-comment"]').type('Commentaire initial');
      
            cy.get('[data-testid="create-todo"]').click();

            cy.get('.note').click();
        })

        it('Allows editing the note title', () => {
            cy.get('.titre').should('contain.text', 'Titre initial');
        
            cy.get('#edit-btn').click();

            cy.get('#titre').clear().type('Nouveau titre');
            cy.get('#note').clear().type('15');
            cy.get('#comment').clear().type('Nouveau commentaire');
          
            cy.get('#confirm-edit').click();
          
            cy.get('.note').should('contain.text', 'Nouveau titre');
            cy.get('.note').should('contain.text', '15');
            cy.get('.note').should('contain.text', 'Nouveau commentaire');
    });
})