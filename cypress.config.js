const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  chromeWebSecurity: false,
  retries: {
    runMode: 2,
  },
  projectId: 'rkvnu6',
  viewportWidth: 1366,
  viewportHeight: 768,
  e2e: {
    baseUrl1: 'https://uat.quellmove.com/',
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
   
    specPattern: 'cypress/e2e/**/*.feature',
    experimentalWebKitSupport: true
  },
})
