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

Cypress.Commands.add(
  "scrollBelowHeader",
  { prevSubject: "element" },
  (subject) => {
    const headerHeight = 100; // Adjust as needed
    cy.wrap(subject)
      .scrollIntoView({ block: "center", inline: "center" })
      .then(($el) => {
        cy.window().then((win) => {
          const rect = $el[0].getBoundingClientRect();
          win.scrollBy(0, rect.top - headerHeight);
        });
      });

    return cy.wrap(subject);
  }
);
