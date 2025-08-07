const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

Cypress.Commands.add(
  "scrollBelowHeader",
  { prevSubject: "element" },
  (subject) => {
    // Scroll element into view
    cy.wrap(subject)
      .scrollIntoView({ block: "center", inline: "center" })
      .then(($el) => {
        // Scroll slightly down to make it below header
        const headerHeight = 100; // Adjust this based on your header height
        cy.window().then((win) => {
          const rect = $el[0].getBoundingClientRect();
          win.scrollBy(0, rect.top - headerHeight);
        });
      });

    return cy.wrap(subject);
  }
);
