const HomePage = require('./HomePage');

class LoginPage extends HomePage {
    constructor() {
        super();
    }

    get loginPageUrl() {
        return this.reader.getProperty('Login');
    }
    
    get emailTextbox() {
        return this.page.getByPlaceholder('E-Mail Address');
    }
    
    get passwordTextbox() {
        return this.page.getByPlaceholder('Password');
    }
    
    get loginButton() {
        return this.page.getByRole('button', { name: 'Login' });
    }
    

    async fillLoginForm(username, password) {
        await this.utils.fillField(this.emailTextbox, username);
        await this.utils.fillField(this.passwordTextbox, password);
    }
};

module.exports = LoginPage;