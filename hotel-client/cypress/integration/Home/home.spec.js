describe('Home', () => {
  it('should renders home', () => {
    cy.visit(Cypress.env('BASE_URL'));
  });
});
