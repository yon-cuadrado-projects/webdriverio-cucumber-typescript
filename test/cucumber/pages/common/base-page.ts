
import type { Urls } from 'test/cucumber/models/wdio-conf-additional-properties';
export class BasePage {
  public mainObjectXpath: string | undefined;
  public mainObject: WebdriverIO.Element | null;

  public constructor( mainObjectXpath?: string ) {
    this.mainObjectXpath = mainObjectXpath;
    this.mainObject = mainObjectXpath ? $( mainObjectXpath ) : null;
  }

  public navigateToUrl ( url: keyof Urls ): void {
    browser.url( this.getUrl( url ) );
  }

  public getUrl ( url: keyof Urls ): string {
    const urlFromData = browser.config.params?.urls[url];
    if( typeof urlFromData === 'undefined' ){
      return '';
    }
    return urlFromData;
  }

  public clickOnCheckbox( checkboxLabel: string ): void{
    this.getCheckBox( checkboxLabel )?.click();
  }

  public getCheckBox ( label: string ): WebdriverIO.Element | undefined{
    return this.mainObject?.$( `.//*[.='${label}']/../..//input` );
  }

  public getCheckboxStatus ( checkboxLabel: string ): string {
    return this.getCheckBox( checkboxLabel )?.parentElement().getAttribute( 'class' ) === 'checked' ? 'activated' : 'deactivated';
  }
}
