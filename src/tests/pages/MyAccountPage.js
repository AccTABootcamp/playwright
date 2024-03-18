const HomePage = require('./HomePage');

class MyAccountPage extends HomePage {
    constructor() {
        super();
        this.myAccountPageUrl = this.reader.getProperty('MyAccount');
        this.accountUpdateSuccessMessage = this.page.getByText('Success: Your account has');
        this.editAccountLinkRightSubMenu = this.page.getByRole('link', { name: 'Edit Account' });
   
        this.leftMenu = this.page.locator('#content');
        this.listLeftMenu = this.page.$x('//*[@id="content"]/h2');
        this.rightMenu = this.page.locator('#column-right');
        this.listRightMenu = this.page.$$('#column-right .list-group a');
   
    }


};

module.exports = MyAccountPage;