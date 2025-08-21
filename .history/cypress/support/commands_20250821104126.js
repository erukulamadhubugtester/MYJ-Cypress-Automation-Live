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

// ✅ Handle phone input (React-safe clear + set)
cy.get(".form-control").then(($input) => {
  const input = $input[0];

  // Helper: set value in a React-friendly way
  const setReactValue = (val) => {
    const setter =
      Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        "value"
      ).set;
    setter.call(input, val);
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
  };

  // 1) Clear via native setter (mask may still reinsert +91)
  setReactValue("");

  // 2) Read what the mask left after clearing
  const digitsAfterClear = (input.value || "").replace(/\D/g, "");

  // 3) Decide what to set:
  //    If the mask already injects country code (starts with 91),
  //    we type only the 10-digit local number. Otherwise type 91+number.
  const valueToSet = digitsAfterClear.startsWith("91")
    ? Cypress.env("phone")            // 10 digits
    : "91" + Cypress.env("phone");    // 12 digits

  // 4) Set final value
  setReactValue(valueToSet);

  // 5) Verify length; if short (mask glitch), set once more
  const expectedLen = valueToSet.replace(/\D/g, "").length;
  const gotLen = (input.value || "").replace(/\D/g, "").length;
  if (gotLen !== expectedLen) {
    setReactValue(valueToSet);
  }

  cy.log(`☎️ Typed: ${(input.value || "").replace(/\D/g, "")}`);
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
