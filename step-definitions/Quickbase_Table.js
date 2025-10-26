const { Given, When, Then } = require('@cucumber/cucumber');

Given('User able to access Quickbase application', async function () {
  await this.page.goto('https://www.google.com');
});

When('User creates a new Table with required fields {string} and {string}', async function (TableName, Description) {

});


Then('Verify the Table is created successfully', async function () {
});

Then('Add new Fields', async function () {
});