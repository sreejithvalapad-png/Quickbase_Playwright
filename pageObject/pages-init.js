// const { page } = require('@playwright/test');

const {Home_page} = require('./Home_Page');
const {HotelSelection} = require('./Hotel_Selection');
const {CustomerDetials} = require('./CustomerDetials');


class PagesInit {
    // Home_page = new Home_page(this.page);

     constructor(page) {
        this.page = page;
        this.Home_page = new Home_page(this.page);
        this.HotelSelection = new HotelSelection(this.page);
        this.CustomerDetials = new CustomerDetials(this.page);
    }

}

module.exports = { PagesInit };