import { BasePage } from './base-page';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class CommonPage extends BasePage{
  public static mainObjectXpath = ".//*[@id='page']";
  public constructor( ) {
    super( CommonPage.mainObjectXpath );
  }
}
