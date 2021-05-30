
import { injectable } from 'tsyringe';

@injectable()
export class CheckboxesPage {
  public mainObject: WebdriverIO.Element = $( ".//*[@id='page']" );
  public searchBox: WebdriverIO.Element = $( ".//*[@id='search_query_top']" );
  public searchBoxMagnifierGlassButton: WebdriverIO.Element = $( ".//*[@name='submit_search']" );

  public getCheckBox ( label: string ): WebdriverIO.Element {

    return $( `.//*[.='${label}']/../..//input` );
  }

  public getCheckboxStatus ( checkboxLabel: string ): string {
    return this.getCheckBox( checkboxLabel ).parentElement().getAttribute( 'class' ) === 'checked' ? 'activated' : 'deactivated';
  }

  public SetSearchBoxText( searchText: string ): void{
    this.searchBox.setValue( searchText );
  }

  public ClickOnMagnifierGlassButton(): void{
    this.searchBox.click();
  }
}
