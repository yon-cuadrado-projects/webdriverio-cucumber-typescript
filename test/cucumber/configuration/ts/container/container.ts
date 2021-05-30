import { CheckboxesPage } from '../../../pages/checkboxes/checkboxes-page';
import { container } from 'tsyringe';

export class LoadContainer{
  public constructor(){
    container.register<CheckboxesPage>( 'CheckboxesPage', { useValue: new CheckboxesPage() } );
  }
}
