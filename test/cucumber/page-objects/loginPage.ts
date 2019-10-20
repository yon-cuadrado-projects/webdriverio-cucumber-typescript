
export class LoginPage {
    constructor () {
    }
    get loginButton() { return $('.icon-user-no-logged') };
    get mailField() { return $('.js-email-field') };
    get passwordField() { return $('.js-password-field') };

    clickOnLoginButton () {
        this.loginButton.click();
    }

    setMail (mail) {
        this.mailField.setValue(mail);
    }

    setPassword (password) {
        this.passwordField.setValue(password);
    }
}

