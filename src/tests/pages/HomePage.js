const Utils = require('../helpers/Utils');
const PropertiesReader = require('../helpers/PropertiesReader');
const Hooks = require("../steps/Hooks"); // Import the Hooks class

class HomePage {
    constructor() {
        console.log(Hooks.getPage()); // Use the getter method to access the page instance
        this.page = Hooks.getPage(); // Assign the page instance to this.page
        this.utils = new Utils();
        this.reader = new PropertiesReader('configs/environment.properties');
    }

    get homePageUrl() {
        return this.reader.getProperty('Home');
    }

    get shoppingCartIcon() {
        return this.page.getByRole('link', { name: ' Shopping Cart' });
    }

    get myAccountIcon() {
        return this.page.getByRole('link', { name: ' My Account' });
    }

    get myAccountDropdownOptionOrderHIstory() {
        return this.page.getByRole('link', { name: 'Order History' });
    }

    get myAccountDropdownOptionLogin() {
        return this.page.getByRole('link', { name: 'Login' });
    }

    get desktopsDropdownTab() {
        return this.page.getByRole('link', { name: 'Desktops', exact: true });
    }

    get desktopsShowAll() {
        return this.page.getByRole('link', { name: 'Show All Desktops' });
    }
};

module.exports = HomePage;