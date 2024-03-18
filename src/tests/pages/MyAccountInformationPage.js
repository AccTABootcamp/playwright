const Utils = require('../../../helpers/Utils');
const HomePage = require('./HomePage');

class MyAccountInformationPage extends HomePage {
    constructor() {
        super();

        this.myAccountInformationPageUrl = this.reader.getProperty('MyAccountInformation');

        this.firstNameTextbox = this.page.getByPlaceholder('First Name');
        this.lastNameTextbox = this.page.getByPlaceholder('Last Name');
        this.telephoneTextbox = this.page.getByPlaceholder('Telephone');
        this.emailTextbox = this.page.getByPlaceholder('E-Mail');
        this.buttonContinue = this.page.getByRole('button', { name: 'Continue' });
    }

    async fillInformationEditingForm(dataTable) {
        const data = dataTable.rowsHash();
        await Utils.fillField(this.firstNameTextbox, data['First Name']);
        await Utils.fillField(this.lastNameTextbox, data['Last Name']);
        await Utils.fillField(this.telephoneTextbox, data['Telephone']);
        await Utils.fillField(this.emailTextbox, data['E-Mail']);
    }
}

module.exports = MyAccountInformationPage;
