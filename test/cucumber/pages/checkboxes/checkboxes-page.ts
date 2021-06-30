import { BasePage } from '../common/base-page';
import { injectable } from 'tsyringe';

@injectable()
export class CheckboxesPage extends BasePage{
  public static mainObjectXpath = ".//*[@id='page']";
  public searchBox: WebdriverIO.Element = $( ".//*[@id='search_query_top']" );
  public searchBoxMagnifierGlassButton: WebdriverIO.Element = $( ".//*[@name='submit_search']" );

  public constructor( ) {
    super( CheckboxesPage.mainObjectXpath );
  }

  public SetSearchBoxText( searchText: string ): void{
    this.searchBox.setValue( searchText );
  }

  public ClickOnMagnifierGlassButton(): void{
    this.searchBox.click();
  }
}
