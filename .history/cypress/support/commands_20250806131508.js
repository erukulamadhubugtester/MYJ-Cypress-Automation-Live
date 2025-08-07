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

  // cy.get(".container > .p-2").click();
  // cy.contains("Login").click();
  cy.get(':nth-child(1) > .block').click()

  // Enter phone & password with logging disabled
  cy.get(".form-control").type(phone, { delay: 500, log: false });
  cy.get("#password").type(password, { log: false });
  cy.get(".submit-buttonlogin").click();
  cy.wait(5000);

  // cy.get("body").then(($body) => {
  //   // Check if popup title is present (or any unique popup identifier)
  //   if ($body.find(".mt-6 > .text-2xl").length > 0) {
  //     cy.log("Popup is shown");

  //     // Try cancel icon first if visible
  //     if ($body.find(".top-4").length > 0) {
  //       cy.get(".top-4").should("be.visible").click({ force: true });
  //     }
  //     // Else try "Skip" or second close button
  //     else if ($body.find(".mt-6 > .flex > .border").length > 0) {
  //       cy.get(".mt-6 > .flex > .border")
  //         .should("be.visible")
  //         .click({ force: true });
  //     }

  //     // ✅ Ensure popup is gone before proceeding
  //     cy.get(".mt-6 > .text-2xl", { timeout: 10000 }).should("not.exist");
  //     cy.log("Popup closed successfully");
  //   } else {
  //     cy.log("No popup shown");
  //   }
  // });

  cy.get("body").then(($body) => {
    // Check if popup title or any unique identifier is visible
    if ($body.find(".mt-6 > .text-2xl").length > 0) {
      cy.log("🔔 Popup is shown");

      // Attempt to click the cancel icon (if present)
      cy.get("body").then(($b) => {
        if ($b.find(".top-4").length > 0) {
          cy.get(".top-4")
            .should("be.visible")
            .scrollIntoView()
            .click({ force: true });
          cy.log("✅ Cancel icon clicked");
        }
        // Else attempt to click the 'Skip for now' button
        else if ($b.find(".mt-6 > .flex > .border").length > 0) {
          cy.get(".mt-6 > .flex > .border")
            .should("be.visible")
            .scrollIntoView()
            .click({ force: true });
          cy.log("✅ Skip button clicked");
        } else {
          cy.log("❌ No close button found in popup");
        }
      });

      // Confirm popup is closed before proceeding
      cy.get(".mt-6 > .text-2xl", { timeout: 10000 }).should("not.exist");
      cy.log("✅ Popup closed successfully");
    } else {
      cy.log("ℹ️ No popup shown");
    }
  });

  Cypress.Commands.add("highlight", { prevSubject: true }, (subject) => {
    cy.wrap(subject).invoke("css", "outline", "3px solid red");
    return subject;
  });
});
