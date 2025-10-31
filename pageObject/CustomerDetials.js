const fs = require('fs');
const screenshotpath = './screenshots/TableCreation.png';

class CustomerDetials {
    constructor(page) {
        this.page = page;
    }

    locators = {

        EditStreet: "//input[@id='edit-street']",
        Nr: "//input[@id='edit-nr']",
        Bus: "//input[@id='edit-bus']",
        Zipcode: "//input[@id='edit-zipcode']",
        EditCity: "//input[@id='edit-city']",
        Telephone: "//input[@id='edit-tel']",
        EmaiId: "//input[@id='edit-e-mail']",







    }

async CustomerDetials() {


    await this.page.fill(this.locators.EditStreet, "TestStreet");
    await this.page.fill(this.locators.Nr, "12");
    await this.page.fill(this.locators.Bus, "A");
    await this.page.fill(this.locators.Zipcode, "5600AA");
    await this.page.fill(this.locators.EditCity, "TestCity");
    await this.page.fill(this.locators.Telephone, "1234567890");
    await this.page.fill(this.locators.EmaiId, "Test@gmailk.com");
    await this.page.screenshot({ path: screenshotpath });
    


}


}
module.exports = { CustomerDetials };