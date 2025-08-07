describe("MakeYourJodi Homepage UI Test - User Login", () => {
  it("should display the WebSite URL", () => {
    cy.visit("https://makeyourjodi.com/");
    
    // Log the current URL in the Cypress runner
    cy.url().then((currentUrl) => {
      cy.log("Current URL is: " + currentUrl);
      console.log("Current URL is:", currentUrl); // Also logs to browser console
    });

    // Optionally, assert the URL is correct
    cy.url().should("eq", "https://makeyourjodi.com/");
  });
});
