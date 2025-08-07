describe("MakeYourJodi - User Home Page checking ", () => {
  beforeEach(() => {
    cy.loginAndHandlePopup();
  });

  it("should land on homepage after login", () => {
    cy.url().should("include", "/home");
  });

  it("check out Prerence Settings "),() =>{

  }
});
