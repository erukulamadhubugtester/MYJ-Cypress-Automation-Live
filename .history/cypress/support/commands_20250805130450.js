// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("loginAndHandlePopup", () => {
  const phone = Cypress.env("phone");
  const password = Cypress.env("password");

  cy.visit("/");

  cy.get(".container > .p-2").click();
  cy.contains("Login").click();

  // Enter phone & password with logging disabled
  cy.get(".form-control").type(phone, { log: false });
  cy.get("#password").type(password, { log: false });
  cy.get(".submit-buttonlogin").click();
  time

  cy.get("body").then(($body) => {
    if ($body.find(".mt-6 > .text-2xl").length > 0) {
      cy.log("Popup is shown");
      cy.get(".top-4", { timeout: 10000 })
        .should("be.visible")
        .click({ force: true });

      // Verify popup is closed
      cy.contains("Meet Your Matrimonial Soulmate", { timeout: 10000 }).should(
        "be.visible"
      );
    } else {
      cy.log("No popup shown");
    }
  });
});
