const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');





module.exports = defineConfig({
  e2e: {
    projectId: "1ggwom",
    pageLoadTimeout: 120000,
    reporter: 'cypress-mochawesome-reporter',

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      require('@cypress/grep/src/plugin')(config);
      allureWriter(on, config);
            return config;
    },
  },
});
