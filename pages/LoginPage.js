import { Selector, t } from 'testcafe';

class LoginPage {
    constructor() {
        this.usernameInput = Selector("input[name = 'Username']");
        this.passwordInput = Selector("input[name='Password']");
        this.loginButton = Selector(".login-btn");
    }

    async login(username, password) {
        await t
            .typeText(this.usernameInput, username)
            .typeText(this.passwordInput, password)
            .click(this.loginButton);
    }
}

export default new LoginPage();
