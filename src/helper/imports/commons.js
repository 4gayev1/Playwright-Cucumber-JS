const { expect } = require('playwright/test');
const { Given, When, Then } = require("@cucumber/cucumber");
const { getElement } = require("../pomController/elementController");
const { context } = require('../../hooks/context');

module.exports= {expect,Given, When,Then,getElement,context}