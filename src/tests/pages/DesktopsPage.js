const HomePage = require('./HomePage');

class DesktopsPage extends HomePage {
    constructor() {
        super();

        this.desktopsPageUrl = this.reader.getProperty('Desktops');
        const heading = this.page.getByRole('heading', { name: 'HTC Touch HD' });
        this.htcTouchHD = heading.getByRole('link');
    }
}

module.exports = DesktopsPage;
