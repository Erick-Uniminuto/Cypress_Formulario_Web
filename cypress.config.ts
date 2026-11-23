import { defineConfig } from "cypress";

export default defineConfig({
  watchForFileChanges:false,
  e2e:{
    supportFile:'cypress/support/commands.ts',
    blockHosts:[
      "google-analytics.com",
      "googletagmanager.com",
      "hotjar.com"
    ],
    setupNodeEvents(on, config) {
      
    },
  }
})