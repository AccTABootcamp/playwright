const { HomePage } = require('./HomePage');

class CheckoutSuccessPage extends HomePage{
    constructor(page) {
        super(page);
    }

    get checkoutSuccessPageUrl() {
        return this.reader.getProperty('CheckoutSuccess');
    }
    
    get buttonContinue() {
        return this.page.getByRole('link', { name: 'Continue' });
    }
};

module.exports = CheckoutSuccessPage;