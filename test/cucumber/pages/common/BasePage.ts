export class BasePage {
  public mainObjectXpath: string;
  public mainObject: WebdriverIO.Element;

  public constructor( mainObjectXpath?: string ) {
    console.log( mainObjectXpath );
    this.mainObjectXpath = mainObjectXpath;
    this.mainObject = mainObjectXpath ? $( mainObjectXpath ) : null;
  }

  public navigateToUrl ( url: string | undefined ): void {
    browser.url( this.getUrl( url ) );
  }

  public getUrl ( url: string | undefined ): string | undefined {
    const urlFromData = browser.config.params.urls[url] as string;
    if( typeof urlFromData === 'undefined' ){
      return '';
    }
    return urlFromData;
  }

  public clickOnCheckbox( checkboxLabel: string ): void{
    this.getCheckBox( checkboxLabel ).click();
  }

  public getCheckBox ( label: string ): WebdriverIO.Element {
    return this.mainObject.$( `.//*[.='${label}']/../..//input` );
  }

  public getCheckboxStatus ( checkboxLabel: string ): string {
    return this.getCheckBox( checkboxLabel ).parentElement().getAttribute( 'class' ) === 'checked' ? 'activated' : 'deactivated';
  }
}

// export interface PageObject{
//   mainObject: WebdriverIO.Element;
//   getCheckboxStatus( checkboxLabel: string ): string;
//   clickOnCheckbox( checkboxLabel: string, page: string ): void;
// }
