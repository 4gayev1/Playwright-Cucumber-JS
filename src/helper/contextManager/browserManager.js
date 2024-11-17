const { chromium, firefox, webkit } = require('playwright');
const config = require("../../../cucumber.config.js");

const invokeBrowser = async () => {
  const browserType = process.env.npm_config_BROWSER || "chrome";
  
  let browser;
  
  const options = {
    headless: config.browser.headless,
  };
  
  const browserContextOptions = {
    viewport: config.browser.viewport,
    recordVideo: {
      dir: './test-results/visualReport/',
      size: config.viewport,
    },
  };
  
  switch (browserType) {
    case "chrome":
      browser = await chromium.launch(options);
      break;
    case "firefox":
      browser = await firefox.launch(options);
      break;
    case "webkit":
      browser = await webkit.launch(options);
      break;
    default:
      throw new Error("Please set the proper browser!");
  }
  
  const context = await browser.newContext(browserContextOptions);
  return await context;
};

module.exports = {
  invokeBrowser
};
