describe("MakeYourJodi - Login Menu UI Flow", () => {
  it("should show menu options and navigate to login page", () => {
    cy.visit("https://makeyourjodi.com/");

    cy.get('.container > .p-2').click(); // Click hamburger menu

    // Log all menu options (for debugging)
    cy.get(".block").then(($els) => {
      const menuTexts = [...$els].map((el) => el.innerText);
      cy.log("Menu options:", menuTexts);
    });

    // Wait for "Login" and "Create New Account" to be visible
    cy.contains("Login", { timeout: 10000 }).should("be.visible");
    cy.contains("Create New Account", { timeout: 10000 }).should("be.visible");

    cy.contains("Login").click(); // Click Login option

    // On login page, validate presence of "Create New Account"
    cy.contains("Create New Account", { timeout: 10000 }).should("be.visible");

    // Final Login button (if present on this screen)
    cy.get('.flex > :nth-child(1) > .block').click();

    // Confirm URL
    cy.url().should("include", "/login");
  });
});
