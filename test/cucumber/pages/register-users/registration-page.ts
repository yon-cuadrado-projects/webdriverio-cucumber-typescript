// import Element from '@wdio/types';
import { User } from '../../dtos/User';

export class RegistrationPage {
  public get firstNameField(): WebdriverIO.Element {
    return $( '[name="firstName"]' );
  }
  public get lastNameField(): WebdriverIO.Element {
    return $( '[name="lastName"]' );
  }
  public get phoneField(): WebdriverIO.Element {
    return $( '[name="phone"]' );
  }
  public get PasswordField(): WebdriverIO.Element {
    return $( '[name="password"]' );
  }
  public get passwordConfirmationField(): WebdriverIO.Element {
    return $( '[name="confirmPassword"]' );
  }
  public get emailField(): WebdriverIO.Element {
    return $( '[name="email"]' );
  }
  public get address1Field(): WebdriverIO.Element {
    return $( '[name="address1"]' );
  }
  public get address2Field(): WebdriverIO.Element {
    return $( '[name="address2"]' );
  }
  public get cityField(): WebdriverIO.Element {
    return $( '[name="city"]' );
  }
  public get stateField(): WebdriverIO.Element {
    return $( '[name="state"]' );
  }
  public get postalCodeField(): WebdriverIO.Element {
    return $( '[name="postalCode"]' );
  }
  public get countryField(): WebdriverIO.Element {
    return $( '[name="country"]' );
  }
  public get userNameField(): WebdriverIO.Element {
    return $( '[name="email"]' );
  }
  public get confirmPasswordField(): WebdriverIO.Element {
    return $( '[name="confirmPassword"]' );
  }
  public get registerUserButton(): WebdriverIO.Element {
    return $( "//*[contains(text(), 'REGISTER')]" );
  }
  public get userRegisteredCorrectlyLabel(): WebdriverIO.Element {
    return $( "//*[contains(text(), 'Note: Your user name is')]" );
  }
  public get submitButton(): WebdriverIO.Element {
    return $( '[name="register"]' );
  }
  public get usersRegisteredField(): boolean {
    return false;
  }

  public constructor() {}

  public registerUsers( client: User ): boolean {
    this.fillUserDataInApp( client );
    this.submitButton.click();
    return this.userRegisteredCorrectlyLabel.waitUntilIsEnabled( 20 );
  }

  public fillUserDataInApp( userData: User ): void {
    this.firstNameField.setValue( userData.FirstName );
    this.lastNameField.setValue( userData.LastName );
    this.phoneField.setValue( userData.Phone );
    this.emailField.setValue( userData.Email );
    this.address1Field.setValue( userData.Address1 );
    this.address2Field.setValue( userData.Address2 );
    this.cityField.setValue( userData.City );
    this.stateField.setValue( userData.StateProvince );
    this.postalCodeField.setValue( userData.PostalCode );
    this.countryField.selectByVisibleText( userData.Country.toUpperCase() );
    this.userNameField.setValue( userData.UserName );
    this.PasswordField.setValue( userData.Password );
    this.passwordConfirmationField.setValue( userData.ConfirmPassword );
  }
}
