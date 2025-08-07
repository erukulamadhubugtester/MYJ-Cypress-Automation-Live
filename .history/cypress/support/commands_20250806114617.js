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
  cy.wait(3000);

cy.get("body").then(($body) => {
  if ($body.find(".mt-6 > .text-2xl").length > 0) {
    cy.log("Popup is shown");

    // First try to click the cancel icon if it exists
    if ($body.find(".top-4").length > 0) {
      cy.get(".top-4", { timeout: 10000 }).should("be.visible").click({ force: true });
    }
    // Else try clicking the "Skip for now" button if it exists
    else if ($body.find('.mt-6 > .flex > .border').length > 0) {
      cy.get('.mt-6 > .flex > .border').should("be.visible").click({ force: true });
    }

    // Confirm popup is gone
    cy.contains("Meet Your Matrimonial Soulmate", { timeout: 10000 }).should("be.visible");
  } else {
    cy.log("No popup shown");
  }
});


Cypress.Commands.add("highlight", { prevSubject: true }, (subject) => {
  cy.wrap(subject).invoke("css", "outline", "3px solid red");
  return subject;
});
});