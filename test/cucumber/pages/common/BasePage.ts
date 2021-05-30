// import { Pages } from './Pages';
import { container } from 'tsyringe';

export class BasePage {
  public constructor() { }

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

  public clickOnCheckbox( checkboxLabel: string, page: string ): void{
    const pageObject: PageObject = container.resolve( page );
    pageObject.mainObject.waitUntilIsEnabled( 2 );
    pageObject.mainObject.getCheckBox( checkboxLabel ).click();
  }

  public getCheckboxStatus( checkboxLabel: string, page: string ): string{
    const pageObject: PageObject = container.resolve( page );
    return pageObject.getCheckboxStatus( checkboxLabel );
  }
}

export interface PageObject{
  mainObject: WebdriverIO.Element;
  getCheckBox( label: string ): WebdriverIO.Element;
  getCheckboxStatus( checkboxLabel: string ): string;
  clickOnCheckbox( checkboxLabel: string, page: string ): void;
}
