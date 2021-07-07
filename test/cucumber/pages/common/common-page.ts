import { BasePage } from './base-page';
import { injectable } from 'tsyringe';

@injectable()
export class CommonPage extends BasePage{
  public static mainObjectXpath = ".//*[@id='page']";
  public constructor( ) {
    super( CommonPage.mainObjectXpath );
  }
}
