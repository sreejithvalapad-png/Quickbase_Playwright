const { Given, When, Then } = require('@cucumber/cucumber');
const { PagesInit } = require('../pageObject/pages-init');


Given('User launches the application URL', async function () {
    try {
        // Create a new context with enhanced stealth settings
        const context = await global.browser.newContext({
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
            viewport: { width: 1920, height: 1080 },
            deviceScaleFactor: 1,
            hasTouch: false,
            isMobile: false,
            permissions: ['geolocation'],
            bypassCSP: true,
            extraHTTPHeaders: {
                'Accept-Language': 'en-GB,en;q=0.9',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache'
            },
            ignoreHTTPSErrors: true
        });

        // Initial wait before navigation
        await new Promise(resolve => setTimeout(resolve, 5000));

        this.page = await context.newPage();

        // Add evasion scripts
        await this.page.addInitScript(() => {
            Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
            window.chrome = { runtime: {} };
        });

        await this.page.goto('https://www.tui.co.uk/', {
            waitUntil: 'commit',
            timeout: 60000
        });

        // Wait for page to be fully loaded
        await Promise.all([
            this.page.waitForLoadState('load'),
            this.page.waitForLoadState('networkidle', { timeout: 60000 })
        ]);

    } catch (error) {
        console.error(`Navigation failed: ${error.message}`);
        await this.page?.screenshot({ path: 'error-screenshot.png' });
        throw error;
    }

    await new Promise(resolve => setTimeout(resolve, 20000));
});


Then('Accepting the cookies', async function () {
    const pageObjs = new PagesInit(this.page);
    await pageObjs.Home_page.AcceptCookies();

});

Then('Then User enters room guest details and proceed to book the hotel', async function () {

    const pageObjs = new PagesInit(this.page);
    await pageObjs.HotelSelection.HotelSelection();

});

Then('Then User enters the customer details and proceed to payment page', async function () {

    const pageObjs = new PagesInit(this.page);
    await pageObjs.CustomerDetials.CustomerDetials();
});
