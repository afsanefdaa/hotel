describe('Home', () => {
  it('should renders home', () => {
    cy.visit(Cypress.env('BASE_URL'));
  });

  it('should renders home', () => {
    expect(true).to.be.false
  });
});
