import type { Urls } from '../../models/wdio-conf-additional-properties';

export class BasePage {
  public mainObjectXpath: string | undefined;

  public constructor( mainObjectXpath?: string ) {
    console.log( mainObjectXpath );
    this.mainObjectXpath = mainObjectXpath;
  }

  public async navigateToUrl ( url: keyof Urls ): Promise<void> {
    await browser.url( this.getUrl(url) );
  }

  public getUrl ( url: keyof Urls ): string {
    const urlFromData =  browser.config.params?.urls?.[url];
    if( typeof urlFromData === 'undefined' ){
      return '';
    }
    return urlFromData;
  }

  public async clickOnCheckbox( checkboxLabel: string ): Promise<void>{
    ( await this.getCheckBox( checkboxLabel ) )?.click();
  }

  public async getCheckBox ( label: string ): Promise<WebdriverIO.Element | undefined> {
    const mainObject = await $( this.mainObjectXpath ?? '' );
    return mainObject.$( `.//*[.='${label}']/../..//input` );
    // return checkbox;
  }

  public async getCheckboxStatus ( checkboxLabel: string ): Promise<string> {
    const checkbox = await this.getCheckBox( checkboxLabel );
    const checkboxParentElement = await checkbox?.parentElement();
    return await checkboxParentElement?.getAttribute( 'class' ) === 'checked' ? 'activated' : 'deactivated';
  }
}
