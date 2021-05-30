import { injectable } from 'tsyringe';

@injectable()
export class LoginPage {
  public constructor() {}

  // public get loginButton(): Element {
  //   return $( '.icon-user-no-logged' );
  // }
  // public get mailField(): Element {
  //   return $( '.js-email-field' );
  // }
  // public get passwordField(): Element {
  //   browser.sendAlertText( 'admin' );
  //   return $( '.js-password-field' );
  // }

  // public clickOnLoginButton(): void {
  //   this.loginButton.click();
  // }

  // public setMail( mail: string ): void {
  //   this.mailField.setValue( mail );
  // }

  public setUserId( userId: string ): void {
    browser.sendAlertText( userId );
  }

  public setPassword( password: string ): void {
    browser.sendAlertText( password );
  }
}
