// const { defineConfig } = require("cypress");
// const mochawesome = require("cypress-mochawesome-reporter/plugin");

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: "https://makeyourjodi.com",
//     env: {
//       phone: "916303481147",
//       password: "Madhu878@",
//     },
//     setupNodeEvents(on, config) {
//       mochawesome(on);
//     },
//     specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
//     supportFile: "cypress/support/e2e.js",
//   },
//   reporter: "cypress-mochawesome-reporter",
//   reporterOptions: {
//     reportDir: "cypress/reports",
//     overwrite: false,
//     html: true,
//     json: true,
//     charts: true,
//     reportTitle: "MakeYourJodi Test Report",
//   },
// });

const { defineConfig } = require("cypress");
const mochawesome = require("cypress-mochawesome-reporter/plugin");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    reportTitle: "MakeYourJodi Test Report",
  },
  e2e: {
    baseUrl: "https://makeyourjodi.com",
    env: {
      phone: " 6303481147",
      password: "Madhu878@",
    },
    viewportWidth: 1920,
    viewportHeight: 1080, // or higher depending on your screen
    setupNodeEvents(on, config) {
      mochawesome(on);
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",
  },
});
