const HomePage = require('./HomePage');

class CartPage extends HomePage {
    constructor() {
        super();

        this.cartPageUrl = this.reader.getProperty('Cart');
        this.buttonCheckout = this.page.getByRole('link', { name: 'Checkout', exact: true });
    }
}

module.exports = CartPage;
