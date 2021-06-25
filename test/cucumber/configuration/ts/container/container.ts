import { CheckboxesPage } from '../../../pages/checkboxes/checkboxes-page';
import { container } from 'tsyringe';

export const registerPagesInContainer = (): void =>{
  container.register<CheckboxesPage>( 'CheckboxesPage', { useValue: new CheckboxesPage() } );
};
