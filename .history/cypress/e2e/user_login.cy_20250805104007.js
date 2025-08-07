describe("MakeYourJodi - Login Menu UI Flow", () => {
  it("should show menu options and navigate to login page", () => {
    cy.visit("https://makeyourjodi.com/");

    cy.get(".container > .p-2").click(); // Click hamburger menu

    // Log all menu options (for debugging)
    cy.get(".block").then(($els) => {
      const menuTexts = [...$els].map((el) => el.innerText);
      cy.log("Menu options:", menuTexts);
    });
    // Wait for "Login" and "Create New Account" to be visible
    cy.contains("Login", { timeout: 10000 }).should("be.visible");
    cy.contains("Login").click(); // Click Login option
    // Confirm URL
    cy.url().should("include", "/login");
  });
});
