const HomePage = require('./HomePage');

class MyAccountPage extends HomePage {
    constructor() {
        super();
        this.myAccountPageUrl = this.reader.getProperty('MyAccount');
        this.accountUpdateSuccessMessage = this.page.getByText('Success: Your account has');
        this.editAccountLinkRightSubMenu = this.page.getByRole('link', { name: 'Edit Account' });
    }
};

module.exports = MyAccountPage;