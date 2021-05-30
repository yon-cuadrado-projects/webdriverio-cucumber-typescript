export class HomePage {
  public constructor() {}

  public get userNameField(): WebdriverIO.Element {
    return $( "//form[@id='load_form'][@class='ajaxlogin']//input[@name='username']" );
  }
  public get passwordField(): WebdriverIO.Element {
    return $( "//form[@id='load_form'][@class='ajaxlogin']//input[@name='password']" );
  }
  public get singOnButton(): WebdriverIO.Element {
    return $( '=SIGN-ON' );
  }
  public get registerButton(): WebdriverIO.Element {
    return $( '=REGISTER' );
  }
  public get registeredTextField(): WebdriverIO.Element {
    return $( ".//*[contains(text(),'Registered')]/.." );
  }

  public enterUserName( userNameValue: string ): void {
    this.userNameField.setValue( userNameValue );
  }

  public enterPassword( passwordValue: string ): void {
    this.passwordField.setValue( passwordValue );
  }

  public clickOnRegisterButton(): void {
    this.registerButton.hoverAndClick();
  }

  public checkUserCorrectlyLogged(): void {
    this.userNameField.WaitUntilCheckIsEnabled( false, 10 );
  }

  public getElementLineNumbers(): void {
    return this.registeredTextField.GetWebElementLineNumbers();
  }
}
