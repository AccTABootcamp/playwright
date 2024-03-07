const { HomePage } = require('./HomePage');

class MyAccountPage extends HomePage{
    constructor(page) {
        super(page);
    }
    get myAccountPageUrl() {
        return this.reader.getProperty('MyAccount');
    }
};

module.exports = MyAccountPage;