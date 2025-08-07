describe("MakeYourJodi - User Connections Page Checking ", () => {
  beforeEach(() => {
    cy.loginAndHandlePopup();
  });

  it("Connections  ", () => {
    cy.url().should("include", "/home");

    
  });
});
