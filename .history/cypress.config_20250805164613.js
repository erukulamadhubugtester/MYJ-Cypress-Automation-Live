const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://makeyourjodi.com",
    env: {
      phone: "916303481147",
      password: "Madhu878@",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners if needed
    },
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    reportTitle: "MakeYourJodi Test Report",
  },
});
