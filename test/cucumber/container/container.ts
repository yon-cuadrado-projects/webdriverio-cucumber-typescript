import { CheckboxesPage } from '../pages/checkboxes/checkboxes-page';
import { CommonPage } from '../pages/common/common-page';
import { container } from 'tsyringe';

export const registerPagesInContainer = (): void =>{
  container.register<CheckboxesPage>( 'CheckboxesPage', { useValue: new CheckboxesPage() } );
  container.register<CommonPage>( 'CommonPage', { useValue: new CommonPage() } );
};
