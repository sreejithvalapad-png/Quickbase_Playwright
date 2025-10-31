const fs = require('fs');
const screenshotpath = './screenshots/TableCreation.png';

class Home_page {
    constructor(page) {
        this.page = page;
    }

    locators = {

        Cookies_Title: "//h2[text()='We value your privacy  ']",
        Cookies_Accept: "//button[text()='Accept']",
        Cookies_Manage: "//button[text()='Manage']",
        Cookies_Decline: "//button[text()='Decline']",

        Staylocation: "//input[@class='clearable open-modal form-control form-text']",
        Datepicker: "(//font[text()='4'])[4]",


        //Destination
        Destination_Placeholder: "//input[@id='destination_placeholder']",
        Starting_Date: "//span[@class='a ui-state-default'][normalize-space()='4']",
        Rooms_Guests: "//div[@class='form-control open-modal travelers-pax collapsed']",
        Add_Child: "//div[@class='group_per_room_0 row']//div[@class='col-sm-4 col-md-3']//div[2]//div[1]//span[3]",
        SearchforHolidays: "//font[contains(text(),'Search for holidays')]",
        ReturnDate: "//td[@class='strong ui-datepicker-selected-to']//span[@class='a ui-state-default'][normalize-space()='13']",
        SelecttheHotel: "//div[@class='search-results-inner']//div[1]//div[3]//a[1]",






    }

    async AcceptCookies() {
        if (!this.page) throw new Error('page is not defined in Home_page');

        const { Cookies_Title, Cookies_Accept, Cookies_Manage, Cookies_Decline } = this.locators;

        // Try to wait for title (non-fatal)
        try {
            await this.page.locator(Cookies_Title).first().waitFor({ state: 'visible', timeout: 5000 });
        } catch (e) {
            // ignore if not found
        }

        // Try Accept button
        try {
            const accept = this.page.locator(Cookies_Accept).first();
            if (await accept.count() > 0) {
                await accept.waitFor({ state: 'visible', timeout: 5000 }).catch(() => { });
                await accept.click({ timeout: 5000 });
                return;
            }
        } catch (e) { /* ignore and continue */ }

        // Try Manage button
        try {
            const manage = this.page.locator(Cookies_Manage).first();
            if (await manage.count() > 0) {
                await manage.click({ timeout: 5000 });
                return;
            }
        } catch (e) { /* ignore and continue */ }

        // Try Decline button
        try {
            const decline = this.page.locator(Cookies_Decline).first();
            if (await decline.count() > 0) {
                await decline.click({ timeout: 5000 });
                return;
            }
        } catch (e) { /* ignore */ }

        // Debug: take screenshot if no cookie button found
        try {
            await this.page.screenshot({ path: screenshotpath });
        } catch (e) { }
    }


    async ClickingonStayLocation() {

        await this.page.fill(this.locators.Destination_Placeholder, 'Amsterdam');
        await this.page.click(this.locators.Starting_Date);
        await this.page.click(this.locators.ReturnDate);
        await this.page.click(this.locators.Rooms_Guests);
        await this.page.click(this.locators.Add_Child);

        await this.page.click(this.locators.SelecttheHotel);
        await this.page.screenshot({ path: screenshotpath });





    }

}

module.exports = { Home_page };