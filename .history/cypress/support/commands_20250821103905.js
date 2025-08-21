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

// Cypress.Commands.add("loginAndHandlePopup", () => {
//   const phoneWithout91 = Cypress.env("phone"); // ✅ FIXED HERE
//   const phoneWith91 = "91" + phoneWithout91;
//   const password = Cypress.env("password"); // ✅ FIXED HERE

//   cy.visit("/");

//   cy.get(":nth-child(1) > .block").click();

//   // ✅ Check the phone input and enter number accordingly
//   cy.get(".form-control").then(($input) => {
//     const rawValue = $input.val() || "";

//     // ✅ Strip all non-digit characters: +, spaces, etc.
//     const digitsOnly = rawValue.toString().replace(/\D/g, "");

//     // ✅ Check if number already starts with '91'
//     const needs91 = !digitsOnly.startsWith("91");

//     // ✅ Decide what to type
//     const numberToType = needs91 ? phoneWith91 : phoneWithout91;

//     // Optional log for debugging
//     cy.log(`Cleaned input: ${digitsOnly} → Typing: ${numberToType}`);

//     cy.wrap($input).clear().type(numberToType, { delay: 300, log: false });
//   });

//   // ✅ Password and login
//   cy.get("#password").clear().type(password, { log: false });
//   cy.get(".submit-buttonlogin").click();

//   cy.wait(5000);

Cypress.Commands.add("loginAndHandlePopup", () => {
  const phoneWithout91 = Cypress.env("phone"); // e.g. 9876543210
  const phoneWith91 = "91" + phoneWithout91; // e.g. 919876543210
  const password = Cypress.env("password");

  cy.visit("/");

  cy.get(":nth-child(1) > .block").click();

  // ✅ Handle phone input with retry safeguard
  cy.get(".form-control").then(($input) => {
    const typeNumber = () => {
      cy.wrap($input)
        .focus()
        .type("{selectall}{backspace}", { force: true })
        .should("have.value", "")
        // step 1: type "63" to wake up mask
        .type("63", { delay: 100 })
        // step 2: clear again and type full number
        .type("{selectall}{backspace}", { force: true })
        .type(phoneWith91, { delay: 150, log: false });
    };

    // Try typing
    typeNumber();

    // ✅ Retry safeguard: retype if digits < 12
    cy.wrap($input)
      .invoke("val")
      .then((val) => {
        const clean = (val || "").replace(/\D/g, "");
        if (clean.length < phoneWith91.length) {
          cy.log(`⚠️ Retyping, only got "${clean}" digits`);
          typeNumber();
        } else {
          cy.log(`✅ Final typed: ${clean}`);
        }
      });
  });

  // ✅ Handle password
  cy.get("#password")
    .focus()
    .type("{selectall}{backspace}", { force: true })
    .should("have.value", "")
    .type(password, { log: false });

  // ✅ Submit
  cy.get(".submit-buttonlogin").click();

  // ✅ Wait for redirect or popup
  cy.location("pathname", { timeout: 10000 }).should("match", /login|home/);

  // ✅ Handle popup if shown
  cy.get("body").then(($body) => {
    if ($body.find(".mt-6 > .text-2xl").length > 0) {
      cy.log("🔔 Popup detected");

      if ($body.find(".top-4").length > 0) {
        cy.get(".top-4").should("be.visible").click({ force: true });
        cy.log("✅ Cancel icon clicked");
      } else if ($body.find(".mt-6 > .flex > .border").length > 0) {
        cy.get(".mt-6 > .flex > .border")
          .should("be.visible")
          .click({ force: true });
        cy.log("✅ Skip button clicked");
      } else {
        cy.log("❌ Popup has no close button");
      }

      cy.get(".mt-6 > .text-2xl", { timeout: 10000 }).should("not.exist");
      cy.log("✅ Popup closed successfully");
    } else {
      cy.log("ℹ️ No popup shown");
    }
  });
});

// ✅ Highlight utility (can stay here)
Cypress.Commands.add("highlight", { prevSubject: true }, (subject) => {
  cy.wrap(subject).invoke("css", "outline", "3px solid red");
  return subject;
});

// Helper to extract number from text (e.g. "Sent (5)" -> 5)
function extractCount(text) {
  const match = text.match(/\((\d+)\)/);
  return match ? parseInt(match[1]) : 0;
}
