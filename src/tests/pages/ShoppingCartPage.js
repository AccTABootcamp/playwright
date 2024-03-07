const { HomePage } = require('./HomePage');

class CartPage extends HomePage {
    constructor(page) {
        super(page);
    }
    get cartPageUrl() {
        return this.reader.getProperty('Cart');
    }
    
    get buttonCheckout() {
        return this.page.getByRole('link', { name: 'Checkout', exact: true });
    }
    
};

module.exports = CartPage;