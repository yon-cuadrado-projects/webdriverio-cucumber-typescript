var User = require('../dtos/User');

export class RegistrationPage {
    constructor () {
    }

    get firstNameField() { return $('[name="firstName"]')};
    get lastNameField() { return $('[name="lastName"]')};
    get phoneField() { return $('[name="phone"]') };
    get PasswordField() { return $('[name="userName"]') };
    get passwordConfirmationField() { return $('[name="password"]') };
    get emailField() { return $('[name="email"]') };
    get address1Field() { return $('[name="address1"]') };
    get address2Field() { return $('[name="address2"]') };
    get cityField() { return $('[name="city"]') };
    get stateField() { return $('[name="state"]') };
    get postalCodeField() { return $('[name="postalCode"]') };
    get countryField() { return $('[name="country"]') };
    get userNameField() { return $('[name="email"]') };
    get registerField() { return $('[name="register"]') };
    get confirmPasswordField() { return $('[name="confirmPassword"]') };
    get registerUserButton() { return $('[name="REGISTER"]') };
    get userRegisteredCorrectlyLabel() { return $("//*[contains(text(), 'Note: Your user name is')]") };

    get UsersRegisteredField() { return false };


    async registerUsers (client) {
        this.fillUserDataInApp(client);
        this.registerUserButton.click();
        return this.userRegisteredCorrectlyLabel.waitUntilIsEnabled(20);
    }

    async fillUserDataInApp (userData) {
        this.firstNameField.setValue(userData.FirstName);
        this.lastNameField.setValue(userData.LastName);
        this.phoneField.setValue(userData.Phone);
        this.emailField.setValue(userData.Email);
        this.address1Field.setValue(userData.Address1);
        this.address2Field.setValue(userData.Address2);
        this.cityField.setValue(userData.City);
        this.stateField.setValue(userData.StateProvince);
        this.postalCodeField.setValue(userData.PostalCode);
        this.countryField.selectByVisibleText(userData.Country.toUpperCase());
        this.userNameField.setValue(userData.UserName);
        this.PasswordField.setValue(userData.Password);
        this.passwordConfirmationField.setValue(userData.ConfirmPassword);
    }
}
