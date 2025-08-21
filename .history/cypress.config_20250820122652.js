// const { defineConfig } = require("cypress");
// const dotenv = require("dotenv");
// const mochawesome = require("cypress-mochawesome-reporter/plugin");
// const fs = require("fs-extra");
// const path = require("path");

// dotenv.config();

// // Function to delete folders if they exist
// function deleteFolder(folderPath) {
//   if (fs.existsSync(folderPath)) {
//     fs.removeSync(folderPath);
//     console.log(`✅ Deleted: ${folderPath}`);
//   }
// }

// module.exports = defineConfig({
//   reporter: "cypress-mochawesome-reporter",
//   reporterOptions: {
//     reportDir: "cypress/reports",
//     overwrite: false,
//     html: true,
//     json: true,
//     charts: true,
//     reportTitle: "MakeYourJodi Test Report",
//   },
//   e2e: {
//     baseUrl: "https://makeyourjodi.com",
//     env: {
//       phone: process.env.CYPRESS_phone,
//       password: process.env.CYPRESS_password,
//     },
//     viewportWidth: 1920,
//     viewportHeight: 1080,
//     setupNodeEvents(on, config) {
//       // Clean old reports & screenshots before test run
//       deleteFolder(path.join(__dirname, "cypress", "screenshots"));
//       deleteFolder(path.join(__dirname, "cypress", "reports"));

//       mochawesome(on);
//       return config;
//     },
//     specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
//     supportFile: "cypress/support/e2e.js",
//   },
// });

const { defineConfig } = require("cypress");
const dotenv = require("dotenv");
const mochawesome = require("cypress-mochawesome-reporter/plugin");
const fs = require("fs-extra");
const path = require("path");

dotenv.config();

// Function to delete folders if they exist
function deleteFolder(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.removeSync(folderPath);
    console.log(`✅ Deleted: ${folderPath}`);
  }
}

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    reportTitle: "MakeYourJodi Test Report",
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  e2e: {
    baseUrl: "https://makeyourjodi.com",
    env: {
      phone: process.env.CYPRESS_phone,
      password: process.env.CYPRESS_password,
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // Clean only old report subfolders
      deleteFolder(path.join(__dirname, "cypress", "screenshots"));
      deleteFolder(path.join(__dirname, "cypress", "reports", "json"));
      deleteFolder(path.join(__dirname, "cypress", "reports", "html"));

      mochawesome(on);
      return config;
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",
  },
});

