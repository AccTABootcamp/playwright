const HomePage = require('./HomePage');

class CheckoutPage extends HomePage {
    constructor() {
        super();

        this.checkoutPageUrl = this.reader.getProperty('Checkout');
        this.firstAddressRadiobuttonNewAddress = this.page.getByText('I want to use a new address');
        this.firstAddressNameField = this.page.getByPlaceholder('First Name');
        this.firstAddressSurnameField = this.page.getByPlaceholder('Last Name');
        this.firstAddressCompanyField = this.page.getByPlaceholder('Company');
        this.firstAddressAddressFieldOne = this.page.getByPlaceholder('Address 1');
        this.firstAddressAddressFieldTwo = this.page.getByPlaceholder('Address 2');
        this.firstAddressCityField = this.page.getByPlaceholder('City');
        this.firstAddressPostalCodeField = this.page.getByPlaceholder('Post Code');
        this.firstAddressCountry = this.page.getByLabel('Country');
        this.firstAddressRegion = this.page.getByLabel('Region / State');
        this.firstAddressbuttonContinue = this.page.getByRole('button', { name: 'Continue' });
        
        this.secondAddressRadiobuttonNewAddress = this.page.locator('#collapse-shipping-address').getByText('I want to use a new address');
        this.secondAddressNameField = this.page.getByRole('textbox', { name: '* First Name' });
        this.secondAddressSurnameField = this.page.getByRole('textbox', { name: '* Last Name' });
        this.secondAddressCompanyField = this.page.getByRole('textbox', { name: 'Company' });
        this.secondAddressAddressFieldOne = this.page.getByRole('textbox', { name: '* Address' });
        this.secondAddressAddressFieldTwo = this.page.getByRole('textbox', { name: 'Address 2' });
        this.secondAddressCityField = this.page.getByRole('textbox', { name: '* City' });
        this.secondAddressPostalCodeField = this.page.getByRole('textbox', { name: 'Post Code' });
        this.secondAddressCountry = this.page.locator('#input-shipping-country');
        this.secondAddressRegion = this.page.locator('#input-shipping-zone');
        this.secondAddressbuttonContinue = this.page.getByRole('button', { name: 'Continue' });
        
        this.deliveryDetailsComment = this.page.locator('textarea[name="comment"]');
        this.deliveryFlatShippingRateRadioButton = this.page.getByLabel('Flat Shipping Rate - $');
        this.deliveryButtonContinue = this.page.getByRole('button', { name: 'Continue' });
        
        this.paymentCashOnDeliveryRadioButton = this.page.getByLabel('Cash On Delivery');
        this.paymentDetailsComment = this.page.locator('#collapse-payment-method').getByRole('textbox');
        this.paymentPolicyCheckboc = this.page.getByRole('checkbox');
        this.paymentButtonContinue = this.page.getByRole('button', { name: 'Continue' });
        
        this.confirmButtonConfirmOrder = this.page.getByRole('button', { name: 'Confirm Order' });
    }
}

module.exports = CheckoutPage;
