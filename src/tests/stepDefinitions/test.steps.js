const { Given, When, Then, context, getElement, expect } = require("../../helper/imports/commons");

Given(`User is on {string} page`, async (url) => {
  await context.page.goto(url);
});

When(`User types {string} in {string}`, async (text, input) => {
  await getElement(input).fill(text);
});

When(`User clicks {string}`, async (element) => {
  await getElement(element).click();
});

When(`User waits {int} seconds`, async (sec) => {
  await context.page.waitForTimeout(sec);
});

Then(
  `{string} should have {string} text`,
  async (actualText, expectedText) => {
       await expect(getElement(actualText)).toHaveText(expectedText)
    },
);

Then(
  `Should send get request {string}`,
  async (url) => {
       let response = await context.request.get(url)
      response = await response.json();
      expect(response).toHaveProperty("message")
       
    },
);