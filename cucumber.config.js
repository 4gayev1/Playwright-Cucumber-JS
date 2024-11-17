module.exports = {
    default: {
      tags: process.env.npm_config_TAGS || "",
      format: [
              "progress-bar",
              "rerun:@rerun.txt",
              "allure-cucumberjs/reporter"
            ],
      formatOptions: {
        resultsDir: "allure-result",
      },
      paths: ["src/tests/features/"],
      dryRun: false,
      require: ["src/tests/stepDefinitions/*.js", "src/hooks/hooks.js"],
      parallel: 2,
    },
    browser: {
      viewport: {
        width: 1280,
        height: 720,
      },
      headless: !true,
    },
  };
  