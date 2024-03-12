const HomePage = require('./HomePage');

class MyAccountInformationPage extends HomePage {
    constructor() {
        super();

        this.myAccountInformationPageUrl = this.reader.getProperty('MyAccountInformation');

        this.firstNameField = this.page.getByPlaceholder('First Name');
        this.lastNameField = this.page.getByPlaceholder('Last Name');
        this.telephoneField = this.page.getByPlaceholder('Telephone');
        this.emailField = this.page.getByPlaceholder('E-Mail');
        this.buttonContinue = this.page.getByRole('button', { name: 'Continue' });
    }

    async fillInformationEditingForm(dataTable) {
        const data = dataTable.rowsHash();
        await this.utils.fillField(this.firstNameField, data['First Name']);
        await this.utils.fillField(this.lastNameField, data['Last Name']);
        await this.utils.fillField(this.telephoneField, data['Telephone']);
        await this.utils.fillField(this.emailField, data['E-Mail']);
    }
}

module.exports = MyAccountInformationPage;
