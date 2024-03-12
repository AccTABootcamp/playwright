const Utils = require('../../../helpers/Utils');
const PropertiesReader = require('../../../helpers/PropertiesReader');
const Hooks = require("../steps/Hooks");

class HomePage {
    constructor() {
        console.log("Page init")
        this.page = Hooks.getPage();
        this.utils = new Utils();
        this.reader = new PropertiesReader('configs/environment.properties');
        
        this.homePageUrl = this.reader.getProperty('Home');
        this.shoppingCartIcon = this.page.getByRole('link', { name: ' Shopping Cart' });
        this.myAccountIcon = this.page.getByRole('link', { name: ' My Account' });
        this.myAccountDropdownOptionOrderHistory = this.page.getByRole('link', { name: 'Order History' });
        this.myAccountDropdownOptionLogin = this.page.getByRole('link', { name: 'Login' });
        this.desktopsDropdownTab = this.page.getByRole('link', { name: 'Desktops', exact: true });
        this.desktopsShowAll = this.page.getByRole('link', { name: 'Show All Desktops' });
    }
}

module.exports = HomePage;
