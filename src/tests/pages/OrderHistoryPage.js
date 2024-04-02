const Utils = require('../../../helpers/Utils');
const HomePage = require('./HomePage');

class OrderHistoryPage extends HomePage {
    constructor() {
        super();

        this.orderHistoryPageUrl = this.reader.getProperty('OrderHistory');

        this.continueButton = page.getByRole('link', { name: 'Continue' });
    }

    //---------------------------------------ACTION METHODS---------------------------------------

}

module.exports = OrderHistoryPage;
