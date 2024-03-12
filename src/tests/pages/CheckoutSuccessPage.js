const HomePage = require('./HomePage');

class CheckoutSuccessPage extends HomePage {
    constructor() {
        super();

        this.checkoutSuccessPageUrl = this.reader.getProperty('CheckoutSuccess');
        this.buttonContinue = this.page.getByRole('link', { name: 'Continue' });
    }
}

module.exports = CheckoutSuccessPage;
