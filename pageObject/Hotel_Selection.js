const fs = require('fs');
const screenshotpath = './screenshots/TableCreation.png';

class HotelSelection {
    constructor(page) {
        this.page = page;
    }

    locators = {

        Hotel_Selection: "//a[text()='Bekijk']",
        Hotel_Title: "//h1[@class='hotel-title']",
        Hotel_Price: "(//div[@class='price-item__per-person--without-fee'])[1]",
        Hote_booking: "(//button[@id='btn_bookbox_book'])[1]",
        Extras: "//button[@id='submit-step-1']",
        FirstName: "//input[@id='edit-first-name-1']",
        LastName: "//input[@id='edit-last-name-1']",
        FirstName1: "//input[@id='edit-first-name-2']",
        LastName1: "//input[@id='edit-last-name-2']",
        SubmitButton: "//button[@id='submit-step-2']",
        Checkbox: "//label[@for='edit-q1-n']",
        SubmitButton1: "(//button[@type='submit'])[2]",




    }

    async HotelSelection() {



        await this.page.click(this.locators.Hotel_Selection);
        await this.page.locators(this.locators.Hotel_Title).isVisible();
        await this.page.locators(this.locators.Hotel_Price).isVisible();
        const Hotel_Price = await this.page.locator(this.locators.Hotel_Price).innerText();
        console.log("Hotel Price is:", Hotel_Price);
        await this.page.click(this.locators.Hote_booking);

        await this.page.fill(this.locators.FirstName, "TestFirst");
        await this.page.fill(this.locators.LastName, "TestLast");
        await this.page.fill(this.locators.FirstName1, "TestFirst1");
        await this.page.fill(this.locators.LastName1, "TestLast1");
        await this.page.click(this.locators.SubmitButton);
        await this.page.click(this.locators.Checkbox);
        await this.page.click(this.locators.SubmitButton1);
        await this.page.click(this.locators.Extras);


    }


}
module.exports = { HotelSelection };