const { HomePage } = require('./HomePage');

class DesktopsPage extends HomePage{
    constructor(page) {
        super(page);
    }

    get desktopsPageUrl() {
        return this.reader.getProperty('Desktops');
    }
    
    get htcTouchHD() {
        const heading = this.page.getByRole('heading', { name: 'HTC Touch HD' });
        return heading.getByRole('link');
    }
};

module.exports = DesktopsPage;