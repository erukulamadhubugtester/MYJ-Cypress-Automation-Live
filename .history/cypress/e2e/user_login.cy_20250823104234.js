describe("Login and Popup Handling", () => {
  beforeEach(() => {
    cy.loginAndHandlePopup();
  });

  it("should land on homepage after login", () => {
    cy.wait
    cy.xpath("//a[text()='Dashboard']").click();
    cy.url().should("include", "/home");
  });
});
