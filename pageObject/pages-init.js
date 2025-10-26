const { page } = require('@playwright/test');

const {Tables} = require('./Table');


class PagesInit {
    Tables = new Tables(this.page);

}

module.exports = { PagesInit };