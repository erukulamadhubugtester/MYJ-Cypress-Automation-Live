describe("MakeYourJodi - Login Menu UI Flow", () => {
  it("should show menu options and navigate to login page", () => {
    // Step 1: Visit the homepage
    cy.visit("https://makeyourjodi.com/");

    // Step 2: Click on the hamburger menu (3 lines)
    cy.get(".container > .p-2").click();

    // Step 3: Verify menu options are visible
    cy.contains("Login").should("be.visible");
    cy.contains("Create New Account").should("be.visible");

    // Step 4: Click on "Login"
    cy.contains("Login").click();

    // Step 5: On login page, confirm "Create New Account" is still visible
    cy.contains("Create New Account").should("be.visible");

    // Step 6: Click the Login button (if part of the form or page UI)
    cy.get(".flex > :nth-child(1) > .block").click();

    // Step 7: Assert URL contains '/login'
    cy.url().should("include", "/login");

    // Optional: Log final URL
    cy.url().then((url) => {
      cy.log("✅ Navigated to:", url);
    });
  });
});
