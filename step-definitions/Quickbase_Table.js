const { Given, When, Then } = require('@cucumber/cucumber');
const { PagesInit } = require('../pageObject/pages-init');

const pageObjs = new PagesInit(page);


Given('User able to access Quickbase application', async function () {
  await page.goto('https://team.quickbase.com/nav/app/bvigdyd9j/action/appoverview/647378fd-6b9b-444b-9aae-3b78ec22cad3');
});

When(/^User creates a new Table with required fields "([^"]*)" and "([^"]*)"$/, async function (TableName, Description) {

  const ValidateTableCreation = await pageObjs.Tables.CreatingNewTable();
  this.attach(ValidateTableCreation.ValidateTableCreation, 'image/png');



});


Then('Verify the Table is created successfully', async function () {
});

Then('Add new Fields', async function () {
});


Given('User able to access the Table created', async function () {
});

Then('User able to see all the labels inside the Table', async function () {
});

Then('User able to update the TableName', async function () {
});

Then('User able to copy the Field label', async function () {
});

Then('User able to delete the Field label', async function () {
});

Then('User able to access the Structure of the Table', async function () {
});

Then('User able to drag and drop the fields', async function () {
});



