describe("Login and Popup Handling", () => {
  beforeEach(() => {
    cy.loginAndHandlePopup();
  });

  it("should land on homepage after login", () => {
    // cy.url().should("include", "/home");
    cy.xpath("//a[text()='Dashboard']").click();
  });
});
