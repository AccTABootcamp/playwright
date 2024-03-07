const { HomePage } = require('./HomePage');

class HTCProductPage extends HomePage{
    constructor(page) {
        super(page);
    }

    get HTCProductPageUrl() {
        return this.reader.getProperty('HTC');;
    }
    
    get quantityField() {
        return this.page.getByLabel('Qty');
    }
    
    get buttonAddToCart() {
        return this.page.getByRole('button', { name: 'Add to Cart' });
    }

    async fillQuantity(quantity) {
        await this.utils.fillField(this.quantityField, quantity);
    }
};

module.exports = HTCProductPage;