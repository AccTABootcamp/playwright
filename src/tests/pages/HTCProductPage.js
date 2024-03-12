const HomePage = require('./HomePage');

class HTCProductPage extends HomePage {
    constructor() {
        super();
  
        this.HTCProductPageUrl = this.reader.getProperty('HTC');
        this.quantityField = this.page.getByLabel('Qty');
        this.buttonAddToCart = this.page.getByRole('button', { name: 'Add to Cart' });
    }

    async fillQuantity(quantity) {
        await this.utils.fillField(this.quantityField, quantity);
    }
}

module.exports = HTCProductPage;
