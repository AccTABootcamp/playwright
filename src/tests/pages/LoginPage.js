const HomePage = require('./HomePage');

class LoginPage extends HomePage {
    constructor() {
        super();

        this.loginPageUrl = this.reader.getProperty('Login');
        this.emailTextbox = this.page.getByPlaceholder('E-Mail Address');
        this.passwordTextbox = this.page.getByPlaceholder('Password');
        this.loginButton = this.page.getByRole('button', { name: 'Login' });
    }

    async fillLoginForm(username, password) {
        await this.utils.fillField(this.emailTextbox, username);
        await this.utils.fillField(this.passwordTextbox, password);
    }
}

module.exports = LoginPage;
