const { BasePage } = require('./basePage');

class CheckoutPage extends BasePage {
    constructor(page) {
        super(page);
    }

    get checkoutPageUrl() {
        return this.reader.getProperty('Checkout');
    }
    
    get firstAddressRadiobuttonNewAddress() {
        return this.page.getByText('I want to use a new address');
    }
    get firstAddressNameField() {
        return this.page.getByPlaceholder('First Name');
    }
    get firstAddressSurnameField() {
        return this.page.getByPlaceholder('Last Name');
    }
    get firstAddressCompanyField() {
        return this.page.getByPlaceholder('Company');
    }
    get firstAddressAddressFieldOne() {
        return this.page.getByPlaceholder('Address 1');
    }
    get firstAddressAddressFieldTwo() {
        return this.page.getByPlaceholder('Address 2');
    }
    get firstAddressCityField() {
        return this.page.getByPlaceholder('City');
    }
    get firstAddressPostalCodeField() {
        return this.page.getByPlaceholder('Post Code');
    }
    get firstAddressCountry() {
        return this.page.getByLabel('Country');
    }
    get firstAddressRegion() {
        return this.page.getByLabel('Region / State');
    }
    get firstAddressbuttonContinue() {
        return this.page.getByRole('button', { name: 'Continue' });
    }
    
    get secondAddressRadiobuttonNewAddress() {
        return this.page.locator('#collapse-shipping-address').getByText('I want to use a new address');
    }
    get secondAddressNameField() {
        return this.page.getByRole('textbox', { name: '* First Name' });
    }
    get secondAddressSurnameField() {
        return this.page.getByRole('textbox', { name: '* Last Name' });
    }
    get secondAddressCompanyField() {
        return this.page.getByRole('textbox', { name: 'Company' });
    }
    get secondAddressAddressFieldOne() {
        return this.page.getByRole('textbox', { name: '* Address' });
    }
    get secondAddressAddressFieldTwo() {
        return this.page.getByRole('textbox', { name: 'Address 2' });
    }
    get secondAddressCityField() {
        return this.page.getByRole('textbox', { name: '* City' });
    }
    get secondAddressPostalCodeField() {
        return this.page.getByRole('textbox', { name: 'Post Code' });
    }
    get secondAddressCountry() {
        return this.page.locator('#input-shipping-country');
    }
    get secondAddressRegion() {
        return this.page.locator('#input-shipping-zone');
    }
    get secondAddressbuttonContinue() {
        return this.page.getByRole('button', { name: 'Continue' });
    }
    
    get deliveryDetailsComment() {
        return this.page.locator('textarea[name="comment"]');
    }
    get deliveryFlatShippingRateRadioButton() {
        return this.page.getByLabel('Flat Shipping Rate - $');
    }
    get deliveryButtonContinue() {
        return this.page.getByRole('button', { name: 'Continue' });
    }
    
    get paymentCashOnDeliveryRadioButton() {
        return this.page.getByLabel('Cash On Delivery');
    }
    get paymentDetailsComment() {
        return this.page.locator('#collapse-payment-method').getByRole('textbox');
    }
    get paymentPolicyCheckboc() {
        return this.page.getByRole('checkbox');
    }
    get paymentButtonContinue() {
        return this.page.getByRole('button', { name: 'Continue' });
    }
    
    get confirmButtonCOnfirmOrder() {
        return this.page.getByRole('button', { name: 'Confirm Order' });
    }
};

module.exports = CheckoutPage;