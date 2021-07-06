import { BasePage } from '../common/base-page';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class CheckboxesPage extends BasePage{
  public static mainObjectXpath = ".//*[@id='page']";

  public constructor( ) {
    super( CheckboxesPage.mainObjectXpath );
  }

  public async getSearchBox(): Promise<WebdriverIO.Element>{
    return $( ".//*[@id='search_query_top']" );
  }

  public async getSearchBoxMagnifierGlassButton(): Promise<WebdriverIO.Element>{
    return $( ".//*[@name='submit_search']" );
  }

  public async SetSearchBoxText( searchText: string ): Promise<void>{
    const searchBox = await this.getSearchBox();
    await searchBox.setValue( searchText );
  }

  public async ClickOnMagnifierGlassButton(): Promise<void>{
    const searchBoxMagnifierGlassButton = await this.getSearchBoxMagnifierGlassButton();
    await searchBoxMagnifierGlassButton.click();
  }
}
