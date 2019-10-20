export class HomePage {
    constructor () {
    }

    get userNameField() {return $("//form[@id='load_form'][@class='ajaxlogin']//input[@name='username']");}
    get passwordField() {return $("//form[@id='load_form'][@class='ajaxlogin']//input[@name='password']");}
    get singOnButton() {return $("=SIGN-ON");}
    get registerButton() {return $("=REGISTER");}
    get registeredTextField() {return $(".//*[contains(text(),'Registered')]/..");}

    enterUserName (userNameValue) {
        this.userNameField.setValue(userNameValue);
    }

    enterPassword (passwordValue) {
        this.passwordField.setValue(passwordValue);
    }

    clickOnRegisterButton () {
        this.registerButton.hoverAndClick();
    }

    checkUserCorrectlyLogged () {
        this.userNameField.WaitUntilCheckIsEnabled(false, 10);
    }

    getElementLineNumbers () {
        return this.registeredTextField.GetWebElementLineNumbers();
    }
}
