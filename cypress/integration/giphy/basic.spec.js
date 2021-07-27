describe('example to-do app', () => {
    beforeEach(() => {

      cy.visit('http://localhost:3000')
    })
  
    it('Check navigation', () => {
      cy.get('[data-cy=naviagte-btn]').click();	  
      cy.url().should('eq', 'http://localhost:3000/trending')
    });

    it('Check search functionality', () => {
        cy.get('[data-cy=search-input]').type('cat');
        cy.get('[data-cy=search-btn]').click();	  
        cy.wait(500);
        cy.request('https://api.giphy.com/v1/gifs/search?api_key=5pz3ijoel9TP8PVJPb0SDND5kdXihPyc&q=cat&limit=10&offset=1')
        .then((response) => {
          expect(response).property('status').to.equal(200)
        })
    });
});  