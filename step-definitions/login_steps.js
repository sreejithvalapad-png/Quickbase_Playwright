const { Given, When, Then } = require('@cucumber/cucumber');

Given('I navigate to the login page', async function () {
  await this.page.goto('https://www.google.com');
});

When('I enter valid credentials', async function () {
  await this.page.fill('#username', 'testuser');
  await this.page.fill('#password', 'password123');
  await this.page.click('#login-button');
});

Then('I should see the dashboard', async function () {
  await this.page.waitForSelector('#dashboard');
});

Given('User launches the flipkart url', async function () {

  await this.page.goto("https://www.flipkart.com/");

});

Then('User clicks on Electronics and subsection', async function () {
  await this.page.waitForSelector("//span[text()='Electronics']");
  await this.page.locator("//span[text()='Electronics']").click();
  await this.page.locator("//span[text()='Electronics']").hover();
  await this.page.waitForSelector("//a[@title='Gaming Laptops']");
  await this.page.locator("//a[@title='Gaming Laptops']").click();
  await this.page.locator("//p[text()='HP']").click();
  await new Promise(r=> setTimeout(r,3000));
  await this.page.waitForSelector("(//label[@class='tJjCVx']//input[@type='checkbox'])[1]");
  await this.page.locator("(//label[@class='tJjCVx']//input[@type='checkbox'])[1]").click();







});